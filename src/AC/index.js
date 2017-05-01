import {INCREMENT, DICREMENT} from '../constants'

export function increment() {
	return {
		type: INCREMENT
	}
}

export function dicrement() {
	return {
		type: DICREMENT
	}
}