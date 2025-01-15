import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";

// uv应用基础
const Uv01 = () => {
  const threeRef = useRef<HTMLDivElement>(null);

  // 渲染器引用
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const threeSceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
  }>();

  useEffect(() => {
    threeSceneRef.current = createThreeScene(threeRef);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("./texture/uv_grid_opengl.jpg");

    // 创建平面
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: 0x808080, map: texture })
    );
    plane.position.set(-2, 0, 0);
    threeSceneRef.current.scene.add(plane);

    // 使用BufferGeometry创建平面
    const bufferGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);
    // 创建索引
    const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
    // 设置索引，1代表每个索引只取indices中的一个值
    bufferGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const material = new THREE.MeshBasicMaterial({
      color: 0x808080,
      map: texture,
    });

    // 手动创建uv
    const uv = new Float32Array([0, 0, 1, 0, 1, 1, 0, 0]);
    // 2代表每个uv取uv中的两个值
    bufferGeometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    // 设置buffer面板的uv
    bufferGeometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));

    const mesh = new THREE.Mesh(bufferGeometry, material);
    mesh.position.set(2, 0, 0);
    threeSceneRef.current.scene.add(mesh);

    // 创建球体
    // const sphere = new THREE.Mesh(
    //   new THREE.SphereGeometry(1, 32, 32),
    //   new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // );

    // threeSceneRef.current.scene.add(sphere);

    //创建控制器
    const controls = new OrbitControls(
      threeSceneRef.current!.camera,
      threeSceneRef.current!.renderer.domElement
    );
    // 添加阻尼效果
    controls.enableDamping = true;
    // 创建坐标系
    const axesHelper = new THREE.AxesHelper(100);
    threeSceneRef.current.scene.add(axesHelper);
    // 创建gui
    const gui = createGui(axesHelper, threeSceneRef.current.camera);
    // 渲染帧
    const animate = () => {
      controls.update();
      requestAnimationFrame(animate);
      threeSceneRef.current!.renderer.render(
        threeSceneRef.current!.scene,
        threeSceneRef.current!.camera
      );
    };
    animate();

    return () => {
      rendererRef.current?.dispose();
    };
  }, []);
  return <div className="w-full h-full" ref={threeRef}></div>;
};

export default Uv01;
