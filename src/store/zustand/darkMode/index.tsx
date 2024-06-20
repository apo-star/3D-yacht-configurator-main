import create from 'zustand'

interface DarkModeState {
  darkMode: boolean
}

interface DarkModeActions {
  setDarkMode: (value: boolean) => void
}

const useDarkModeStore = create<DarkModeState & DarkModeActions>((set) => ({
  darkMode: true, // Change this initial value as per your requirement
  setDarkMode: (value) => set(() => ({ darkMode: value }))
}))

export default useDarkModeStore