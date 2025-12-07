<script>
  import { TwitterCard, TagManageModal, NewTagModal } from "./components";
  import { availableTags, TAG_COLORS } from "$lib/stores/tagStore.js";

  let tweet = {
    id: "tweet-1",
    userName: "Dennis Callis",
    userHandle: "@stephanienicol",
    userAvatar: "/avatar.png",
    content:
      "Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit.elementum.",
    hashtags: ["#sondakika", "#hashtag"],
    tags: [{ id: "tag-1", name: "Kurultay", color: TAG_COLORS[0] }],
    likeCount: 0,
    commentCount: 0,
    retweetCount: 2,
    viewCount: 10,
    dateStr: "18 Ağu, 09:10",
    sentiment: "positive",
    showTagSection: true,
    isSelected: false,
  };

  let tagManageModalOpen = false;
  let newTagModalOpen = false;

  function handleMenuAction(event) {
    const { action } = event.detail;
    if (action === "tags") {
      tagManageModalOpen = true;
    }
  }

  function handleAddTagClick() {
    tagManageModalOpen = true;
  }

  function handleSelect() {
    tweet = { ...tweet, isSelected: !tweet.isSelected };
  }

  function handleTagModalClose() {
    tagManageModalOpen = false;
  }

  function handleNewTagClick() {
    tagManageModalOpen = false;
    newTagModalOpen = true;
  }

  function handleTagModalSubmit(event) {
    tweet = { ...tweet, tags: event.detail };
    tagManageModalOpen = false;
  }

  function handleNewTagModalClose() {
    newTagModalOpen = false;
  }

  function handleNewTagCreate(event) {
    const { name, color } = event.detail;
    const newTag = availableTags.addTag(name, color);

    if (newTag) {
      tweet = { ...tweet, tags: [...tweet.tags, newTag] };
    }

    newTagModalOpen = false;
    tagManageModalOpen = true;
  }

  function handleRemoveActiveTag(event) {
    const tag = event.detail;
    tweet = { ...tweet, tags: tweet.tags.filter((t) => t.id !== tag.id) };
  }
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="w-full max-w-xl">
    <TwitterCard
      {...tweet}
      on:menuAction={handleMenuAction}
      on:addTagClick={handleAddTagClick}
      on:select={handleSelect}
    />
  </div>
</div>

<TagManageModal
  isOpen={tagManageModalOpen}
  availableTags={$availableTags}
  selectedTags={tweet.tags}
  on:close={handleTagModalClose}
  on:newTag={handleNewTagClick}
  on:submit={handleTagModalSubmit}
/>

<NewTagModal
  isOpen={newTagModalOpen}
  activeTags={tweet.tags}
  on:close={handleNewTagModalClose}
  on:create={handleNewTagCreate}
  on:removeTag={handleRemoveActiveTag}
/>
