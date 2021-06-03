import {
    Component,
    Input ,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    SimpleChanges,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {

   @Input() product: Product;
   @Output() productClicked: EventEmitter<any> = new EventEmitter();

   today = new Date();

   constructor() {
        console.log('constructor');
    }

    /* ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
        console.log(changes);
    } */

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngDoCheck(): void {
        console.log('doCheck');
    }

    ngOnDestroy(): void {
        console.log('OnDestroy');
    }

   addCart(): void {
       console.log('Añador al carrito');
       this.productClicked.emit(this.product.id);
   }
}

