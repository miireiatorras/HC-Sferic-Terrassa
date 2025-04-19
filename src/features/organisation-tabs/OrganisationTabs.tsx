import React, { useState } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Tab } from '@/ui/tab/Tab';
import { MemberCard } from '@/ui/member-card/MemberCard';
import './OrganisationTabs.scss';

export type OrganisationTabsProps = BaseComponentProps;

type TabKey =
    | 'presidencia'
    | 'delegats'
    | 'junta'
    | 'equip-tecnic'
    | 'planificacio';

interface TabData {
    key: TabKey;
    label: string;
    members: { initials: string; name: string }[];
}

const tabs: TabData[] = [
    {
        key: 'presidencia',
        label: 'Presidència',
        members: [{ initials: 'EJ', name: 'Elena Jordán' }],
    },
    {
        key: 'delegats',
        label: 'Delegats',
        members: [],
    },
    {
        key: 'junta',
        label: 'Junta',
        members: [],
    },
    {
        key: 'equip-tecnic',
        label: 'Equip tècnic',
        members: [],
    },
    {
        key: 'planificacio',
        label: 'Planificació i coordinació',
        members: [],
    },
];

const block = registerBlockName('OrganisationTabs');

export const OrganisationTabs = ({ ...props }: OrganisationTabsProps) => {
    const [activeKey, setActiveKey] = useState<TabKey>('presidencia');
    const activeTab = tabs.find((t) => t.key === activeKey)!;

    return (
        <section {...getBaseComponentProps({ ...props, block })}>
            {/* Tabs horizontales */}
            <nav className={toBEM({ block, element: 'tablist' })}>
                {tabs.map((tab) => (
                    <Tab
                        key={tab.key}
                        label={tab.label}
                        active={tab.key === activeKey}
                        onClick={() => setActiveKey(tab.key)}
                    />
                ))}
            </nav>

            {/* Contenido del tab activo */}
            <div className={toBEM({ block, element: 'panel' })}>
                <div className={toBEM({ block, element: 'panelHeader' })}>
                    <span className={toBEM({ block, element: 'panelTitle' })}>
                        {activeTab.label}
                    </span>
                    <span className={toBEM({ block, element: 'memberCount' })}>
                        {activeTab.members.length} membre
                        {activeTab.members.length !== 1 ? 's' : ''}
                    </span>
                </div>

                <div className={toBEM({ block, element: 'cards' })}>
                    {activeTab.members.length > 0 ? (
                        activeTab.members.map((m, i) => (
                            <MemberCard
                                key={i}
                                initials={m.initials}
                                name={m.name}
                            />
                        ))
                    ) : (
                        <p className={toBEM({ block, element: 'empty' })}>
                            No hi ha membres registrats.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};
