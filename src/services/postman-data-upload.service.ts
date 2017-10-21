import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { User } from '../models/User';


   
@Injectable()
export class PostmanService {
    private categoryUrl = 'http://localhost:8090/categories';
    private productUrl = 'http://localhost:8090/products';
    private userUrl = 'http://localhost:8090/users';
    users = [{
        "id": 3,
        "username": "johndoe",
        "password": "pwd",
        "firstName": "John",
        "lastName": "Doe",
        "isAdmin": true
    },
    {
        "id": 4,
        "username": "josedoe",
        "password": "pwd",
        "firstName": "Jose",
        "lastName": "Doe",
        "isAdmin": false
    }]

    categories = [
    {
        "id": 1,
        "name": "Home Appliances"
    },
    {
        "id": 2,
        "name": "Computers & Laptops"
    },
    {
        "id": 3,
        "name": "Mobiles & Tablets"
    },
    {
        "id": 4,
        "name": "Health & Beauty"
    },
    {
        "id": 5,
        "name": "Baby & Toddler"
    }
    ]

    products = [
    {
        "id": 3,
        "name": "Gaming Mouse Pad",
        "categoryId": 4,
        "price": 5,
        "stocks": 25,
        "imageUrl": "http://bpc.h-cdn.co/assets/16/11/980x980/gallery-1458229769-razer-vespula-gaming-mouse-pad.jpg"
    },
    {
        "id": 4,
        "name": "Epson Printer",
        "categoryId": 4,
        "price": 105,
        "stocks": 5,
        "imageUrl": "https://mediaserver.goepson.com/ImConvServlet/imconv/8f5077e50ee3a208171da70870a0e4eaacca589d/1200Wx1200H?use=banner&assetDescr=wf3620_fca-cos-fn_690x460"
    },
    {
        "id": 5,
        "name": "Potty Trainer",
        "categoryId": 7,
        "price": 15,
        "stocks": 10,
        "imageUrl": "http://www.parenting.com/sites/parenting.com/files/styles/facebook_og_image/public/Summer-3-Stage-Potty-Trainer_0.jpg?itok=BS-5wlCy"
    },
    {
        "id": 6,
        "name": "Urine Pad",
        "categoryId": 7,
        "price": 6.25,
        "stocks": 5,
        "imageUrl": "https://sc02.alicdn.com/kf/HTB1KBmfMVXXXXaFXpXXq6xXFXXXu/Disposable-Pet-Dog-Urine-Pad-Wee-Wee.jpg_350x350.jpg"
    },
    {
        "id": 7,
        "name": "Pacifier",
        "categoryId": 7,
        "price": 8,
        "stocks": 15,
        "imageUrl": "https://target.scene7.com/is/image/Target/16728600?wid=520&hei=520&fmt=pjpeg"
    }

    ]
    constructor(private _http: HttpClient) { }

    // --- Category ---
    fillData(){
        for(const user of this.users){
            this.addUser(user).subscribe();
        };

        for(const prod of this.products){
            this.addProduct(prod).subscribe();
        };

        for(const categ of this.categories){
            this.addCategory(categ).subscribe();
        };
    }

    addCategory(category: Category): Observable<any> {
        category.id = 0;
        return this._http.post(this.categoryUrl, category);
    }

    addProduct(product: Product): Observable<any> {
        product.id = 0;
        return this._http.post(this.productUrl , product);
    }

    addUser(user: User): Observable<any> {
        user.id = 0;
        return this._http.post(this.userUrl , user);
    }

}
