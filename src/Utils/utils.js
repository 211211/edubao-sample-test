import COLOURS from '../Constants/Colours'

export function	uuid() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';

	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
			.toString(16);
	}

	return uuid;
}

// Return current date as DD.MM.YYYY
// Ex: 25.10.2019
export function newLocaleDate() {
	return (new Date()).toLocaleDateString('vi-VN').split('/').join('.')
}

export function randomColour() {
	const randomIndexColour = Math.floor(Math.random() * Object.keys(COLOURS).length)
	return COLOURS[randomIndexColour]
}
