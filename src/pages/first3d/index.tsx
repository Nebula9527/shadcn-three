import { useEffect, useRef } from "react";
import * as THREE from "three";

const First3d = () => {
  const threeRef = useRef<HTMLDivElement>(null);

  // 渲染器引用
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 相机宽高比
      0.1, // 近裁剪面
      100 // 远裁剪面
    );
    // 创建渲染器
    rendererRef.current = new THREE.WebGLRenderer();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.render(scene, camera);
    threeRef.current?.appendChild(rendererRef.current.domElement);

    // 创建立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 创建材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // 创建网格
    const cube = new THREE.Mesh(geometry, material);
    // 将网格添加到场景中
    scene.add(cube);
    // 设置相机位置
    camera.position.z = 5;
    // 渲染帧
    const animate = () => {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      rendererRef.current?.render(scene, camera);
    };
    animate();

    // 渲染
    // rendererRef.current?.render(scene, camera);

    return () => {
      rendererRef.current?.dispose();
    };
  }, []);

  return <div className="w-full h-full" ref={threeRef}></div>;
};

export default First3d;
