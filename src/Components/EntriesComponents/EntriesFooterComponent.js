import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import { ALL_ENTRIES, ACTIVE_ENTRIES, COMPLETED_ENTRIES } from '../../Constants/Actions';

@observer
class EntriesFooterComponent extends React.Component {
	render() {
		const entriesStore = this.props.entriesStore;
		if (!entriesStore.activeEntriesCount && !entriesStore.completedCount)
			return null;

		const activeEntriesCount = entriesStore.activeEntriesCount > 1 ? 'entries' : 'entry';

		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{entriesStore.activeEntriesCount}</strong> {activeEntriesCount} left
				</span>
				<ul className="filters">
					{this.renderFilterLink(ALL_ENTRIES, '', 'All')}
					{this.renderFilterLink(ACTIVE_ENTRIES, 'active', 'Active')}
					{this.renderFilterLink(COMPLETED_ENTRIES, 'completed', 'Completed')}
				</ul>
				{ entriesStore.completedCount === 0
					? null
					: 	<button
							className="clear-completed"
							onClick={this.clearCompleted}>
							Clear completed
						</button>
				}
			</footer>
		);
	}

	renderFilterLink(filterName, url, caption) {
		return (<li>
			<a href={'#/' + url}
				className={filterName ===  this.props.viewStore.entryFilter ? 'selected' : ''}>
				{caption}
			</a>
			{' '}
		</li>)
	}

	@action
	clearCompleted = () => {
		this.props.entriesStore.clearCompleted();
	};
}

EntriesFooterComponent.propTypes = {
	viewStore: PropTypes.object.isRequired,
	entriesStore: PropTypes.object.isRequired
}

export default EntriesFooterComponent
