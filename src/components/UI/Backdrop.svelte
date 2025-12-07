<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("close");
  }

  function handleKeydown(e) {
    if (e.key === "Escape") {
      dispatch("close");
    }
  }
</script>

<div
  class="fixed inset-0 bg-black/40 z-40"
  on:click={handleClick}
  on:keydown={handleKeydown}
  role="button"
  tabindex="-1"
></div>
