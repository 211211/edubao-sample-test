import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import {newLocaleDate} from '../../Utils/utils'

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const image1 = 'https://unsplash.com/assets/api/photos-new-grid-0d4acd4dc0bebf39f8e8ad9986446ea11fa5609c047a923d8b81447b36bb9178.jpg'
const image2 = 'https://unsplash.com/assets/api/search-minimal-f397c39212f9dd527c03be6550f2140c888f41e9f23ea8aa0591348101b157a5.jpg'
const image3 = 'https://unsplash.com/assets/api/search-wanderlust-9b9f4877226c797c89e67a1307764855e67fd3a97bd8938090858efa745675ab.jpg'
@observer
class EntryItemComponent extends React.Component {
	@observable editText = '';

	render() {
		const { entry } = this.props;
		console.log({entry})
		const multipleBackgroundsGradientColour = `${entry.bgColour},
			url(${image1}) left no-repeat,
			url(${image2}) center no-repeat,
			url(${image3}) right no-repeat`
		return (
			<li>
				<div style={{
					color: 'white',
					height: 120,
					width: 339,
					borderRadius: 10,
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					marginTop: 27,
					justifyContent: 'center',
					background: multipleBackgroundsGradientColour,
					backgroundSize: 'contain',
				}}>
					<div style={{
						fontSize: 27,
						padding: '23px 0',
						textTransform: 'uppercase',
						lineHeight: '32px',
						fontWeight: 'bold',
						boxShadow: '#00000029',
						letterSpacing: '2.83pt'
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
