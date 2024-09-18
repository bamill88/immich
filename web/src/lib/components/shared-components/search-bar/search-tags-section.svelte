<script lang="ts">
  import { AnyOrAll, getAllTags, type TagResponseDto } from '@immich/sdk';
  import { t } from 'svelte-i18n';
  import type { ComboBoxOption } from '$lib/components/shared-components/combobox.svelte';
  import { AppRoute } from '$lib/constants';
  import Combobox from '$lib/components/shared-components/combobox.svelte';
  import { createEventDispatcher, onMount } from 'svelte';
  import TagPill from '$lib/components/shared-components/tags/tag-chip.svelte';
  import RadioButton from '$lib/components/elements/radio-button.svelte';

  export let selectedTags: Set<string>;
  export let tagsAnyOrAll: AnyOrAll = AnyOrAll.Any;

  let allTags: TagResponseDto[] = [];
  $: tagMap = Object.fromEntries(allTags.map((tag) => [tag.id, tag]));
  let selectedIds = new Set<string>(selectedTags);

  onMount(async () => {
    allTags = await getAllTags();
  });

  const dispatch = createEventDispatcher<{
    select: ComboBoxOption | undefined;
  }>();

  const handleSelect = (option?: ComboBoxOption) => {
    if (!option) {
      return;
    }

    selectedIds.add(option.value);
    selectedIds = selectedIds;
    selectedTags = selectedIds;
    dispatch('select', undefined);
  };

  const handleRemove = (tag: string) => {
    selectedIds.delete(tag);
    selectedIds = selectedIds;
    selectedTags = selectedIds;
  };
</script>

<div id="tag-selection">
  <p class="immich-form-label">{$t('tags').toUpperCase()}</p>

  <div class="grid grid-cols-6 gap-5 mt-1">
    <div class="col-span-2 flex flex-row">
      <div>
        <Combobox
          on:select={({ detail: option }) => handleSelect(option)}
          label={$t('tag')}
          options={allTags
            .filter((tag) => !selectedIds.has(tag.id))
            .map((tag) => ({ id: tag.id, label: tag.value, value: tag.id }))}
          placeholder={$t('search_tags')}
          maintainSelectedOption={false}
        />
      </div>
      <div class="flex flex-col justify-center ms-4 mt-5">
        <RadioButton name="tags-any-or-all" bind:group={tagsAnyOrAll} label="Any" id="any" value={AnyOrAll.Any} />
        <RadioButton name="tags-any-or-all" bind:group={tagsAnyOrAll} label="All" id="all" value={AnyOrAll.All} />
      </div>
    </div>
    <div class="col-span-4 flex flex-row flex-wrap gap-2 items-center mt-5">
      {#each selectedIds as tagId (tagId)}
        {@const tag = tagMap[tagId]}
        {#if tag}
          <div>
            <TagPill
              tag={tag.value}
              tagUrl={encodeURI(`${AppRoute.TAGS}/?path=${tag.id}`)}
              handleRemove={() => handleRemove(tag.id)}
            />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
