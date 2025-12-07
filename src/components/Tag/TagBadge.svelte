<script>
  import { createEventDispatcher } from "svelte";

  /** @type {{ id: string, name: string, color: { border: string, text: string, bg: string, bgLight: string } }} */
  export let tag;

  /** @type {boolean} */
  export let removable = false;

  /** @type {'sm' | 'md'} */
  export let size = "md";

  const dispatch = createEventDispatcher();

  function handleRemove(e) {
    e.stopPropagation();
    dispatch("remove", tag);
  }
</script>

<span
  class="inline-flex items-center gap-1.5 rounded-md border font-medium
    {tag.color.border} {tag.color.text} {tag.color.bgLight}
    {size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}"
>
  {tag.name}

  {#if removable}
    <button
      type="button"
      class="hover:opacity-70 transition-opacity"
      on:click={handleRemove}
      aria-label="Kaldır"
    >
      <svg
        class="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  {/if}
</span>
