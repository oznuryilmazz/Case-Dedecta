<script>
  import { createEventDispatcher } from "svelte";

  /** @type {string} */
  export let value = "";

  /** @type {string} */
  export let placeholder = "";

  /** @type {string} */
  export let type = "text";

  /** @type {string} */
  export let className = "";

  /** @type {string | null} */
  export let icon = null;

  const dispatch = createEventDispatcher();

  let isFocused = false;

  function handleFocus() {
    isFocused = true;
    dispatch("focus");
  }

  function handleBlur() {
    isFocused = false;
    dispatch("blur");
  }
</script>

<div class="relative">
  {#if icon}
    <div class="absolute left-3 top-1/2 -translate-y-1/2 transition-colors">
      <img src={icon} alt="" class={isFocused ? "filter-blue" : ""} />
    </div>
  {/if}

  <input
    {type}
    bind:value
    {placeholder}
    on:focus={handleFocus}
    on:blur={handleBlur}
    on:input
    class="w-full rounded-lg font-normal text-sm bg-transparent border transition-all text-semantic-text-primary placeholder:text-semantic-text-muted
      {icon ? 'pl-10 pr-4' : 'px-4'} py-2
      {isFocused
      ? 'border-semantic-primary outline outline-[1px] outline-offset-[1px] outline-semantic-border'
      : 'border-semantic-border'}
      {className}"
  />
</div>

<style>
  .filter-blue {
    filter: invert(21%) sepia(95%) saturate(2463%) hue-rotate(217deg)
      brightness(96%) contrast(93%);
  }
</style>
