import { authenticate } from '$lib/utils/auth';
import { getFormatter } from '$lib/utils/i18n';
import { getAssetInfoFromParam } from '$lib/utils/navigation';
import { getAllTags } from '@immich/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  await authenticate();
  const asset = await getAssetInfoFromParam(params);
  const allTags = await getAllTags();
  const $t = await getFormatter();

  return {
    asset,
    allTags,
    meta: {
      title: $t('search'),
    },
  };
}) satisfies PageLoad;
