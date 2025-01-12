<script lang="ts">
	import { fly } from 'svelte/transition';
	import Header from './Header.svelte';
	import SecondHeader from './SecondHeader.svelte';

	type ID = 'name' | 'birthday' | 'color';

	let formState: {
		answers: {
			name: string;
			birthday: string;
			color: string;
		};
		step: number;
		error: string;
	} = $state({
		answers: {
			name: '',
			birthday: '',
			color: ''
		},
		// name: '',
		// birthday: '',
		step: 0,
		error: ''
	});

	// Something like console.log
	$inspect(formState.step);

	const QUESTIONS: {
		question: string;
		type: string;
		id: ID;
	}[] = [
		{
			question: "What's your name",
			id: 'name',
			type: 'text'
		},
		{
			question: "What's your birthday",
			id: 'birthday',
			type: 'text'
		},
		{
			question: "What's your favorite color",
			id: 'color',
			type: 'color'
		}
	];

	function nextStep(id: ID) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'Please fill out the form input';
		}
	}

	// Will run onMount
	$effect(() => {
		console.log('on mounted');

		return () => {
			// when unmounted or destroyed
			// before effect Re-runs
			console.log('on unmounted');
		};
	});

	// $effect(() => {
	// 	// This will re-run, when formState.step has changed
	// 	console.log('formState', formState.step);
	// 	// Don't create state based off other state, in effect.
	// 	// use $derived()

	// 	return () => {
	// 		// before effect Re-runs
	// 		// use if you set up interval. timeout, etc.
	// 		console.log('before formState reruns', formState.step);
	// 	};
	// });
</script>

<Header name={formState.answers.name} />

<SecondHeader name={formState.answers.birthday}>
	<p>Hello</p>

	{#snippet secondChild(name)}
		<p>Second Child {name}</p>
	{/snippet}
</SecondHeader>

<main>
	{#if formState.step >= QUESTIONS.length}
		<p>Thank you!</p>
	{:else}
		<p>Step: {formState.step + 1}</p>
	{/if}

	<!-- {@render formStep({ question: "What's your name", id: 'name', type: 'text' })} -->

	<!-- {#each QUESTIONS as { question, id, type }}
		{@render formStep({ question, id, type })}
	{/each} -->

	<!-- // (question.id) is key -->
	{#each QUESTIONS as question, index (question.id)}
		{#if formState.step === index}
			<!-- <div transition:fly={{ x: 200, duration: 200, opacity: 0 }}> -->
			<div
				in:fly={{ x: 200, duration: 200, opacity: 0, delay: 200 }}
				out:fly={{ x: -200, duration: 200, opacity: 0 }}
			>
				{@render formStep(question)}
			</div>
		{/if}
	{/each}

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ question, type, id }: { question: string; type: string; id: ID })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
		<button onclick={() => nextStep(id)}>Next</button>
	</article>
{/snippet}

<!-- <script lang="ts">
  import Header from './Header.svelte';

  let name = $state("Scott");
  let status: 'OPEN' | 'CLOSED' = $state('OPEN');
  let full_name = $derived(name + ' ' + 'Tolinski');

  // function toggle() {
  //   status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
  // }
  function onclick() {
    status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
  }
</script> -->

<!-- <Header {name} />

<h2>{full_name}</h2>

<input type="text" bind:value={name} />
wrong
<input type="text" on:change={(e) => name = e.target.value} value={name} />  

<p>The store is new {status}</p>
<button onclick={toggle}>Toggle Status</button>
<button {onclick}>Toggle Status</button> -->

<!-- <main>
  <p>Step: {formState.step}</p>

  {#if formState.error} 
    <p class='error'>{formState.error}</p>
  {/if}

  {#if formState.step === 0}
    <div>
      <label for="name">Your Name</label>
      <input type="text" id="name" bind:value={formState.name} />
    </div>
    <button onclick={() => {
      if (formState.name !== '') {
        formState.step += 1;
        formState.error = '';
      } else {
        formState.error = 'Your name is empty. Please write your name.';
      }
    }}>Next</button>
    {:else if formState.step === 1}
    <div>
      <label for="bday">Your Birthday</label>
      <input type="date" id="bday" bind:value={formState.birthday} />
    </div>
    <button onclick={() => {
      if (formState.birthday !== '') {
        formState.step += 1;
        formState.error = '';
      } else {
        formState.error = 'Your birthday is empty. Please write your birthday.';
      }
    }}>Next</button>
  {/if}
</main> -->

<style>
	/* :global(div) {
    background: blue;
  } */
	.error {
		color: red;
	}
</style>
