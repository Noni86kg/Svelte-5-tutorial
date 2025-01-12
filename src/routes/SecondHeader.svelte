<script lang="ts">
	import { getNumOfClickContext } from './context';
	import type { Snippet } from 'svelte';

	let {
		name,
		children,
		secondChild
	}: {
		name: string;
		children: Snippet;
		secondChild: Snippet<[string]>;
	} = $props();

	const numOfClick = getNumOfClickContext();
</script>

<div>
	<h1>{name ? name : 'User'}'s Form</h1>

	{@render children()}

	<h3>{@render secondChild('Scott')}</h3>

	<p>Number of click: {numOfClick.num}</p>
	<button onclick={() => (numOfClick.num += 1)}>Increment by 1</button>
</div>

<!-- <h2>{name.replaceAll('t', 'X')}</h2>

{fake_name} -->

<style>
</style>
