import * as dat from "lil-gui";
import * as THREE from "three";
export const createGui = (
  axesHelper: THREE.AxesHelper,
  camera: THREE.Camera
) => {
  const gui = new dat.GUI();
  const folder = gui.addFolder("辅助工具");
  // 显示、隐藏坐标
  folder.add(axesHelper, "visible").name("坐标轴");

  // 设置相机
  gui.add(camera.position, "z").name("相机远近").min(0).max(10).step(0.01);
  return gui;
};

// 创建3D画布基本配置
export const createThreeScene = (ref: React.RefObject<HTMLDivElement>) => {
  const scene = new THREE.Scene();
  // 创建透视相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 5; // 相机位置
  const renderer = new THREE.WebGLRenderer(); // 创建渲染器
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小
  renderer.render(scene, camera); // 渲染场景
  ref.current?.appendChild(renderer.domElement);
  return { scene, camera, renderer };
};
