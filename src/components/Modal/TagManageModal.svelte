<script>
  import { createEventDispatcher } from "svelte";
  import TagBadge from "../Tag/TagBadge.svelte";
  import { Backdrop, Button, Checkbox, ModalContainer } from "../UI";

  export let isOpen = false;
  export let availableTags = [];
  export let selectedTags = [];

  const dispatch = createEventDispatcher();

  let checkedTags = new Set();

  $: if (isOpen) {
    checkedTags = new Set(selectedTags.map((t) => t.id));
  }

  function toggleTag(tag) {
    if (checkedTags.has(tag.id)) {
      checkedTags.delete(tag.id);
    } else {
      checkedTags.add(tag.id);
    }
    checkedTags = checkedTags;
  }

  function handleClose() {
    dispatch("close");
  }

  function handleNewTag() {
    dispatch("newTag");
  }

  function handleSubmit() {
    const tags = availableTags.filter((t) => checkedTags.has(t.id));
    dispatch("submit", tags);
  }

  $: hasSelection = checkedTags.size > 0;
</script>

{#if isOpen}
  <Backdrop on:close={handleClose} />
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <ModalContainer>
      <div class="p-8">
        <h2 class="text-2xl font-bold text-semantic-text-secondary mb-1">
          Etiket ekle
        </h2>
        <p class="text-base text-semantic-text-secondary">
          Tweet'leri kategorize etmek için etiket ekleyebilirsin.
        </p>

        <div class="space-y-3 pt-6 pb-4">
          {#each availableTags as tag (tag.id)}
            <label class="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={checkedTags.has(tag.id)}
                on:change={() => toggleTag(tag)}
              />
              <TagBadge {tag} size="sm" />
            </label>
          {/each}
        </div>

        <div class="border-t border-semantic-border mt-2">
          <button
            type="button"
            class="flex items-center gap-2 text-semantic-primary font-bold text-sm py-4"
            on:click={handleNewTag}
          >
            <img src="/svg/add.svg" alt="Plus" />
            Yeni Ekle
          </button>
        </div>

        <div class="flex items-center justify-end gap-3">
          <Button variant="ghost" on:click={handleClose}>Vazgeç</Button>
          <Button disabled={!hasSelection} on:click={handleSubmit}
            >Etiket Ekle</Button
          >
        </div>
      </div>
    </ModalContainer>
  </div>
{/if}
