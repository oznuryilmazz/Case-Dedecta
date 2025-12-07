<script>
  import { createEventDispatcher } from "svelte";

  /** @type {boolean} */
  export let checked = false;

  const dispatch = createEventDispatcher();

  function handleChange() {
    dispatch("change", { checked: !checked });
  }
</script>

<input
  type="checkbox"
  {checked}
  on:change={handleChange}
  class="checkbox checkbox-xs rounded-[3px]
    {checked
    ? '[--chkbg:theme(colors.semantic.primary)] [--chkfg:#F9FAFB] border-[1.5px] border-semantic-primary'
    : 'border-[2px] border-semantic-text-muted'}"
/>
