import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// 纹理色彩空间，解决纹理色彩原图和渲染后色彩不正确问题
const Texture02 = () => {
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

    // 创建平面
    const planeGe = new THREE.PlaneGeometry(1, 1);
    // 创建又贴图的材质
    const texture = new THREE.TextureLoader().load(
      "./texture/watercover/CityNewYork002_COL_VAR1_1K.png"
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: texture,
      transparent: true, // 允许透明
    });
    const plane = new THREE.Mesh(planeGe, planeMaterial);

    threeSceneRef.current!.scene.add(plane);

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
    // 添加色彩空间调试
    gui
      .add(texture, "colorSpace", {
        sRGB: THREE.SRGBColorSpace,
        Linear: THREE.LinearSRGBColorSpace,
      })
      .name("纹理色彩空间")
      .onChange(() => {
        texture.needsUpdate = true;
      });

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

export default Texture02;
