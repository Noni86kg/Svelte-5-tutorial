import { getContext, setContext } from 'svelte';

type Banana = { banana: string };
type NumOfClick = { num: number };

let bananaKey = Symbol('banana');
let numKey = Symbol('numOfClick');

export function setBananaContext(banana: Banana) {
	setContext(bananaKey, banana);
}

export function getBananaContext(): Banana {
	return getContext(bananaKey);
}

export function setNumOfClickContext(num: NumOfClick) {
	setContext(numKey, num);
}

export function getNumOfClickContext(): NumOfClick {
	return getContext(numKey);
}
