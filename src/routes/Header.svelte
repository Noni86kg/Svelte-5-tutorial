<script lang="ts">
	import { getNumOfClickContext } from './context';

	let {
		name,
		fake_name = 'Wes'
	}: {
		name: string;
		fake_name?: string;
	} = $props();

	const numOfClick = getNumOfClickContext();
</script>

<div>
	<h1>Hello {name}</h1>

	<p>Number of click: {numOfClick.num}</p>
	<button onclick={() => (numOfClick.num += 5)}>Increment by 5</button>
</div>

<!-- <h2>{name.replaceAll('t', 'X')}</h2>

{fake_name} -->

<style>
</style>
