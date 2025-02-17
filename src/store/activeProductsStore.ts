import { create } from 'zustand'

import { ActiveProducts } from '../types/models'

interface ActiveProductsStore {
  activeProducts: ActiveProducts
  setActiveProducts: (productId: number, isActive: boolean) => void
  clearActiveProducts: () => void
}

export const useActiveProductsStore = create<ActiveProductsStore>((set) => ({
  activeProducts: {},
  setActiveProducts: (productId: number, isActive: boolean) =>
    set((state) => ({
      activeProducts: {
        ...state.activeProducts,
        [productId]: isActive,
      },
    })),
  clearActiveProducts: () =>
    set(() => ({
      activeProducts: {},
    })),
}))
