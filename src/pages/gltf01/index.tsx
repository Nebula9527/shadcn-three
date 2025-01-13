import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";
// GLTF加载器
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

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

    // 创建场景后设置背景颜色
    threeSceneRef.current.scene.background = new THREE.Color(0x808080); // 设置为灰色

    // 实例化GLTF加载器
    const glteLoader = new GLTFLoader();
    // 加载模型
    glteLoader.load("/model/Duck.glb", (gltf) => {
      threeSceneRef.current!.scene.add(gltf.scene);
    });

    // 创建环境贴图
    new RGBELoader().load(
      "/texture/Alex_Hart-Nature_Lab_Bones_2k.hdr",
      (environmentMap) => {
        environmentMap.mapping = THREE.EquirectangularReflectionMapping;
        threeSceneRef.current!.scene.environment = environmentMap;
      }
    );

    // 实例化draco加载器
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    // 关联glte的DracoLoader，这样，加载数据遇到压缩的时候，会自动使用draocloader加载器
    glteLoader.setDRACOLoader(dracoLoader);
    glteLoader.load("/model/city.glb", (gltf) => {
      threeSceneRef.current!.scene.add(gltf.scene);
    });

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
