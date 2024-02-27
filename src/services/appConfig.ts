import { useLocalStorage } from '@vueuse/core'
import gravatarUrl from 'gravatar-url'
import { computed } from 'vue'

const BASE_URL = 'http://10.10.10.8:11434/api'

export const gravatarEmail = useLocalStorage('gravatarEmail', 'helge.sverre@gmail.com')
//export const avatarUrl = computed(() => gravatarUrl(gravatarEmail.value, { size: 200 }))
export const debugMode = useLocalStorage('debug', false)
export const baseUrl = useLocalStorage('baseUrl', BASE_URL)
export const avatarUrl = '/src/assets/avatar.png'
export const isDarkMode = useLocalStorage('darkMode', true)
export const isSettingsOpen = useLocalStorage('settingsPanelOpen', true)
export const toggleSettingsPanel = () => (isSettingsOpen.value = !isSettingsOpen.value)
