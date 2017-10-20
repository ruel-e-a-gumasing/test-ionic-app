import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CategoryList } from '../models/CategoryList';
import { Category } from '../models/Category';
import { ProductList } from '../models/ProductList';
import { ProductData } from '../models/ProductData';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {
  private categoryUrl = 'http://localhost:8080/categories';
  private productUrl = 'http://localhost:8080/products';

  constructor(private _http: HttpClient) { }

  // --- Category ---
  getCategories(): Observable<CategoryList> {
    return this._http.get<CategoryList>(this.categoryUrl);
  }

  getCategory(id: number): Observable<Category> {
    return this._http.get<Category>(this.categoryUrl + '/' + id);
  }

  addCategory(category: Category) {
    return this._http.post<Category>(this.categoryUrl + '/create', category);
  }

  updateCategory(category: Category) {
    return this._http.put<Category>(this.categoryUrl + '/update', category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this._http.delete<Category>(this.categoryUrl + '/delete/' + id);
  }

  // --- Product ---
  getProducts(): Observable<ProductList> {
    return this._http.get<ProductList>(this.productUrl);
  }

  getProduct(id: number): Observable<ProductData> {
    return this._http.get<ProductData>(this.productUrl + '/' + id);
  }

  addProduct(product: Product): Observable<any> {
    product.id = 0;
    return this._http.post(this.productUrl + '/create', product);
  }

  updateProduct(product: Product) {
    return this._http.put<Product>(this.productUrl + '/update', product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this._http.delete<Product>(this.productUrl + '/delete/' + id);
  }
}
