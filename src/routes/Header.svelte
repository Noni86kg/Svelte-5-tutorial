<script lang="ts">
	import { createState } from './state.svelte';

	let {
		name,
		fake_name = 'Wes'
	}: {
		name: string;
		fake_name?: string;
	} = $props();

	const myState = createState();
</script>

<div>
	<h1>Hello {name}</h1>

	<button
		onclick={() => {
			myState.value = 10;
		}}>{myState.value} Set to 10</button
	>
</div>

<!-- <h2>{name.replaceAll('t', 'X')}</h2>

{fake_name} -->

<style>
</style>
