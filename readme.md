[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-threejs-OrbitControls --save
```

# Usage

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'lesca-threejs-OrbitControls';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 100);
controls.update();

function animate() {
	requestAnimationFrame(animate);
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
	renderer.render(scene, camera);
}

function clickSomethingToChangeAngel() {
	controls.setPolarAngle((Math.PI / 180) * 90);
}
```

# Methods

| method                                         | options |     description     | default |
| :--------------------------------------------- | :-----: | :-----------------: | ------: |
| setPolarAngle(angle)                           |  angle  |   set Polar Angle   |         |
| setAzimuthalAngle(angle)                       |  angle  | set Azimuthal Angle |         |
| getPolarAngle()                                |         |   get Polar Angle   |         |
| getAzimuthalAngle()                            |         | get Azimuthal Angle |         |
| rotateLeft(angle)                              |         |    to left angle    |         |
| rotateUp(angle)                                |         |     to up angle     |         |
| pan(deltaX, deltaY, screenWidth, screenHeight) |         |   i am trying...    |         |
