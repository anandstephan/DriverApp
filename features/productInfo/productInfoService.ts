import apiClient from "../../api/apiClient";
import { Product } from "./type";


export const getProductInfo = async () : Promise<Product> =>{
const response = await apiClient.get('/api/driver/profile/productInfo');
return response.data;
}