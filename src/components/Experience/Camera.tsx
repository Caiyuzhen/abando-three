import React from 'react'
import Experience from './Experience'
import Sizes from './utils/Size'


export default class Camera {
	experience: Experience
	sizes: Sizes

	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes //因为在 Experience 里边已经实例化了 sizes, 所以这里直接拿过来用就行了
	}
}