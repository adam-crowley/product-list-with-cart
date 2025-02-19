import { create } from 'zustand'

import { ProductItem, CartStore } from '../types/models'

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: ProductItem) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id)
      if (!existingProduct) {
        return {
          cart: [...state.cart, { ...product, qty: 1, active: true }],
        }
      }
      return state
    }),
  removeFromCart: (product: ProductItem) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
  updateProductQty: (product: ProductItem, qty: number) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + qty,
                active: item.qty + qty > 0,
              }
            : item
        )
        .filter((item) => item.qty > 0),
    })),
  clearCart: () => set(() => ({ cart: [] })),
}))
