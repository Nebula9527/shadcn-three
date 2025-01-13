import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";

// 缓冲几何体,自定义顶点信息,顶点公用，减少内存
const BufferGeometry01 = () => {
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

    // 创建立方体
    const geometry = new THREE.BufferGeometry();

    // 2.优化创建方式,一个平面需要4个顶点
    const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    // 2.设置顶点索引，2和0索引重复使用，减少顶点
    geometry.setIndex(
      new THREE.BufferAttribute(new Uint32Array([0, 1, 2, 2, 3, 0]), 1)
    );

    // 创建分组
    geometry.addGroup(0, 3, 0);
    geometry.addGroup(3, 3, 1);

    // 创建第一个材质
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    // 创建第二个材质
    const material2 = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    // 创建网格
    const plane = new THREE.Mesh(geometry, [material, material2]);
    threeSceneRef.current!.scene.add(plane);

    // 穿件第二个分组例子，使用立方体
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    const boxMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    const boxMaterial3 = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    const boxMaterial4 = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true, // 线框
      side: THREE.DoubleSide,
    });
    const box = new THREE.Mesh(boxGeometry, [
      boxMaterial1,
      boxMaterial2,
      boxMaterial3,
      boxMaterial4,
    ]);
    threeSceneRef.current!.scene.add(box);

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
      // plane.rotation.x += 0.01;
      // plane.rotation.y += 0.01;
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

export default BufferGeometry01;
