import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const alignmentKey = 'alignment'

type AlignmentOptions = 'left' | 'justify' | 'right'

let defaultValue: AlignmentOptions = 'justify'

if (browser) {
	let localStorageContent = localStorage.getItem(alignmentKey) as AlignmentOptions | undefined

	if (localStorageContent) {
		defaultValue = localStorageContent
	}
}

export const alignment = writable<AlignmentOptions>(defaultValue)

if (browser) {
	alignment.subscribe(($selectedAlignment) => {
		localStorage.setItem(alignmentKey, $selectedAlignment)
		document.documentElement.style.setProperty('--alignment', $selectedAlignment)
	})
}
