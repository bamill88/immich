<script lang="ts">
  import Icon from '$lib/components/elements/icon.svelte';
  import { mdiClose } from '@mdi/js';

  export let chipClass: string | undefined = undefined;
  export let key: string | undefined = undefined;
  export let value: string | boolean | number;
  export let valueUrl: string | undefined = undefined;
  export let keyClass: string =
    'text-gray-100 dark:text-immich-dark-gray bg-immich-primary dark:bg-immich-dark-primary hover:bg-immich-primary/80 dark:hover:bg-immich-dark-primary/80 text-sm';
  export let valueClass: string = 'dark:bg-gray-800 dark:text-white text-sm';
  export let anchorClass: string = 'hover:bg-immich-primary/80 dark:hover:bg-immich-dark-primary/80 text-sm';
  export let removeClass: string =
    'dark:bg-gray-800 dark:text-white hover:bg-immich-primary/80 dark:hover:bg-immich-dark-primary/80';
  export let isRemovable: boolean = true;
  export let handleRemove: () => Promise<void> | void;
</script>

<div class="h-8 flex place-content-center place-items-center text-xs box-content {chipClass}">
  {#if key != undefined}
    <div
      class="h-full py-2 px-4 {keyClass}
      {value === true ? 'rounded-full' : 'rounded-tl-full rounded-bl-full'}"
    >
      {key}
    </div>
  {/if}
  {#if value != undefined}
    <div
      class="h-full bg-gray-300 py-2 px-3 pe-2 {valueClass}
      {key == undefined ? 'rounded-tl-full rounded-bl-full' : ''}
      {isRemovable === true ? '' : 'rounded-tr-full rounded-br-full'}"
    >
      {#if valueUrl != undefined}
        <a href={valueUrl} class={anchorClass}>{value}</a>
      {:else}
        {value}
      {/if}
    </div>
  {/if}
  {#if isRemovable}
    <button
      type="button"
      class="h-full bg-gray-300 py-2 px-3 rounded-tr-full rounded-br-full pr-2 pl-1 place-items-center place-content-center transition-all {removeClass}"
      title="Remove tag"
      on:click={() => handleRemove()}
    >
      <Icon path={mdiClose} />
    </button>
  {/if}
</div>
