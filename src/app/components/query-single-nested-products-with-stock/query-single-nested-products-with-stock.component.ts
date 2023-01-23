import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, forkJoin} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import {ProductWithStockQueryModel} from "../../query-models/product-with-stock.query-model";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-query-single-nested-products-with-stock',
  templateUrl: './query-single-nested-products-with-stock.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedProductsWithStockComponent {

  readonly products$: Observable<ProductWithStockQueryModel[]> = this._productsService.getAll().pipe(
    switchMap(products =>
        forkJoin(
          products.map((product: ProductModel) => {
            // console.log(this._productsService.getProductMetadata(product.id))
            return this._productsService.getProductMetadata(product.id).pipe(
              map(metaProducts => ({
                name: product?.name,
                price: product?.price,
                stock: metaProducts[0]?.stock
              }))
            )
          })
        ),
    ),
    tap(console.log)
  )

  constructor(private _productsService: ProductsService) {
  }
}
