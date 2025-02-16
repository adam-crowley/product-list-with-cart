import { create } from 'zustand'

import { ActiveProducts } from '../types/models'

interface ActiveProductsStore {
  activeProducts: ActiveProducts
  setActiveProducts: (productId: number, isActive: boolean) => void
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
}))
