export interface ProductCreation {
  id: string;
  name: string;
  category: 'cupcakes' | 'cakes' | 'dessert-tables' | 'confectionery';
  categoryLabel: string;
  tagline: string;
  description: string;
  startingPrice: string;
  leadTime: string;
  servings: string;
  flavours: string[];
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cakes' | 'cupcakes' | 'dessert-tables' | 'confectionery';
  categoryLabel: string;
  occasion: string;
  description: string;
  image: string;
  imageAlt: string;
  span?: string; // For masonry layout
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  occasion: string;
  comment: string;
  rating: number;
  cakeType: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  dateNeeded: string;
  confectionType: string;
  servings: string;
  flavourPreference: string;
  deliveryOption: 'pickup' | 'delivery';
  deliveryAddress: string;
  notes: string;
}
