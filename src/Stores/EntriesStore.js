import { observable, computed, action } from 'mobx';
import EntriesModel from '../Models/EntriesModel'
import {uuid} from '../Utils/utils';


export default class EntriesStore {
	@observable entries = [];

	@computed get activeEntriesCount() {
		return this.entries.reduce(
			(sum, entry) => sum + (entry.completed ? 0 : 1),
			0
		)
	}

	@computed get completedCount() {
		return this.entries.length - this.activeEntriesCount;
	}

	@action
	addEntries(title) {
		this.entries.push(new EntriesModel(this, uuid(), title, false));
	}

	@action
	toggleAll(checked) {
		this.entries.forEach(
			entry => entry.completed = checked
		);
	}

	@action
	clearCompleted() {
		this.entries = this.entries.filter(
			entry => !entry.completed
		);
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
