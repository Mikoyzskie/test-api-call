import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';

const directus = createDirectus(process.env.DIRECTUS_URL).with(rest());

export default directus;