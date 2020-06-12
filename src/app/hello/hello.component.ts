import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})

export class HelloComponent {
  user = {
    name: 'Tuân Phạm',
    age: 21,
  };

  authors = [{
    name: 'Tuân Phạm',
    age: 21,
    address: '123 Nhân Chính'
  }, {
    name: 'Phạm Tuân',
    age: 22,
    address: '134 Thanh Xuân'
  }, {
    name: 'Phạm Ngọc Tuân',
    age: 22,
    address: '156 Hà Nội'
  }, {
    name: 'Phạm Ngọc',
    age: 22,
    address: '134 Hoàng Mai'
  }];
}
