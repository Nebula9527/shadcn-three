import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// 贴图纹理的基本使用
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

    // 创建平面
    const planeGe = new THREE.PlaneGeometry(1, 1);
    // 创建又贴图的材质
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: new THREE.TextureLoader().load(
        "./texture/watercover/CityNewYork002_COL_VAR1_1K.png"
      ),
      side: THREE.DoubleSide,
      transparent: true, // 允许透明
      // 环境光贴图
      aoMap: new THREE.TextureLoader().load(
        "./texture/watercover/CityNewYork002_AO_1K.jpg"
      ),
      aoMapIntensity: 1,
      // 透明度贴图，透明度贴图按照黑色的层度，灰色为半透明，黑色完全透明
      // alphaMap: new THREE.TextureLoader().load("./texture/door/height.jpg"),
      // 光照贴图
      // lightMap: new THREE.TextureLoader().load("./texture/colors.png"),
      // 高光贴图
      specularMap: new THREE.TextureLoader().load(
        "./texture/watercover/CityNewYork002_GLOSS_1K.jpg"
      ),
    });
    const plane = new THREE.Mesh(planeGe, planeMaterial);

    // 创建环境贴图 // 创建环境贴图、背景贴图
    const envMapLoader = new RGBELoader().load(
      "./texture/Alex_Hart-Nature_Lab_Bones_2k.hdr",
      (envMap) => {
        // 设置球形映射
        envMap.mapping = THREE.EquirectangularReflectionMapping;
        // 设置背景贴图
        threeSceneRef.current!.scene.background = envMap;
        // 设置面板环境贴图
        // {
        //   planeMaterial.envMap = envMap;
        // }
        // threeSceneRef.current!.scene.environment = envMap;
      }
    );
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
    // 添加环境光效果调试
    gui
      .add(planeMaterial, "aoMapIntensity")
      .min(0)
      .max(1)
      .step(0.1)
      .name("ao强度");

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

export default BufferGeometry01;
