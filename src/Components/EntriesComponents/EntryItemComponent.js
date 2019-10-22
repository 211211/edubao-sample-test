import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, action, computed} from 'mobx';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

@observer
class EntryItemComponent extends React.Component {
	@observable editText = '';

	render() {
		const {entry} = this.props;
		return (
			<li className={[
				entry.completed ? 'completed': '',
				this.isBeingEdited ? 'editing' : ''
			].join(' ')}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={entry.completed}
						onChange={this.handleToggle}
					/>
					<label onDoubleClick={this.handleEdit}>
						{entry.title}
					</label>
					<button className="destroy" onClick={this.handleDestroy} />
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.editText}
					onBlur={this.handleSubmit}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
		);
	}

	@computed
	get isBeingEdited() {
		return this.props.viewStore.entryBeingEdited === this.props.entry
	}

	@action
	handleSubmit = (event) => {
		const val = this.editText.trim();
		if (val) {
			this.props.entry.setTitle(val);
			this.editText = val;
		} else {
			this.handleDestroy();
		}
		this.props.viewStore.entryBeingEdited = null;
	};

	@action
	handleDestroy = () => {
		this.props.entry.destroy();
		this.props.viewStore.entryBeingEdited = null;
	};

	@action
	handleEdit = () => {
		const entry = this.props.entry;
		this.props.viewStore.entryBeingEdited = entry;
		this.editText = entry.title;
	};

	@action
	handleKeyDown = (event) => {
		if (event.which === ESCAPE_KEY) {
			this.editText = this.props.entry.title;
			this.props.viewStore.entryBeingEdited = null;
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	};

	@action
	handleChange = (event) => {
		this.editText = event.target.value;
	};

	@action
	handleToggle = () => {
		this.props.entry.toggle();
	};
}

EntryItemComponent.propTypes = {
	entry: PropTypes.object.isRequired,
	viewStore: PropTypes.object.isRequired
};

export default EntryItemComponent
