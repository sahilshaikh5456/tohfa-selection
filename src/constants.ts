import { Product, Category, Review } from './types';

export const TAGLINES = [
  "Tohfa Selection: Adorning Your Traditions.",
  "Elegance in Every Circle.",
  "The Perfect Gift for Every Occasion.",
  "Timeless Beauty, Modern Grace.",
  "Celebrate You with Tohfa."
];

export const CATEGORIES: Category[] = [
  {
    id: 'wedding',
    name: 'Wedding Bangles',
    image: 'https://picsum.photos/seed/wedding-bangles/600/800',
    description: 'Exquisite designs for your special day.'
  },
  {
    id: 'bridal',
    name: 'Bridal Sets',
    image: 'https://picsum.photos/seed/bridal-set/600/800',
    description: 'Complete sets to complement your bridal look.'
  },
  {
    id: 'daily',
    name: 'Daily Wear',
    image: 'https://picsum.photos/seed/daily-bangles/600/800',
    description: 'Elegant bangles for everyday grace.'
  },
  {
    id: 'festive',
    name: 'Festive Collection',
    image: 'https://picsum.photos/seed/festive-bangles/600/800',
    description: 'Vibrant colors for every celebration.'
  },
  {
    id: 'gift',
    name: 'Gift Combos',
    image: 'https://picsum.photos/seed/gift-bangles/600/800',
    description: 'Perfectly curated sets for gifting.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Maroon Velvet Bangle Set',
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    image: 'https://picsum.photos/seed/maroon-bangle/600/800',
    category: 'wedding',
    description: 'A luxurious set of maroon velvet bangles adorned with intricate gold-plated kundan work. Perfect for weddings and grand celebrations.',
    stock: 5,
    viewingCount: 12,
    sizes: ['2.4', '2.6', '2.8']
  },
  {
    id: '2',
    name: 'Golden Temple Work Chuda',
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    image: 'https://picsum.photos/seed/gold-chuda/600/800',
    category: 'bridal',
    description: 'Traditional Punjabi style bridal chuda with exquisite temple work and pearl embellishments.',
    stock: 3,
    viewingCount: 25,
    sizes: ['2.4', '2.6']
  },
  {
    id: '3',
    name: 'Minimalist Gold-Plated Daily Bangles',
    price: 599,
    originalPrice: 899,
    discount: 33,
    image: 'https://picsum.photos/seed/daily-gold/600/800',
    category: 'daily',
    description: 'Simple yet elegant gold-plated bangles designed for daily wear. Lightweight and durable.',
    stock: 15,
    viewingCount: 8,
    sizes: ['2.2', '2.4', '2.6', '2.8']
  },
  {
    id: '4',
    name: 'Emerald Green Festive Kada',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: 'https://picsum.photos/seed/green-kada/600/800',
    category: 'festive',
    description: 'Stunning emerald green kadas with stone work. Adds a pop of color to any festive outfit.',
    stock: 7,
    viewingCount: 18,
    sizes: ['2.4', '2.6', '2.8']
  },
  {
    id: '5',
    name: 'Rose Gold Floral Bangle Set',
    price: 1599,
    originalPrice: 2199,
    discount: 27,
    image: 'https://picsum.photos/seed/rose-gold/600/800',
    category: 'wedding',
    description: 'Modern rose gold bangles with delicate floral motifs. A contemporary take on traditional jewelry.',
    stock: 4,
    viewingCount: 14,
    sizes: ['2.4', '2.6']
  },
  {
    id: '6',
    name: 'Bridal Pearl & Stone Combo',
    price: 3999,
    originalPrice: 5499,
    discount: 27,
    image: 'https://picsum.photos/seed/pearl-combo/600/800',
    category: 'gift',
    description: 'A premium gift combo featuring a bridal set, matching earrings, and a beautiful jewelry box.',
    stock: 2,
    viewingCount: 30,
    sizes: ['2.4', '2.6', '2.8']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'The quality is amazing! The maroon bangles look even better in person. Perfect for my brother\'s wedding.',
    date: '2 days ago'
  },
  {
    id: '2',
    name: 'Anjali Gupta',
    rating: 4.5,
    comment: 'Very fast delivery and beautiful packaging. The sizing guide was very helpful.',
    date: '1 week ago'
  },
  {
    id: '3',
    name: 'Sneha Patel',
    rating: 5,
    comment: 'I ordered via WhatsApp and the process was so smooth. Highly recommended!',
    date: '3 days ago'
  }
];

export const FAQS = [
  {
    question: "What is the delivery time?",
    answer: "We typically deliver within 3-5 business days for Tier 1 cities and 5-7 business days for other locations across India."
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, we offer COD on all orders above ₹499. For orders below that, a small shipping fee may apply."
  },
  {
    question: "How do I find my bangle size?",
    answer: "You can refer to our size guide on the product page. Generally, 2.4, 2.6, and 2.8 are the standard sizes in India."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day easy return policy if the product is damaged or doesn't match the description. Please keep the original packaging intact."
  }
];
