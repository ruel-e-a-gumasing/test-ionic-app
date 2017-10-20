import { Product } from './Product';

export class AllProducts {
    constructor(
        public categoryName: string,
        public totalProducts: number,
        public products: Product[],
        public visible: boolean) {
    }
}
