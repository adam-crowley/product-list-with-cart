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
}

export type ProductData = Product[]
