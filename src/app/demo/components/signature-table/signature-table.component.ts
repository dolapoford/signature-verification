import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service'
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-signature-table',
  templateUrl: './signature-table.component.html',
  styleUrls: ['./signature-table.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class SignatureTableComponent implements OnInit{

  products!: Product[];

    selectedProducts!: Product;
    position: string = 'center';
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }


    constructor(private productService: ProductService,private confirmationService: ConfirmationService, private messageService: MessageService) {}

//     confirm1() {
//       this.confirmationService.confirm({
//           message: 'Are you sure that you want to proceed?',
//           header: 'Confirmation',
//           icon: 'pi pi-exclamation-triangle',
//           accept: () => acceptFunc(),
//           reject: () => rejectFunc()
//       });
      
// }

confirmPosition(position: string) {
  this.position = position;

  this.confirmationService.confirm({
      // message: 'Do you want to delete this record?',
      // header: 'Delete Confirmation',
      // icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                  break;
          }
      },
      key: 'positionDialog'
  });
}



    ngOnInit() {
        this.productService.getProductsSmall() .then((data) => {
            this.products = data;
        });
    }
}
