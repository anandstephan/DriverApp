import { useEffect, useState } from 'react';
import {  getProductInfo} from './productInfoService';
import { Product } from './type';

export const useProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [faqs,setFaqs] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProductInfo = async () => {
    try {
      setLoading(true);
      const data = await getProductInfo();
      setProducts(data?.products);
      setFaqs(data.faqs)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductInfo();
  }, []);

  return { products,faqs, loading, error, refetch: fetchProductInfo };
};
