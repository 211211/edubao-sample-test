import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import EntryItemComponent from './EntryItemComponent';

@observer
class EntriesOverviewComponent extends React.Component {
	render() {
		const { entriesStore, viewStore } = this.props;
		if (entriesStore.entries.length === 0)
			return null;
		return <section className="main">
			<ul className="todo-list" style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				{this.props.entriesStore.entries.map(entry =>
					(<EntryItemComponent
						key={entry.id}
						entry={entry}
						viewStore={viewStore}
					/>)
				)}
			</ul>
		</section>
	}
}

EntriesOverviewComponent.propTypes = {
	viewStore: PropTypes.object.isRequired,
	entriesStore: PropTypes.object.isRequired
}

export default EntriesOverviewComponent
