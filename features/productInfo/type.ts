export interface Product {
  productId: string;
  name: string;
  category: string;
  price: number;
  warrantyPeriod: string;
  status: "available" | "unavailable" | "out_of_stock";
}