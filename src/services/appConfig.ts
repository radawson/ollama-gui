import { useLocalStorage } from '@vueuse/core'
import gravatarUrl from 'gravatar-url'
import { computed } from 'vue'

const BASE_URL = 'http://10.10.13.245:11434/api'

export const gravatarEmail = useLocalStorage('gravatarEmail', 'dawsora@gmail.com')
export const avatarUrl = computed(() => gravatarUrl(gravatarEmail.value, { size: 200, default: 'mm' }))
export const debugMode = useLocalStorage('debug', false)
export const baseUrl = useLocalStorage('baseUrl', BASE_URL)
export const isDarkMode = useLocalStorage('darkMode', true)
export const isSettingsOpen = useLocalStorage('settingsPanelOpen', true)
export const isSideBarOpen = useLocalStorage('sideBarOpen', true)
export const toggleSettingsPanel = () => (isSettingsOpen.value = !isSettingsOpen.value)
export const toggleSideBar = () => (isSideBarOpen.value = !isSideBarOpen.value)
