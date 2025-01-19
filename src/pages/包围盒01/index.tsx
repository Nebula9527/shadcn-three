import { createGui, createThreeScene } from "@/lib/gui";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// 包围盒基本使用
const BoundingBox01 = () => {
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

    // 加载glb文件
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./model/Duck.glb", (gltf) => {
      threeSceneRef.current!.scene.add(gltf.scene);
      // 找打鸭子的mesh
      const duck = gltf.scene.getObjectByName("LOD3spShape") as THREE.Mesh;
      {
        // 方式1，使用setFromObject
        // 计算包围盒
        // const boundingBox = new THREE.Box3().setFromObject(duck);
        // // 创建包围盒
        // const boundingBoxMesh = new THREE.Box3Helper(boundingBox, 0xff0000);
        // threeSceneRef.current!.scene.add(boundingBoxMesh);
      }
      {
        // 方式2，使用computeBoundingBox
        // 这种方式存在问题，不会计算世界变幻矩阵，也就是缩放等信息，推荐方式一
        // 处理世界矩阵
        duck.updateMatrixWorld(true);
        duck.geometry.computeBoundingBox();

        const boundingBoxMesh = new THREE.Box3Helper(
          duck.geometry.boundingBox!.clone().applyMatrix4(duck.matrixWorld),
          0xff0000
        );
        threeSceneRef.current!.scene.add(boundingBoxMesh);
      }
    });

    // 创建环境贴图
    const envMapLoader = new RGBELoader().load(
      "./texture/Alex_Hart-Nature_Lab_Bones_2k.hdr",
      (envMap) => {
        envMap.mapping = THREE.EquirectangularReflectionMapping;
        threeSceneRef.current!.scene.background = envMap;
        threeSceneRef.current!.scene.environment = envMap;
      }
    );

    // const duck = threeSceneRef.current!.scene.getObjectByName("Duck");

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

export default BoundingBox01;
