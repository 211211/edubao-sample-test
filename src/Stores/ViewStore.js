import { observable } from 'mobx';
import { ALL_ENTRIES } from '../Constants/Actions';

export default class ViewStore {
	@observable entryBeingEdited = null;
	@observable entryFilter = ALL_ENTRIES;
}
