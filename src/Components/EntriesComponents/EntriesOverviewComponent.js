import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import { ACTIVE_ENTRIES, COMPLETED_ENTRIES } from '../../Constants/Actions';

import EntryItemComponent from './EntryItemComponent';

@observer
class EntriesOverviewComponent extends React.Component {
	render() {
		const {entriesStore, viewStore} = this.props;
		if (entriesStore.entries.length === 0)
			return null;
		return <section className="main">
			<input
				className="toggle-all"
				id="toggle-all"
				type="checkbox"
				onChange={this.toggleAll}
				checked={entriesStore.activeEntriesCount === 0}
			/>
			<label htmlFor="toggle-all"></label>
			<ul className="todo-list">
				{this.getVisibleEntries().map(entry =>
					(<EntryItemComponent
						key={entry.id}
						entry={entry}
						viewStore={viewStore}
					/>)
				)}
			</ul>
		</section>
	}

	getVisibleEntries() {
		return this.props.entriesStore.entries.filter(entry => {
			switch (this.props.viewStore.entryFilter) {
				case ACTIVE_ENTRIES:
					return !entry.completed;
				case COMPLETED_ENTRIES:
					return entry.completed;
				default:
					return true;
			}
		});
	}

	toggleAll = (event) => {
		var checked = event.target.checked;
		this.props.entriesStore.toggleAll(checked);
	};
}

EntriesOverviewComponent.propTypes = {
	viewStore: PropTypes.object.isRequired,
	entriesStore: PropTypes.object.isRequired
}

export default EntriesOverviewComponent
