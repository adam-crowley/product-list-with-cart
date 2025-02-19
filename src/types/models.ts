export interface ImageUrls {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export interface Product {
  id: number
  image: ImageUrls
  name: string
  category: string
  price: number
  qty?: number
  active?: boolean
}

export interface CartItem extends Product {
  qty: number
  active: boolean
}

export interface CartStore {
  cart: CartItem[]
  addToCart: (product: Product) => void
  updateProductQty: (product: Product, qty: number) => void
}

export type ProductData = Product[]

export interface ActiveProducts {
  [key: string]: boolean
}
