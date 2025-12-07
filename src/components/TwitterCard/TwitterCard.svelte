<script>
  import { createEventDispatcher } from "svelte";
  import TagBadge from "../Tag/TagBadge.svelte";
  import OverflowMenu from "./OverflowMenu.svelte";
  import { Checkbox, StatItem } from "../UI";
  import { SENTIMENTS } from "$lib/stores/tagStore.js";

  export let id = "";
  export let userName = "Dennis Callis";
  export let userHandle = "@stephanienicol";
  export let userAvatar = "/avatar.png";
  export let content = "";
  export let hashtags = ["#sondakika", "#hashtag"];
  export let tags = [];
  export let likeCount = 0;
  export let commentCount = 0;
  export let retweetCount = 2;
  export let viewCount = 10;
  export let dateStr = "18 Ağu, 09:10";
  export let sentiment = "positive";
  export let showTagSection = true;
  export let isSelected = false;

  const dispatch = createEventDispatcher();

  let menuOpen = false;

  function handleMenuAction(event) {
    dispatch("menuAction", { cardId: id, action: event.detail.id });
  }

  function handleTagClick(tag) {
    dispatch("tagClick", { cardId: id, tag });
  }

  $: sentimentData = SENTIMENTS[sentiment] || SENTIMENTS.positive;
</script>

<article
  class="rounded-2xl border shadow-sm transition-all
    {isSelected
    ? 'bg-semantic-bg-selected border-semantic-primary outline outline-[1px] outline-offset-[1px] outline-semantic-border'
    : 'bg-semantic-bg-white border-semantic-border'}"
>
  <div class="p-5">
    <div class="flex items-start gap-3">
      <div class="avatar relative">
        <div
          class="ring-semantic-border w-[40px] h-[40px] rounded-full ring-1 ring-offset-1"
        >
          <img src={userAvatar} alt={userName} />
        </div>
        {#if isSelected && tags.length === 0}
          <div
            class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-semantic-warning border-2 border-semantic-bg-white flex items-center justify-center"
          >
            <img
              src="/svg/menu/priority_high.svg"
              alt="Uyarı"
              class="w-[2.5px] h-[8px] brightness-0 invert"
            />
          </div>
        {/if}
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-0.5">
          <h3
            class="font-bold text-semantic-text-secondary text-base leading-[24px]"
          >
            {userName}
          </h3>

          <div class="flex items-center gap-5">
            <Checkbox
              checked={isSelected}
              on:change={() =>
                dispatch("select", { cardId: id, selected: !isSelected })}
            />

            <OverflowMenu bind:isOpen={menuOpen} on:select={handleMenuAction} />
          </div>
        </div>

        <p class="text-sm text-semantic-text-muted leading-[20px] font-normal">
          {userHandle}
        </p>

        <p
          class="text-semantic-text-muted leading-[20px] font-normal text-sm my-4"
        >
          {content}
        </p>

        {#if hashtags.length > 0}
          <div class="flex flex-wrap gap-2 mb-4">
            {#each hashtags as hashtag}
              <span
                class="px-3 py-1.5 rounded-lg border border-semantic-border text-semantic-text-muted text-xs bg-semantic-bg-light"
              >
                {hashtag}
              </span>
            {/each}
          </div>
        {/if}

        <div class="flex items-center justify-between gap-3">
          <StatItem icon="/svg/favorite.svg" value={likeCount.toString()} alt="Like" />
          <StatItem
            icon="/svg/tooltip.svg"
            value={commentCount.toString()}
            alt="Comment"
          />
          <StatItem icon="/svg/cached.svg" value={retweetCount.toString()} alt="Retweet" />
          <StatItem icon="/svg/visibility.svg" value={viewCount.toString()} alt="View" />
          <StatItem icon="/svg/calendar_today.svg" value={dateStr} alt="Time" />

          <span
            class="w-8 h-8 rounded-full flex items-center justify-center text-white
              {isSelected && tags.length === 0
              ? 'bg-semantic-danger'
              : sentimentData.bgColor}"
            title={isSelected && tags.length === 0
              ? "Olumsuz"
              : sentimentData.name}
          >
            <img
              src={isSelected && tags.length === 0
                ? "/svg/sentiment_dissatisfied.svg"
                : "/svg/mood.svg"}
              alt={isSelected && tags.length === 0
                ? "Olumsuz"
                : sentimentData.name}
              width="20px"
              height="20px"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  {#if showTagSection && tags.length > 0}
    <div
      class="px-5 py-3 border-t border-semantic-border rounded-b-2xl flex items-start gap-3 bg-semantic-bg-light"
    >
      <span class="text-semantic-text-muted font-bold text-sm shrink-0 pt-1"
        >Etiketler</span
      >

      <div class="flex flex-wrap items-center gap-2">
        {#each tags as tag (tag.id)}
          <TagBadge {tag} size="sm" on:click={() => handleTagClick(tag)} />
        {/each}
      </div>
    </div>
  {/if}
</article>
