<script>
  let count = $state(0);

  function increment() {
    count++;
  }
</script>

<div class="rounded-md border border-zinc-500 p-10">
  <h2>Svelte 5 component</h2>
  <button
    on:click={increment}
    class="bg-blue-400 px-8 py-4 text-white"
  >
    Count is {count}
  </button>
  <slot />
</div>

