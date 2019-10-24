import { observable, action } from 'mobx';
import EntriesModel from '../Models/EntriesModel'
import {uuid} from '../Utils/utils';

export default class EntriesStore {
	@observable entries = [];

	@action
	addEntries(title) {
		this.entries.push(new EntriesModel(this, uuid(), title));
	}

	toJS() {
		return this.entries.map(entry => entry.toJS());
	}

	static fromJS(array) {
		const entriesStore = new EntriesStore();
		entriesStore.entries = array.map(item => EntriesModel.fromJS(entriesStore, item));
		return entriesStore;
	}
}
