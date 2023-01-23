import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, concatMap, from, map, Observable, switchMap, tap} from "rxjs";
import {CategoryProductsService} from "../../services/category-products.service";

@Component({
  selector: 'app-query-single-nested-prods-with-cats',
  templateUrl: './query-single-nested-prods-with-cats.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedProdsWithCatsComponent {
  private _productsArraySubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public productsArray$: Observable<any[]> = this._productsArraySubject.asObservable();

  public prodArray: any[] = [];
  readonly productsWithCat$: Observable<{ product: any; data: any }> =
    this._categoryProductsService.getAllProducts().pipe(
      switchMap((products) =>
        from(products).pipe(
          concatMap((product) => {
            return this._categoryProductsService.getProductsByCategory(product.category).pipe(
              map((prdCat) => ({ product: product, data: prdCat })),

              tap((prdCat) => {
                this.prodArray.push({ product: product, data: prdCat });
                this._productsArraySubject.next(this.prodArray)
              })
              )
            }

          )
        )
      )
    );


  // readonly productsWithCat$: Observable<any> =
  //   this._categoryProductsService.getAllProducts().pipe(
  //     switchMap((products) =>
  //       products.map(product => {
  //         return this._categoryProductsService.getProductsByCategory(product.category).pipe(
  //           switchMap(product)
  //           map((prodCat) => {
  //             console.log(({
  //               product: product,
  //               category: prodCat
  //             }))
  //             return ({
  //               product: product,
  //               category: prodCat
  //             })
  //           }),
  //           tap((prodCat) => {
  //             // console.log(prodCat)
  //             // this._productsArraySubject.next([prodCat]);
  //           })
  //         )
  //       })
  //     ),
  //     tap(console.log)
  //   );

  constructor(
    private _categoryProductsService: CategoryProductsService
  ) {}
}
