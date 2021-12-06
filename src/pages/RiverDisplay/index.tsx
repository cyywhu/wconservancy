import * as THREE from 'three';
import { useState, useEffect } from 'react';
import styles from './index.less';

const RiverDisplay = () => {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer({antialias: true}));
  const [scene, setScene] = useState<THREE.Scene>(new THREE.Scene());
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera());

  useEffect(() => {
    // init
    const width = 400;
    const height = 400;
    renderer.setSize(width, height);
    const node: HTMLElement = document.getElementById('canvas-frame')!;
    node.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 1.0);

    // init camera
    const newCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    setCamera(newCamera);
    camera.position.set(400,400,400)
    camera.up.set(0,1,0);
    camera.lookAt(0,0,0);

    // init scene
    //const scene = new THREE.Scene();

    // init light
    const light = new THREE.AmbientLight(0xffffff);
    light.position.set(300, 300, 0);
    scene.add(light);

    // init object
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshLambertMaterial({color:0x0000ff});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    //renderer.render(scene, camera);
    animation();

  }, [])

  const animation = () => {         
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

  return (
    <div id={'canvas-frame'} className={styles.canvas} />
  );
};
export default RiverDisplay;