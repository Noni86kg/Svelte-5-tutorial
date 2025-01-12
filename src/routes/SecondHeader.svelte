<script lang="ts">
	import { createState, ScottState } from './state.svelte';
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

	const myState = createState();
	const myStateTwo = new ScottState();
</script>

<div>
	<h1>{name ? name : 'User'}'s Form</h1>

	{@render children()}

	<h3>{@render secondChild('Scott')}</h3>

	<button onclick={myState.up}>{myState.value}</button>

	<button onclick={() => myStateTwo.up()}>Scott State: {myStateTwo.value}</button>
</div>

<!-- <h2>{name.replaceAll('t', 'X')}</h2>

{fake_name} -->

<style>
</style>
