import React, { useEffect } from "react";
import * as THREE from "three";
// import styles from "../../styles/globals.scss";
export default function Post() {
  useEffect(() => {
    newTree();
  });

  function newTree() {
    // 场景
    const scene = new THREE.Scene();
    // 相机 参数---视场角度, Canvas画布宽高比, 近裁截面, 远裁截面
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // 渲染器
    const renderer = new THREE.WebGLRenderer();
    // camera.position.set(200, 200, 200); //相机位置具体值 相机位置xyz坐标：200, 200, 200
    // camera.lookAt(0, 0, 0); //坐标原点
    // camera.lookAt(mesh.position); //指向mesh对应的位置
    camera.position.z = 10;

    // 设置three.js渲染区域的尺寸(像素px)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // document.getElementById("webgl").appendChild(renderer.domElement);
    // 几何形状
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象Mesh
    // 设置网格模型在三维空间中的位置坐标，默认是坐标原点
    mesh.position.set(0, 5, 0);
    // 你可以把三维场景中长方体mesh想象为一个房间，然后根据相机位置和长方体位置尺寸对比，判断两者相对位置。你可以发现设置相机坐标(200, 200, 200)，位于长方体外面一处位置。
    // .add()方法，把网格模型mesh添加到三维场景scene中
    scene.add(mesh);

    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera); //执行渲染操作
  }
  function animate() {
    // requestAnimationFrame( animate );
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    // renderer.render( scene, camera );
  }

  return (
    <div id="webgl" style={{ marginTop: "200px", marginLeft: "100px" }}></div>
  );
}
