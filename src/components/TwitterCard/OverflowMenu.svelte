<script>
  import { createEventDispatcher } from "svelte";
  import { clickOutside } from "$lib";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  const menuItems = [
    {
      id: "view",
      label: "Tweet akışını gör",
      icon: "/svg/menu/visibility.svg",
    },
    {
      id: "twitter",
      label: "Twitter'da aç",
      icon: "/svg/menu/open_in_new.svg",
    },
    {
      id: "tags",
      label: "Etiketleri yönet",
      icon: "/svg/menu/label.svg",
    },
    {
      id: "sentiment",
      label: "Duygu güncelle",
      icon: "/svg/menu/mood.svg",
    },
    { id: "spam", label: "Spam işaretle", icon: "/svg/menu/priority_high.svg" },
    {
      id: "block",
      label: "Kullanıcıyı engelle",
      icon: "/svg/menu/block.svg",
      danger: true,
    },
  ];

  function toggle() {
    isOpen = !isOpen;
  }

  function handleSelect(item) {
    dispatch("select", item);
    isOpen = false;
  }
</script>

<div class="relative" use:clickOutside={() => (isOpen = false)}>
  <button
    type="button"
    class="p-1 text-semantic-text-light hover:text-semantic-text-muted transition-colors"
    on:click={toggle}
    aria-label="Menü"
  >
    <img src="/svg/more_vert.svg" alt="More Horizontal" />
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 top-full mt-2 w-52 bg-semantic-bg-white rounded-xl shadow-xl border border-semantic-border py-2 z-50"
    >
      {#each menuItems as item}
        <button
          type="button"
          class="w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors
            {item.danger
            ? 'text-semantic-danger hover:bg-red-50'
            : 'text-semantic-text-secondary hover:bg-semantic-bg-light'}"
          on:click={() => handleSelect(item)}
        >
          <img src={item.icon} alt={item.label} />

          <span class="text-sm">{item.label}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>
