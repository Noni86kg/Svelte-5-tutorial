<script lang="ts">
	import { getAllContexts } from 'svelte';
	import { getBananaContext } from './context';

	const banana = getBananaContext();
</script>

<p>{banana.banana}</p>

<pre>{JSON.stringify([...getAllContexts()], null, 2)}</pre>
