import React from 'react';
import PropTypes from 'prop-types'
import {TabsWrap, TabHeader, NavItem, TabContent, TabPane} from './tabs.style';

const Tabs = ({children, id, defaultActiveKey}) => {
    return (
        <TabsWrap id={id} defaultActiveKey={defaultActiveKey}>
            {children}
        </TabsWrap>
    )
}

export {TabHeader, NavItem, TabContent, TabPane}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    defaultActiveKey: PropTypes.string
}

export default Tabs;

