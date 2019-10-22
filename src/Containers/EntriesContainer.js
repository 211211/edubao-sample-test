import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import EntriesInputComponent from '../Components/EntriesComponents/EntriesInputComponent';
import EntriesOverviewComponent from '../Components/EntriesComponents/EntriesOverviewComponent';
import EntriesFooterComponent from '../Components/EntriesComponents/EntriesFooterComponent';

@observer
class EntriesContainer extends React.Component {
	render() {
		const {entriesStore, viewStore} = this.props;
		return (
			<div>
				<header className="header">
					<h1>entries</h1>
					<EntriesInputComponent entriesStore={entriesStore} />
				</header>
				<EntriesOverviewComponent entriesStore={entriesStore} viewStore={viewStore} />
				<EntriesFooterComponent entriesStore={entriesStore} viewStore={viewStore} />
			</div>
		);
	}
}

EntriesContainer.propTypes = {
	viewStore: PropTypes.object.isRequired,
	entriesStore: PropTypes.object.isRequired
};

export default EntriesContainer
