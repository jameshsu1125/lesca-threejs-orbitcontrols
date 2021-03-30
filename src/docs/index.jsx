import React from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from './../lib/index';
const controller = OrbitControls(THREE);

import './styles.css';

console.log(controller);

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
