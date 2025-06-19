import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'HC. SFERIC Terrassa',
        brandUrl: 'https://sfericok.cat',
        brandImage: '/logo-tranp-negre.webp',
    }),
});
