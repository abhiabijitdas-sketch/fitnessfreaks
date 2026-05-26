export interface MembershipPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
}