import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import {newLocaleDate} from '../../Utils/utils'

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

@observer
class EntryItemComponent extends React.Component {
	@observable editText = '';

	render() {
		const { entry } = this.props;
		console.log({entry})
		return (
			<li>
				<div style={{
					height: 120,
					width: 339,
					border: '1px solid red',
					borderRadius: 10,
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					margin: 25,
					justifyContent: 'center',
					background: entry.bgColour || 'none'
				}}>
					<div style={{
						fontSize: 27,
						padding: '25px 0'
					}}>{entry.title}</div>
					<div style={{
						fontSize: 12,
					}}>{entry.created_at && newLocaleDate()}</div>
				</div>
			</li>
		);
	}

	@action
	handleDestroy = () => {
		this.props.entry.destroy();
		this.props.viewStore.entryBeingEdited = null;
	};
}

EntryItemComponent.propTypes = {
	entry: PropTypes.object.isRequired,
	viewStore: PropTypes.object.isRequired
};

export default EntryItemComponent
