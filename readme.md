[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

add [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) setAzimuthalAngle and getPolarAngle methods.

#### [Live Demo](https://jameshsu1125.github.io/lesca-threejs-orbitcontrols/)

# Installation

```sh
npm install lesca-threejs-orbitcontrols --save
```

## Usage

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'lesca-threejs-orbitcontrols';

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);

// create controls object
const controls = new new OrbitControls(THREE)(camera, renderer.domElement);

// keep update
function animate() {
  requestAnimationFrame(animate);
  controls.update();
}

animate();
```

## Development

### Methods

| method                                     |     description     |
| :----------------------------------------- | :-----------------: |
| .**setPolarAngle**(**angle**:_number_)     |   set Polar Angle   |
| .**setAzimuthalAngle**(**angle**:_number_) | set Azimuthal Angle |

### Features

- maintain if necessary
