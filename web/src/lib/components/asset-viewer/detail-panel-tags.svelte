<script lang="ts">
  import { focusTrap } from '$lib/actions/focus-trap';
  import CircleIconButton from '$lib/components/elements/buttons/circle-icon-button.svelte';
  import Icon from '$lib/components/elements/icon.svelte';
  import TagAssetForm from '$lib/components/forms/tag-asset-form.svelte';
  import Combobox from '$lib/components/shared-components/combobox.svelte';
  import Portal from '$lib/components/shared-components/portal/portal.svelte';
  import TagChip from '$lib/components/shared-components/tags/tag-chip.svelte';
  import { AppRoute } from '$lib/constants';
  import { tagAssetModal } from '$lib/stores/preferences.store';
  import { isSharedLink } from '$lib/utils';
  import { removeTag, tagAssets } from '$lib/utils/asset-utils';
  import { getAllTags, getAssetInfo, type AssetResponseDto, type TagResponseDto } from '@immich/sdk';
  import { mdiArrowCollapse, mdiArrowExpand, mdiPlus } from '@mdi/js';
  import { t } from 'svelte-i18n';

  export let asset: AssetResponseDto;
  export let isOwner: boolean;
  export const startTagging = () => {
    handleAdd();
  };
  let allTags: TagResponseDto[] = [];

  $: tags = asset.tags || [];
  $: getAllTags().then((tags) => {
    allTags = tags;
  });

  let isSidebarOpen = false;
  let isModalOpen = false;

  tagAssetModal.subscribe((isModal) => {
    if (!isModal && (isModalOpen || isSidebarOpen)) {
      setTimeout(() => {
        isModalOpen = false;
        isSidebarOpen = true;
      }, 500);
    }
  });

  const handleAdd = () => ($tagAssetModal ? (isModalOpen = true) : (isSidebarOpen = true));

  const handleModalCancel = () => $tagAssetModal && (isModalOpen = false);

  const handleTag = async (tagIds: string[] | undefined) => {
    if (tagIds) {
      await tagAssets({ tagIds, assetIds: [asset.id], showNotification: true });
      asset = await getAssetInfo({ id: asset.id });
    }
  };

  const handleRemove = async (tagId: string) => {
    const ids = await removeTag({ tagIds: [tagId], assetIds: [asset.id], showNotification: true });
    if (ids) {
      asset = await getAssetInfo({ id: asset.id });
    }
  };

  const handleToggleModalTagging = (isModal = !$tagAssetModal) => {
    tagAssetModal.set(isModal);
  };

  const handleSidebarClose = () => {
    isSidebarOpen = false;
  };
</script>

{#if isOwner && !isSharedLink()}
  <section class="px-4 mt-4">
    <div class="flex flex-row h-10 w-full items-center justify-between text-sm">
      <h2>{$t('tags').toUpperCase()}</h2>
      <div class="justify-self-end pl-4">
        <CircleIconButton
          on:click={() => {
            handleToggleModalTagging(true);
            isModalOpen = true;
          }}
          icon={mdiArrowExpand}
          color="opaque"
          title={`Use ${$tagAssetModal ? 'Sidebar' : 'Modal'} Tagging`}
        />
      </div>
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
    {#if !$tagAssetModal && isOwner && isSidebarOpen}
      <div class="justify-self-end pl-4" use:focusTrap>
        <Combobox
          onSelect={(option) => option && handleTag([option.value])}
          onClose={handleSidebarClose}
          label=""
          options={allTags.map((tag) => ({ id: tag.id, label: tag.value, value: tag.id }))}
          placeholder={$t('search_tags')}
        />
      </div>
    {/if}
  </section>
{/if}

{#if $tagAssetModal && isOwner && isModalOpen}
  <Portal>
    <TagAssetForm onTag={(tagsIds) => handleTag(tagsIds)} onCancel={handleModalCancel} />
  </Portal>
{/if}
