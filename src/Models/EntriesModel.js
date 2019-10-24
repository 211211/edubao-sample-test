import {observable} from 'mobx'
import {newLocaleDate, randomColour} from '../Utils/utils'

export default class EntriesModel {
	store
	id
	@observable title

	constructor(store, id, title = '', created_at = newLocaleDate(), bgColour = randomColour()) {
		this.store = store
		this.id = id
		this.title = title
		this.created_at = created_at
		console.log({bgColour})
		this.bgColour = bgColour
	}

	destroy() {
		this.store.entries.remove(this)
	}

	setTitle(title) {
		this.title = title
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			created_at: this.created_at,
			bgColour: this.bgColour,
		}
	}

	static fromJS(store, object) {
		return new EntriesModel(store, object.id, object.title, object.created_at, object.bgColour)
	}
}
