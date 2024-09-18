<script lang="ts">
  import { focusTrap } from '$lib/actions/focus-trap';
  import Icon from '$lib/components/elements/icon.svelte';
  import Combobox from '$lib/components/shared-components/combobox.svelte';
  import TagChip from '$lib/components/shared-components/tags/tag-chip.svelte';
  import { AppRoute } from '$lib/constants';
  import { isSharedLink } from '$lib/utils';
  import { removeTag, tagAssets } from '$lib/utils/asset-utils';
  import { getAllTags, getAssetInfo, type AssetResponseDto, type TagResponseDto } from '@immich/sdk';
  import { mdiPlus } from '@mdi/js';
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  export let asset: AssetResponseDto;
  export let isOwner: boolean;
  export const startTagging = () => {
    handleAdd();
  };
  let allTags: TagResponseDto[] = [];

  $: tags = asset.tags || [];

  let isOpen = false;

  onMount(async () => {
    allTags = await getAllTags();
  });

  const handleAdd = () => (isOpen = true);

  const handleTag = async (tagId: string | undefined) => {
    if (tagId) {
      await tagAssets({ tagIds: [tagId], assetIds: [asset.id], showNotification: false });
      asset = await getAssetInfo({ id: asset.id });
    }
  };

  const handleRemove = async (tagId: string) => {
    const ids = await removeTag({ tagIds: [tagId], assetIds: [asset.id], showNotification: false });
    if (ids) {
      asset = await getAssetInfo({ id: asset.id });
    }
  };
</script>

{#if isOwner && !isSharedLink()}
  <section class="px-4 mt-4">
    <div class="flex flex-row h-10 w-full items-center justify-between text-sm">
      <h2>{$t('tags').toUpperCase()}</h2>
      {#if isOwner && isOpen}
        <div class="justify-self-end pl-4" use:focusTrap>
          <Combobox
            on:select={({ detail: option }) => handleTag(option?.value)}
            on:close={() => (isOpen = false)}
            label=""
            options={allTags.map((tag) => ({ id: tag.id, label: tag.value, value: tag.id }))}
            placeholder={$t('search_tags')}
          />
        </div>
      {/if}
    </div>
    <section class="flex flex-wrap pt-2 gap-1">
      {#each tags as tag (tag.id)}
        <TagChip
          tag={tag.value}
          tagUrl={encodeURI(`${AppRoute.TAGS}/?path=${tag.value}`)}
          handleRemove={() => handleRemove(tag.id)}
        />
      {/each}
      <button
        type="button"
        class="rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 flex place-items-center place-content-center gap-1 px-2 py-1"
        title="Add tag"
        on:click={handleAdd}
      >
        <span class="text-sm px-1 flex place-items-center place-content-center gap-1"><Icon path={mdiPlus} />Add</span>
      </button>
    </section>
  </section>
{/if}
