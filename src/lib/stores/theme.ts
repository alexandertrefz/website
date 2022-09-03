import { browser } from '$app/environment'
import { derived, readable, writable } from 'svelte/store'

const selectedThemeKey = 'selectedTheme'

type Theme = 'dark' | 'light'
type ThemeOptions = Theme | 'automatic'

let defaultValue: ThemeOptions = 'automatic'

if (browser) {
	let localStorageContent = localStorage.getItem(selectedThemeKey) as ThemeOptions | undefined

	if (localStorageContent) {
		defaultValue = localStorageContent
	}
}

export const detectedTheme = readable<Theme | undefined>(undefined, (set) => {
	if (typeof window === 'undefined') {
		return () => {}
	}

	const query = window.matchMedia('(prefers-color-scheme: light)')

	const update = (event) => {
		if (query.matches) {
			set('light')
		} else {
			set('dark')
		}
	}

	update(query)

	query.addEventListener('change', update)

	return () => {
		query.removeEventListener('change', update)
	}
})

export const selectedTheme = writable<ThemeOptions>(defaultValue)

if (browser) {
	selectedTheme.subscribe(($selectedTheme) => {
		localStorage.setItem(selectedThemeKey, $selectedTheme)
	})
}

export const resolvedTheme = derived(
	[selectedTheme, detectedTheme],
	([$selectedTheme, $detectedTheme]) => {
		if ($selectedTheme === 'automatic') {
			return $detectedTheme
		} else {
			return $selectedTheme
		}
	},
)
