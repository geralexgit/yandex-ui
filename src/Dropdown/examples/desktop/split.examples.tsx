import React, { useRef } from 'react';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';
import { Icon } from '@yandex-lego/components/Icon/bundle';
import { SampleMenu } from '../SampleMenu';
import { Dropdown } from '../../desktop';

export const Split = () => {
    const anchor = useRef<HTMLElement>(null);
    return (
        <>
            <Text as="h2" typography="headline-l">
                Пример со SplitButton
            </Text>
            <div>
                <Button view="link" size="s" pin="round-brick">
                    Dropdown
                </Button>
                <Dropdown direction="top-left" view="default" hasTail content={<SampleMenu />}>
                    <Button
                        innerRef={anchor}
                        view="link"
                        size="s"
                        pin="clear-round"
                        icon={(className) => <Icon type="arrow" className={className} />}
                    />
                </Dropdown>
            </div>
        </>
    );
};

Split.story = {
    name: 'split',
};
