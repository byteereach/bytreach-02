import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  metric: string;
  description: string;
  before: string;
  after: string;
}
