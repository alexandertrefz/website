import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const fontSizeKey = 'fontSize'

let defaultValue = '16px'

if (browser) {
	let localStorageContent = localStorage.getItem(fontSizeKey)

	if (localStorageContent) {
		defaultValue = localStorageContent
	}
}

export const fontSize = writable<string>(defaultValue)

if (browser) {
	fontSize.subscribe(($selectedFontSize) => {
		localStorage.setItem(fontSizeKey, $selectedFontSize)
		document.documentElement.style.setProperty('--base-font-size', $selectedFontSize)
	})
}
