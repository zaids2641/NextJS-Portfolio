import { create } from 'zustand'

interface LoadingState {
  loading: boolean
  setLoading: (value: boolean, delay?: number) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (value, delay = 0) => {
    if (value) {
      // Apply optional delay before showing the spinner
      const timer = setTimeout(() => set({ loading: true }), delay)
      return () => clearTimeout(timer)
    } else {
      // Hide immediately
      set({ loading: false })
    }
  },
}))