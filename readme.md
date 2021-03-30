[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-threejs-orbitcontrols --save
```

# Usage

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'lesca-threejs-orbitcontrols';

// create function
const Orb = new OrbitControls(THREE);

// then create controls object
const controls = new Orb(camera, renderer.domElement);

// keep update
animate();
function animate() {
	requestAnimationFrame(animate);
	controls.update();
}

// set angle
function clickSomethingToChangeAngel() {
	controls.setPolarAngle((Math.PI / 180) * 90);
}
```

# Methods

| method                   | options |     description     | default |
| :----------------------- | :-----: | :-----------------: | ------: |
| setPolarAngle(angle)     |  angle  |   set Polar Angle   |         |
| setAzimuthalAngle(angle) |  angle  | set Azimuthal Angle |         |
| getPolarAngle()          |         |   get Polar Angle   |         |
| getAzimuthalAngle()      |         | get Azimuthal Angle |         |
