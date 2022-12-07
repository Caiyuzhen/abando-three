import React from 'react'
import * as THREE from 'three'
import Sizes from './utils/Size'



export default class Experience {
	static instance: any //🔥🔥单实例的模式, 把各种 class 的实例都放在 Experience 这里, 其他组件通过 Experience.instance 来获取实例
	canvas: HTMLCanvasElement //类里边的属性
	sizes!: Sizes

	constructor(canvas:HTMLCanvasElement) {
		// super(canvas) //继承的类需要 super 一下
		this.canvas = canvas
		console.log('Hey, 成功新建类型');

		if(Experience.instance) {
			return Experience.instance
		}
		Experience.instance = this
		const scene = new THREE.Scene()
		this.sizes = new Sizes()

		// // from https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene
		
		// const camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 0.1, 1000 );

		// const renderer = new THREE.WebGLRenderer();
		// renderer.setSize( window.innerWidth, window.innerHeight );
		// document.body.appendChild( renderer.domElement );

		// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		// const material = new THREE.MeshBasicMaterial( { color: '#3370FF' } );
		// const cube = new THREE.Mesh( geometry, material );
		// scene.add( cube );

		// camera.position.z = 5;

		// function animate() {
		// 	requestAnimationFrame( animate );

		// 	cube.rotation.x += 0.01;
		// 	cube.rotation.y += 0.01;

		// 	renderer.render( scene, camera );
		// };

		// animate();
	}
}

