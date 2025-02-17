import { create } from 'zustand'

import { Product } from '../types/models'

interface CartStore {
  cart: Product[]
  addToCart: (product: Product) => void
  updateProductQty: (product: Product, qty: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, { ...product, qty: 1 }] })),
  updateProductQty: (product: Product, qty: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id ? { ...item, qty: (item.qty ?? 0) + qty } : item
      ),
    })),
}))
