import { Product } from './Product';

export interface AllProducts {
    
    categoryName: string,
    totalProducts: number,
    products: Product[],
    visible: boolean
    
}
