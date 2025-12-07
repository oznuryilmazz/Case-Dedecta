<script>
  export let icon = "";
  export let value = "";
  export let alt = "";
</script>

<span
  class="flex items-center gap-1.5 text-xs font-normal text-semantic-text-light"
>
  <img src={icon} {alt} />
  {value}
</span>
