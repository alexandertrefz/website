<script lang="ts">
	import { browser } from '$app/env'
	import { selectedTheme } from './stores/theme'
	import { alignment } from './stores/alignment'
	import { fontSize } from './stores/fontSize'
	import { writable } from 'svelte/store'

	if (browser) {
		document.documentElement.addEventListener('click', (event) => {
			$settingsOpen = false
		})
	}

	export const settingsOpen = writable<boolean>(false)
</script>

<div id="settingsContainer" on:click|stopPropagation>
	<div
		class="trigger"
		class:open={$settingsOpen}
		on:click={() => {
			$settingsOpen = true
		}}
	>
		<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.33.204a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414L5.169 6.58A3.502 3.502 0 0 1 .207 2.326l2.237 2.237a1.5 1.5 0 1 0 2.121-2.121L2.329.202l.001.002Zm10.367 1.884L15.879.32l1.414 1.414-1.768 3.182-1.768.354-2.12 2.12-1.415-1.413 2.121-2.121.354-1.768ZM5.979 10.22l1.414 1.414-5.303 5.303A1 1 0 0 1 .598 15.61l.078-.087 5.303-5.303Z"
			/>
		</svg>
	</div>
	<div class="settings" class:closed={$settingsOpen === false}>
		<div class="header">
			Settings <div
				class="close"
				on:click={() => {
					$settingsOpen = false
				}}
			>
				<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m7 5.586 4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636z"
					/>
				</svg>
			</div>
		</div>
		<div class="content">
			<div class="setting">
				<div class="headline">Font Size</div>
				<div class="controlGroup">
					<div
						class="button"
						class:disabled={parseInt($fontSize) < 15}
						on:click={() => {
							$fontSize = `${parseInt($fontSize) - 1}px`
						}}
					>
						<svg width="14" height="2" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h14v2H0z" />
						</svg>
					</div>
					<div class="label">{$fontSize}</div>
					<div
						class="button"
						class:disabled={parseInt($fontSize) > 23}
						on:click={() => {
							$fontSize = `${parseInt($fontSize) + 1}px`
						}}
					>
						<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6V0h2v6h6v2H8v6H6V8H0V6z" />
						</svg>
					</div>
				</div>
			</div>
			<div class="setting">
				<div class="headline">Alignment</div>
				<div class="controlGroup buttonsOnly">
					<div
						class="button"
						class:active={$alignment === 'left'}
						on:click={() => {
							$alignment = 'left'
						}}
					>
						<svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h18v2H0V0Zm0 15h14v2H0v-2Zm0-5h18v2H0v-2Zm0-5h14v2H0V5Z" />
						</svg>
					</div>
					<div
						class="button"
						class:active={$alignment === 'justify'}
						on:click={() => {
							$alignment = 'justify'
						}}
					>
						<svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h18v2H0V0Zm0 15h18v2H0v-2Zm0-5h18v2H0v-2Zm0-5h18v2H0V5Z" />
						</svg>
					</div>
					<div
						class="button"
						class:active={$alignment === 'right'}
						on:click={() => {
							$alignment = 'right'
						}}
					>
						<svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h18v2H0V0Zm4 15h14v2H4v-2Zm-4-5h18v2H0v-2Zm4-5h14v2H4V5Z" />
						</svg>
					</div>
				</div>
			</div>
			<div class="setting">
				<div class="headline">Theme</div>
				<div class="controlGroup buttonsOnly">
					<div
						class="button"
						class:active={$selectedTheme === 'light'}
						on:click={() => {
							$selectedTheme = 'light'
						}}
					>
						<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11 17a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 0h2v3h-2V0Zm0 19h2v3h-2v-3ZM2.515 3.929l1.414-1.414L6.05 4.636 4.636 6.05 2.515 3.93v-.001ZM15.95 17.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121Zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001ZM4.636 15.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121ZM22 10v2h-3v-2h3ZM3 10v2H0v-2h3Z"
							/>
						</svg>
					</div>
					<div
						class="button"
						class:active={$selectedTheme === 'automatic'}
						on:click={() => {
							$selectedTheme = 'automatic'
						}}
					>
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
							<g transform="translate(1 1)" fill="none">
								<circle stroke-width="2" stroke-linejoin="round" cx="9" cy="9" r="9" />
								<path d="M9 18a9 9 0 0 1-9-9 9 9 0 0 1 9-9v18Z" />
							</g>
						</svg>
					</div>
					<div
						class="button"
						class:active={$selectedTheme === 'dark'}
						on:click={() => {
							$selectedTheme = 'dark'
						}}
					>
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8 5a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0h.1A6.979 6.979 0 0 0 8 5Zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 6.238 2.938 7.999 7.999 0 0 0 2 10Z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#settingsContainer {
		font-family: var(--font-settings);
		position: relative;

		-webkit-user-select: none;
		user-select: none;

		.trigger {
			display: grid;
			height: 38px;
			min-width: 38px;

			grid-auto-flow: column;
			gap: 10px;

			cursor: pointer;

			font-size: 18px;
			font-weight: 500;

			border-radius: 5px;
			padding: 10px;

			transition: background-color linear 200ms;
			background-color: var(--color-background-offset);

			@media screen and (min-width: 360px) {
				&::before {
					content: 'Settings';
				}
			}

			&:hover {
				background-color: var(--color-background-offset-further);
			}

			svg {
				align-self: center;
				fill: var(--color-foreground);
			}
		}

		.settings {
			&.closed {
				opacity: 0;
				pointer-events: none;
				-webkit-user-select: none;
				user-select: none;
			}

			position: absolute;

			top: -11px;
			right: -8px;

			border-radius: 10px;
			background-color: var(--color-background);
			box-shadow: 0px 0px 2.2px hsl(var(--color-boxshadow) / 5%),
				0px 0px 5.3px hsl(var(--color-boxshadow) / 8%),
				0px 0px 10px hsl(var(--color-boxshadow) / 10%),
				0px 0px 17.9px hsl(var(--color-boxshadow) / 12%),
				0px 0px 33.4px hsl(var(--color-boxshadow) / 14%),
				0px 0px 80px hsl(var(--color-boxshadow) / 20%);

			transition: opacity linear 200ms, background-color linear 200ms, box-shadow linear 200ms;

			.header {
				display: grid;
				grid-auto-flow: column;
				justify-content: space-between;

				padding: 20px;
				border-bottom: 1px solid var(--color-background-offset);

				font-weight: 600;
				font-size: 18px;
				height: 60px;

				transition: border-color linear 200ms;

				.close {
					display: grid;
					align-self: center;
					height: 38px;
					width: 38px;
					margin: -12px;
					border-radius: 5px;
					cursor: pointer;

					transition: background-color linear 200ms;
					background-color: var(--color-background-offset);

					&:hover {
						background-color: var(--color-background-offset-further);
					}

					svg {
						align-self: center;
						justify-self: center;
						fill: var(--color-foreground);

						transition: all linear 200ms;
					}
				}
			}

			.content {
				display: grid;
				gap: 20px;

				padding: 20px;

				font-weight: 500;
				font-size: 16px;

				.setting {
					.headline {
						padding-bottom: 10px;
					}

					.button {
						display: grid;
						width: 50px;
						height: 38px;
						background-color: var(--color-background-offset);
						border-radius: 5px;

						transition: background-color linear 200ms;

						&.disabled {
							opacity: 0.8;
							pointer-events: none;

							svg {
								opacity: 0.3;
							}
						}

						&:hover {
							background-color: var(--color-background-offset-further);
						}

						&.active {
							background-color: var(--color-highlight-medium);

							svg {
								path {
									fill: hsl(222deg 15% 85%);
								}

								circle {
									stroke: hsl(222deg 15% 85%);
								}
							}
						}

						&:not(.active):hover {
							cursor: pointer;
						}

						svg {
							align-self: center;
							justify-self: center;
							transition: all linear 200ms;

							circle {
								stroke: var(--color-foreground-emphasis);
								transition: all linear 200ms;
							}

							path {
								fill: var(--color-foreground-emphasis);
								transition: all linear 200ms;
							}
						}
					}

					.label {
						text-align: center;
						width: 50px;
						height: 38px;
						line-height: 38px;
					}

					.controlGroup {
						display: grid;
						grid-auto-flow: column;
						gap: 1px;

						&.buttonsOnly {
							.button:first-child {
								border-top-right-radius: 0px;
								border-bottom-right-radius: 0px;
							}

							.button:nth-child(2) {
								border-radius: 0px;
							}

							.button:last-child {
								border-top-left-radius: 0px;
								border-bottom-left-radius: 0px;
							}
						}
					}
				}
			}
		}
	}
</style>
