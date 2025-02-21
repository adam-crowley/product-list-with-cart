export interface ImageUrls {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export interface ProductItem {
  id: number
  image: ImageUrls
  name: string
  category: string
  price: number
  qty?: number
  active?: boolean
}

export interface ProductProps {
  product: ProductItem
}

export type ProductData = ProductItem[]
export interface CartItem extends ProductItem {
  qty: number
  active: boolean
}

export interface CartItemProps {
  product: CartItem
}

export interface CartStore {
  cart: CartItem[]
  addToCart: (product: ProductItem) => void
  removeFromCart: (product: ProductItem) => void
  updateProductQty: (product: ProductItem, qty: number) => void
  clearCart: () => void
}

export interface DialogProps {
  isOpen: boolean
  closeDialog: () => void
}
