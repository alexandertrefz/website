import { derived, readable, writable } from 'svelte/store'

type theme = 'dark' | 'light'
type themeOptions = theme | 'automatic'

export const detectedTheme = readable<theme | undefined>(undefined, (set) => {
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

export const selectedTheme = writable<themeOptions>('automatic')

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
