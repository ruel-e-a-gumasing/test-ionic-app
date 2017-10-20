export class Product {
    constructor(
        public id: number,
        public name: string,
        public categoryId: number,
        public price: number,
        public stocks: number,
        public imageUrl: string
    ) {}
}
