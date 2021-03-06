/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { QueryAt } from 'react-prismic-cms';
import Tab from '../../../src/components/Tab';
import TabLabel from './tabLabel';
import RelatedIcon from './icons/relatedIcon';

function TabItem({ response }) {
    if (response && response.total_results_size) {
        return <Tab name="utils" label={<TabLabel icon={<RelatedIcon className="rainbow-m-right_x-small" />} label="RELATED" />} />;
    }
    return null;
}

TabItem.propTypes = {
    response: PropTypes.object,
};

TabItem.defaultProps = {
    response: undefined,
};

export default function UtilsTab({ name }) {
    return (
        <QueryAt path="document.tags" value={[name]} component={TabItem} />
    );
}

UtilsTab.propTypes = {
    name: PropTypes.string.isRequired,
};
