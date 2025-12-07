<script>
  import { createEventDispatcher } from "svelte";

  /** @type {Array<{id: string, name: string, bg: string}>} */
  export let colors = [];

  /** @type {{id: string}} */
  export let selected = null;

  const dispatch = createEventDispatcher();

  function handleSelect(color) {
    dispatch("select", color);
  }
</script>

<div class="flex items-center gap-4 justify-between">
  {#each colors as color}
    <button
      type="button"
      class="w-[59px] h-[40px] rounded-xl transition-all {color.bg}
        {selected?.id === color.id
        ? 'shadow-[0px_0px_0px_2px_theme(colors.semantic.bg.white),0px_0px_0px_4px_theme(colors.semantic.text.light)]'
        : 'hover:scale-105'}"
      on:click={() => handleSelect(color)}
      aria-label={color.name}
    ></button>
  {/each}
</div>
