import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";
import * as TWEEN from "three/examples/jsm/libs/tween.module.js";

// 补间动画
const Tween = () => {
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

    // 创建场景后设置背景颜色
    threeSceneRef.current.scene.background = new THREE.Color(0x808080); // 设置为灰色

    // 创建球体
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    threeSceneRef.current.scene.add(sphere);

    // 创建补间动画示例
    const tween = new TWEEN.Tween(sphere.position);

    tween
      .to({ x: 5 }, 2000)
      .repeat(4)
      .onUpdate((pos) => {
        console.log(pos);
      })
      .yoyo(true);

    tween.start();

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
      TWEEN.update();
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

export default Tween;
