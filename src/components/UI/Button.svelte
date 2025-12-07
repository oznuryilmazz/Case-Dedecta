<script>
  /** @typedef {'primary' | 'ghost' | 'disabled'} ButtonVariant */
  import { createEventDispatcher } from "svelte";

  /** @type {ButtonVariant} */
  export let variant = "primary";

  /** @type {boolean} */
  export let disabled = false;

  /** @type {string} */
  export let className = "";

  const dispatch = createEventDispatcher();

  const variants = {
    primary: "bg-semantic-primary text-white",
    ghost: "text-semantic-primary font-bold",
    disabled:
      "bg-semantic-border text-semantic-text-muted font-bold cursor-not-allowed",
  };

  $: currentVariant = disabled ? "disabled" : variant;
  $: variantClass = variants[currentVariant] || variants.primary;
</script>

<button
  type="button"
  class="px-4 py-3.5 rounded-2xl text-sm font-medium transition-colors {variantClass} {className}"
  {disabled}
  on:click
>
  <slot />
</button>
