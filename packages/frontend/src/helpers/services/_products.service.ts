// import { Product, Products } from '@/types/stores-types/_products-page-store.type';
//
// /** Получение товаров всех категорий, и форматирование их для вывода **/
//
// export async function fetchAndSortAllProducts(path: string): Promise<Array<Product>> {
//   const result: Products = await database.getData(path);
//   return Object.values(result)
//     .flat()
//     .sort(() => Math.random() - 0.5);
// }
//
// /** Получение товаров только по акции **/
//
// export function getProductsOnSaleOnly(array: Array<Product>): Array<Product> {
//   return array.filter(item => item.sale);
// }
//
// /** Получение мин макс ценовых значений (ценовой диапазон) **/
//
// export function getPriceRangeValues(array: Array<Product>): Array<number> {
//   const prices = array.map(item => item.coast);
//   const min = Math.min(...prices);
//   const max = Math.max(...prices);
//   return [min, max];
// }
