import { useState, useRef, KeyboardEvent } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Tab } from '@/ui/tab/Tab';
import { MemberCard } from '@/ui/member-card/MemberCard';
import './OrganisationTabs.scss';

type TabKey =
    | 'presidencia'
    | 'delegats'
    | 'junta'
    | 'equip-tecnic'
    | 'planificacio';

export interface TabData {
    key: TabKey;
    label: string;
    members: { initials: string; name: string }[];
}

const defaultTabs: TabData[] = [
    {
        key: 'presidencia',
        label: 'Presidència',
        members: [{ initials: 'EJ', name: 'Elena Jordán' }],
    },
    {
        key: 'delegats',
        label: 'Delegats',
        members: [
            { initials: 'EV', name: 'Eduard Villalba' },
            { initials: 'ES', name: 'Eva Segarra' },
            { initials: 'MP', name: 'Mònica Perarnau' },
            { initials: 'LA', name: 'Luis Alcántara' },
            { initials: 'AB', name: 'Andreu Benaiges' },
            { initials: 'JG', name: 'Jose García' },
            { initials: 'CS', name: 'Carles Salvador' },
            { initials: 'GB', name: 'Guillem Bellmunt' },
        ],
    },
    {
        key: 'junta',
        label: 'Junta',
        members: [
            { initials: 'JL', name: 'Jose Luis Alonso' },
            { initials: 'CA', name: 'Carlos Álvarez' },
            { initials: 'GB', name: 'Guillem Bellmunt' },
            { initials: 'JG', name: 'Jose García' },
            { initials: 'GG', name: 'Gabriel Giménez' },
            { initials: 'MG', name: 'Montse Gómez' },
            { initials: 'SS', name: 'Sergi Sans' },
        ],
    },
    {
        key: 'equip-tecnic',
        label: 'Equip tècnic',
        members: [
            { initials: 'MC', name: 'Mireia Cabistany' },
            { initials: 'LV', name: 'Laia Vila' },
            { initials: 'AH', name: 'Adrián Hortal' },
            { initials: 'JR', name: 'Joan Rosique' },
            { initials: 'ME', name: 'Marc Esteve' },
            { initials: 'MA', name: 'Marta Alonso' },
        ],
    },
    {
        key: 'planificacio',
        label: 'Planificació i coordinació',
        members: [{ initials: 'ME', name: 'Marc Esteve' }],
    },
];

const block = registerBlockName('OrganisationTabs');

export interface OrganisationTabsProps extends BaseComponentProps {
    tabs?: TabData[];
}

export const OrganisationTabs = ({
    tabs = defaultTabs,
    ...props
}: OrganisationTabsProps) => {
    const [activeKey, setActiveKey] = useState<TabKey>('presidencia');
    const activeTab = tabs.find((t) => t.key === activeKey)!;
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const next = (idx + 1) % tabs.length;
            tabRefs.current[next]?.focus();
            setActiveKey(tabs[next].key);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prev = (idx - 1 + tabs.length) % tabs.length;
            tabRefs.current[prev]?.focus();
            setActiveKey(tabs[prev].key);
        }
    };

    return (
        <section {...getBaseComponentProps({ ...props, block })}>
            <nav
                className={toBEM({ block, element: 'tablist' })}
                role="tablist"
            >
                {tabs.map((tab, idx) => (
                    <Tab
                        key={tab.key}
                        label={tab.label}
                        active={tab.key === activeKey}
                        onClick={() => setActiveKey(tab.key)}
                        ref={(el: HTMLButtonElement | null) => {
                            tabRefs.current[idx] = el;
                        }}
                        onKeyDown={(e: KeyboardEvent<Element>) =>
                            handleKeyDown(e, idx)
                        }
                        role="tab"
                        aria-selected={tab.key === activeKey}
                        tabIndex={tab.key === activeKey ? 0 : -1}
                    />
                ))}
            </nav>

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
