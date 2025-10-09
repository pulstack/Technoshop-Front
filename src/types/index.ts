// src/types.ts
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  barcode: string;
  createdAt: string;
  updatedAt: string;
  qrCode: string;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]; // array of image URLs
  sku: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  warrantyInformation: string;
  shippingInformation: string;
  weight: number;
  dimensions: Dimensions;
  count: number;
  tags: string[];
  meta: Meta;
  reviews: Review[];
}
