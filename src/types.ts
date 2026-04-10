export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  viewingCount: number;
  sizes: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
