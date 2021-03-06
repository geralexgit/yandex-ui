import React from 'react';
import { text, object } from '@storybook/addon-knobs';

import { TabsPanes } from '../../TabsPanes.bundle/desktop';

export const Playground = () => {
    const activeTab = text('activeTab', 'search');
    const panes = object('panes', [
        { id: 'search', content: 'Поиск content' },
        { id: 'images', content: 'Картинки content' },
        { id: 'video', content: 'Видео content' },
    ]);

    return <TabsPanes activePane={activeTab} panes={panes} />;
};
