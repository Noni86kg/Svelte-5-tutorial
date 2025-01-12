// Example
const context = new Map();

export function setContext<T>(key: any, value: T) {
	context.set(key, value);
}

export function getContext(key: any) {
	return context.get(key);
}

export function hasContext(key: any) {
	return context.has(key);
}

export function getAllContexts() {
	return context;
}
