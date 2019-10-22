import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {action} from 'mobx';

const ENTER_KEY = 13;

@observer
class EntriesInputComponent extends React.Component {
	render() {
		return (<input
			ref="newField"
			className="new-entry"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewEntryKeyDown}
			autoFocus={true}
		/>);
	}

	@action
	handleNewEntryKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		var val = ReactDOM.findDOMNode(this.refs.newField).value.trim();

		if (val) {
			this.props.entriesStore.addEntries(val);
			ReactDOM.findDOMNode(this.refs.newField).value = '';
		}
	};
}

EntriesInputComponent.propTypes = {
	entriesStore: PropTypes.object.isRequired
};

export default EntriesInputComponent
