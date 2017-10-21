/** this was taken from AR2 reference app
 * Define the storage service uses local storage
 */
import { Injectable } from '@angular/core';

/**
 * Define the storage service uses local storage
 *
 * @export
 * @class StorageService
 */
@Injectable()
export class StorageService {
  /**
   * Gets the value from storage
   *
   * @param {string} key storage key
   * @returns {*} value
   * @memberof StorageService
   */
  // tslint:disable-next-line:no-reserved-keywords
  public get(key: string): any {
    const value = JSON.parse(localStorage.getItem(key)) || null;
    return value;
  }
  /**
   * Sets the value to storage
   *
   * @param {string} key storage key
   * @param {*} value store value
   * @memberof StorageService
   */
  // tslint:disable-next-line:no-reserved-keywords
  public set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  /**
   * Remove the specified item.
   *
   * @param {string} key storage key
   * @memberof StorageService
   */
  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
