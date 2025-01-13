import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";

// 缓冲几何体,自定义顶点信息,顶点公用，减少内存
const Fox01 = () => {
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

    // 创建长方体
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 50),
      new THREE.MeshBasicMaterial({
        color: "#00ff00",
      })
    );

    // 创建雾效果
    const fox = new THREE.Fog(0x000000, 0.1, 20);

    // 创建指数雾效果
    const fox2 = new THREE.FogExp2(0x000000, 0.1);

    // 添加雾气效果
    threeSceneRef.current.scene.fog = fox2;

    threeSceneRef.current.scene.add(box);

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

export default Fox01;
