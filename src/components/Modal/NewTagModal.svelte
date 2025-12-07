<script>
  import { createEventDispatcher } from "svelte";
  import { TAG_COLORS } from "$lib/stores/tagStore.js";
  import TagBadge from "../Tag/TagBadge.svelte";
  import { Backdrop, Button, Input, ColorPicker, ModalContainer } from "../UI";

  export let isOpen = false;
  export let activeTags = [];

  const dispatch = createEventDispatcher();

  let tagName = "";
  let selectedColor = TAG_COLORS[0];

  $: if (isOpen) {
    tagName = "";
    selectedColor = TAG_COLORS[0];
  }

  function handleClose() {
    dispatch("close");
  }

  function handleCreate() {
    if (!tagName.trim()) return;
    dispatch("create", { name: tagName.trim(), color: selectedColor });
  }

  function handleRemoveActiveTag(event) {
    dispatch("removeTag", event.detail);
  }

  function handleColorSelect(event) {
    selectedColor = event.detail;
  }

  $: isValid = tagName.trim().length > 0;
</script>

{#if isOpen}
  <Backdrop on:close={handleClose} />

  <div
    class="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 gap-4"
  >
    <ModalContainer maxWidth="max-w-[480px]">
      <div class="p-6 bg-semantic-bg-light rounded-t-2xl">
        <div class="flex items-center justify-between">
          <div class="w-[60%]">
            <h2 class="text-2xl font-bold text-semantic-text-secondary mb-1">
              Yeni Etiket
            </h2>
            <p class="text-base text-semantic-text-secondary">
              Tweet'leri kategorize etmek için etiket oluşturabilirsin.
            </p>
          </div>
          <button
            type="button"
            class="w-[30%] h-[40px] text-sm font-bold rounded-xl transition-colors border
              {selectedColor.text} {selectedColor.border} {selectedColor.bgLight}"
          >
            Örnek görünüm
          </button>
        </div>
      </div>

      <div class="px-6 py-4 space-y-5 border-t border-semantic-border">
        <Input
          bind:value={tagName}
          placeholder="Etiket adı"
          icon="/svg/label.svg"
        />

        <ColorPicker
          colors={TAG_COLORS}
          selected={selectedColor}
          on:select={handleColorSelect}
        />
      </div>

      <div class="px-6 py-4 flex items-center justify-end gap-3">
        <Button variant="ghost" on:click={handleClose}>Vazgeç</Button>
        <Button disabled={!isValid} on:click={handleCreate}>Oluştur</Button>
      </div>
    </ModalContainer>

    {#if activeTags.length > 0}
      <ModalContainer maxWidth="max-w-[480px]">
        <div class="p-5">
          <p class="text-base font-bold text-semantic-text-secondary mb-3">
            Aktif Etiketler
          </p>
          <div class="flex flex-wrap gap-2">
            {#each activeTags as tag (tag.id)}
              <TagBadge
                {tag}
                size="sm"
                removable
                on:remove={handleRemoveActiveTag}
              />
            {/each}
          </div>
        </div>
      </ModalContainer>
    {/if}
  </div>
{/if}
