import { createGui } from "@/lib/gui";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";
import { createThreeScene } from "@/lib/gui";
// GLTF加载器
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

// 缓冲几何体,自定义顶点信息,顶点公用，减少内存
const Raycaster01 = () => {
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

    // 创建三个球体
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    sphere1.position.x = 3;
    threeSceneRef.current.scene.add(sphere1);

    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    sphere2.position.x = -3;
    threeSceneRef.current.scene.add(sphere2);

    const sphere3 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x0000ff })
    );
    sphere3.position.x = 0;
    threeSceneRef.current.scene.add(sphere3);

    // 创建射线
    const raycaster = new THREE.Raycaster();

    // 绑定事件
    threeRef.current!.addEventListener("click", (event) => {
      // 获取元素的边界
      const rect = threeRef.current!.getBoundingClientRect();
      // 计算相对位置并转换为[-1,1]
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      console.log(mouseX, mouseY);

      // 创建射线
      raycaster.setFromCamera(
        new THREE.Vector2(mouseX, mouseY),
        threeSceneRef.current!.camera
      );

      // 射线检测
      const intersects = raycaster.intersectObjects([
        sphere1,
        sphere2,
        sphere3,
      ]);

      console.log(intersects);
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

export default Raycaster01;
