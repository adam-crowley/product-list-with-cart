export interface ImageUrls {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export interface Product {
  image: ImageUrls
  name: string
  category: string
  price: number
}

export interface ProductData {
  productData: Product[]
}
