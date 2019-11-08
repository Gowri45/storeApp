import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  product: Array<Product>=[{
    name: 'Choker',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfUrSKaa9xjPAInDJ4hdxAdh5tSN3I0ixTAF_1YWbQvTa_OFNt7nf2F6MitA-mxGbFoaMsL3_Qt115aJynS3usriuTisEicuickzfqGMEOI6kPZir8WfcX&usqp=CAE',
    price: 20,
    description: 'string',
    isAvailable: false,
    imageAlt: 'string'
  },
  {
  name: 'Bracelet',
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8CT0QnBn7Px403T8LYo0b3YYiTOh_G0aGOIJ80yBG9tE2OwMNkQ43wgc9LrdTKMKMPPod-dJJlm3Tr4NvsZ-Sw3Td5Ee6oq4YyhZLyiU&usqp=CAE',
  price: 15,
  description: 'string',
  isAvailable: true,
  imageAlt: 'string'
  },
  {
  name: 'Nose Pins',
  image: '../assets/img3.jpg',
  price: 10,
  description: 'string',
  isAvailable: true,
  imageAlt: 'string'
  },
  {
  name: 'Pendant',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZ3zTh0_5Y829OYHr8nQYoYJoOmCtdlEXsNs_Lf0PuprYMJpichRQked17lWfv4jSR8IBP3MxoK5-8UpwZeN7zPTTQcNOf0WsYeallkLR6rJxEbFIon6w6&usqp=CAE',
    price: 25,
    description: 'string',
    isAvailable: false,
    imageAlt: 'string'
  },
  {
  name: 'Necklace',
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9BoHuIN_MbJ40dGX3FQjWM5febCD8j8EDD6oA_UTQcJPpr8r4VlGiTP5epfLpkm8X7-M_TRW8Cs2do61w3frO7DFrIEFsZX0uQLekf9YBisFzCDO1snDg0w&usqp=CAE',
  price: 35,
  description: 'string',
  isAvailable: true,
  imageAlt: 'string'
  },
  {
  name: 'toe rings',
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPu8TzEXG5F6Pk_KvlsTIrFDQgLc6GNwGmyL51wV5jp4WAxPIJdPWJ8RVW_Oclow8TEeIfyaOCq-IvP36pRuLFUvG-W2gN6JKnX-4iZN6g_w9sq62QKDWb&usqp=CAE',
  price: 10,
  description: 'string',
  isAvailable: true,
  imageAlt: 'string'
  },
  {
    name: 'Rings',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9cqrHl4c6L3GorcafkeFqwwjK9xajyEL9NCUX_tgZJHRYXjdyA63qAM3Z9lRlRTsZ5tqiOhDMMMyocSRUZUk7BTdUgBNI_KQ71UDemUiTCcV13VVy84YO&usqp=CAE',
    price: 15,
    description: 'string',
    isAvailable: false,
    imageAlt: 'string'
  },
  {
  name: 'anklets',
  image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJgJvIRYvyjZ1mEXcWV5ZfoYpokbOWUzH61jwGNd_0W0rCwg4Jr85AUBNChkIVWzV_W3V35U6JlfMM8nwgdYn6Ck7rJXzPSlcgi4__hLAC6eQe547sAt4REgU&usqp=CAE',
  price: 20,
  description: 'string',
  isAvailable: true,
  imageAlt: 'string'
  },
  {
  name: 'head chains',
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKATsF8VG4UyEn3HCP3pSCisQb-8LhdWWKeJvQLRmNmTAC4c5-ZG9xYCbHYNiway6jtx7XqcMXEnTghPLyfz8RAHxR9nIHY-kyONwXaKU6nCR-5wugCCB1&usqp=CAE',
  price: 15,
  description: 'string',
  isAvailable: false,
  imageAlt: 'string'
  },
  ];
  ngOnInit() {
  }

}
