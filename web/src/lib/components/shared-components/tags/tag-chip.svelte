<script lang="ts">
  import Chip from '$lib/components/shared-components/chip.svelte';

  export let tag: string;
  export let tagUrl: string;
  export let canRemove: boolean = true;
  export let handleRemove: () => Promise<void> | void;
</script>

<Chip
  value={tag}
  valueUrl={tagUrl}
  valueClass="whitespace-nowrap text-gray-100 dark:text-immich-dark-gray bg-immich-primary/95 dark:bg-immich-dark-primary/95"
  removeClass="text-gray-100 dark:text-immich-dark-gray bg-immich-primary/95 dark:bg-immich-dark-primary/95 hover:bg-immich-primary/80 dark:hover:bg-immich-dark-primary/80"
  isRemovable={canRemove}
  {handleRemove}
/>
