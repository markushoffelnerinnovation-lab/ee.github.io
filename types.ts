export interface FeatureItem {
  id: string;
  title: string;
  headline: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  link: string;
}