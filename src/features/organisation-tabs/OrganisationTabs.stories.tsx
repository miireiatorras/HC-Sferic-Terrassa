import type { Meta, StoryObj } from '@storybook/react';
import { OrganisationTabs } from './OrganisationTabs';
import './OrganisationTabs.scss';

const meta: Meta<typeof OrganisationTabs> = {
    title: 'Sferic/OrganisationTabs',
    component: OrganisationTabs,
};
export default meta;
type Story = StoryObj<typeof OrganisationTabs>;

export const Default: Story = {
    render: () => <OrganisationTabs />,
};
