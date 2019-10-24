import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class EntriesFooterComponent extends React.Component {
	render() {
		const {entriesStore} = this.props
		const activeEntriesCount = entriesStore.entries.length > 1 ? 'entries' : 'entry';

		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{entriesStore.entries.length}</strong> {activeEntriesCount} left
				</span>
			</footer>
		);
	}
}

EntriesFooterComponent.propTypes = {
	entriesStore: PropTypes.object.isRequired
}

export default EntriesFooterComponent
