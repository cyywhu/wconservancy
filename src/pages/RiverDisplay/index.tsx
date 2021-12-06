import * as THREE from 'three';
import { useState, useEffect } from 'react';
import styles from './index.less';

const RiverDisplay = () => {

  // 创建一个场景、相机、渲染器
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
  camera.position.z = 3;
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(400, 400);

  useEffect(() => {
  // 绑定一个node展示
  if(document.getElementById('canvas-frame')){
    const node: HTMLElement = document.getElementById('canvas-frame')!;
    node.appendChild(renderer.domElement);
    node.addEventListener('resize', () => {
      renderer.setSize(node.offsetWidth, node.offsetHeight);
      camera.aspect = node.offsetWidth / node.offsetHeight;
      camera.updateProjectionMatrix();
    }); 

    // 创建一个3D物体加入场景
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial ({color: 'blue'});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 创建动画
    function animation(){          
      requestAnimationFrame(animation);
      renderer.render(scene, camera);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }
    animation();
  }
  }, [])



  return (
    <div id={'canvas-frame'} className={styles.canvas} />
  );
};
export default RiverDisplay;