import { create } from 'zustand'

type MenuTransitionProps = {
  menuVisible: boolean
  setMenuVisible: () => void
}

export const useMenuTransitionStore = create<MenuTransitionProps>((set) => ({
  menuVisible: false,
  setMenuVisible: () => set((state) => ({ menuVisible: !state.menuVisible })),
}))
