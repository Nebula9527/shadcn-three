import { createGui, createThreeScene } from "@/lib/gui";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";
// 引入顶点法向量辅助器
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";

// uv加法向量的使用
// 存在法向量才能进行环境光的反射
const Normal01 = () => {
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

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("./texture/uv_grid_opengl.jpg");

    // 创建平面,基于three已有材质
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x808080,
      map: texture,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), planeMaterial);
    plane.position.set(-2, 0, 0);
    threeSceneRef.current.scene.add(plane);

    // 使用BufferGeometry创建平面
    const bufferGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);
    // 创建索引
    const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
    // 设置索引，1代表每个索引只取indices中的一个值
    bufferGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const material = new THREE.MeshBasicMaterial({
      color: 0x808080,
      map: texture,
      side: THREE.DoubleSide,
    });

    // 手动创建uv
    const uv = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    // 2代表每个uv取uv中的两个值
    bufferGeometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    // 设置buffer面板的uv
    bufferGeometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));

    // 手动创建normal法线，发现是三维向量，代表三个轴的值
    const normal = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);

    // 设置normal，3代表每个normal取normal中的三个值
    bufferGeometry.setAttribute("normal", new THREE.BufferAttribute(normal, 3));

    const mesh = new THREE.Mesh(bufferGeometry, material);

    // 设置mesh的位置
    mesh.position.set(2, 0, 0);

    // 创建顶点法向量辅助器
    const vertexNormalsHelper = new VertexNormalsHelper(mesh, 0.1, 0x00ff00);
    threeSceneRef.current.scene.add(vertexNormalsHelper);
    threeSceneRef.current.scene.add(mesh);

    // 加载环境贴图
    const rgbeLoader = new RGBELoader();

    rgbeLoader.load("/texture/Alex_Hart-Nature_Lab_Bones_2k.hdr", (envMap) => {
      // 设置清醒贴图
      envMap.mapping = THREE.EquirectangularReflectionMapping;
      // 设置背景贴图
      threeSceneRef.current!.scene.background = envMap;
      // 设置环境贴图
      threeSceneRef.current!.scene.environment = envMap;
      // 为three的材质设置环境环境贴图
      planeMaterial.envMap = envMap;
      // 为手动的材质设置环境贴图(如果不手动设置noamals，就无法实现环境反射)
      material.envMap = envMap;
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

export default Normal01;
