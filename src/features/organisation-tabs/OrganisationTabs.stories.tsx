import type { Meta, StoryObj } from '@storybook/react';
import { OrganisationTabs } from './OrganisationTabs';
import './OrganisationTabs.scss';

const meta: Meta<typeof OrganisationTabs> = {
    title: 'Sferic/Features/OrganisationTabs',
    component: OrganisationTabs,
};
export default meta;
type Story = StoryObj<typeof OrganisationTabs>;

export const Playground: Story = {
    render: () => <OrganisationTabs />,
};
