import { use, useEffect, useState } from "react";
import * as THREE from "three";

export default function Post() {
  // 定义相机输出画布的尺寸(单位:像素px)
  const width = 800; //宽度
  const height = 500; //高度
  const [scene1, setScene] = useState(null);
  const [camera1, setCamera] = useState(null);
  const [mesh1, setMesh] = useState(null);

  useEffect(() => {
    newTree();
  });

  function newTree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  function animate() {
    // requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // renderer.render( scene, camera );
  }
  useEffect(() => {
    // animate()
  });

  // function initScene() {
  //   const scene = new THREE.Scene();
  //   const geometry = new THREE.BoxGeometry(100, 100, 100);
  //   //创建一个材质对象Material
  //   const material = new THREE.MeshBasicMaterial({
  //     color: 0xff0000, //0xff0000设置材质颜色为红色
  //   });

  //   // 两个参数分别为几何体geometry、材质material
  //   const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  //   //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  //   mesh.position.set(0, 10, 0);

  //   // 在threejs中你创建了一个表示物体的虚拟对象Mesh，需要通过.add()方法，把网格模型mesh添加到三维场景scene中。
  //   scene.add(mesh);
  //   setMesh(mesh);
  //   setScene(scene);
  // }
  // function initCamera() {
  //   //相机在Three.js三维坐标系中的位置
  //   // 根据需要设置相机位置具体值
  //   camera.position.set(200, 200, 200);
  //   //相机观察目标指向Threejs 3D空间中某个位置
  //   camera.lookAt(0, 0, 0); //坐标原点
  //   camera.lookAt(0, 10, 0); //y轴上位置10
  //   camera.lookAt(mesh.position); //指向mesh对应的位置

  //   // 判断相机相对三维场景中长方体位置
  //   // 你可以把三维场景中长方体mesh想象为一个房间，然后根据相机位置和长方体位置尺寸对比，判断两者相对位置。你可以发现设置相机坐标(200, 200, 200)，位于长方体外面一处位置。
  //   // 长方体尺寸100, 100, 100
  //   const geometry = new THREE.BoxGeometry(100, 100, 100);
  //   const mesh = new THREE.Mesh(geometry, material);
  //   // 相机位置xyz坐标：0,10,0
  //   mesh.position.set(0, 10, 0);
  //   // 相机位置xyz坐标：200, 200, 200
  //   camera.position.set(200, 200, 200);
  //   // 视椎体
  //   // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
  //   const width = 800; //宽度
  //   const height = 500; //高度
  //   // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  //   // PerspectiveCamera( fov, aspect, near, far )
  //   const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

  //   setCamera(camera);
  // }
  // function initRenderer(scene, camera) {
  //   // 创建渲染器对象
  //   const renderer = new THREE.WebGLRenderer();
  //   // 设置Canvas画布尺寸.setSize()
  //   // 定义threejs输出画布的尺寸(单位:像素px)
  //   const width = 800; //宽度
  //   const height = 500; //高度
  //   renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)

  //   renderer.render(scene, camera); //执行渲染操作

  //   document.body.appendChild(renderer.domElement);
  //   document.getElementById("webgl").appendChild(renderer.domElement);
  // }

  return (
    <div id="webgl" style={{ marginTop: "200px", marginLeft: "100px" }}></div>
  );
}
