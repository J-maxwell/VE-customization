import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  steps=[
    {"id":"1","name":'初步确定浪漫框架'},
    {"id":"2","name":'下单预定支付定金'},
    {"id":"3","name":'填写惊喜档案表'},
    {"id":"4","name":'拟定详细策划方案'},
    {"id":"5","name":'确定方案付预付款'},
    {"id":"6","name":'统筹协调准备惊喜'},
    {"id":"7","name":'现场彩排支付尾款'},
    {"id":"8","name":'享受感动美丽惊喜'},
  ];
  comments=[
    {"id":"tx-1.png","name":'我叫哈哈哈',"comment":"不好意思这么久才来评价...上次的求婚真的很棒，女朋友很感动."},
    {"id":"tx-2.png","name":'奇怪',"comment":"朋友生日选择你们，真的没错！只要有朋友生日，就给你们介绍！"},
    {"id":"tx-3.png","name":'等',"comment":"很喜欢这次的餐厅求婚，女朋友很感动，谢谢你们！"},
    {"id":"tx-4.png","name":'APPLE',"comment":"我是一个很纠结的人，在沟通过程中，她很耐心，为我解答一切，"}
  ];
    // ];
  // show: any;
  constructor() { }

  ngOnInit() {}
  // enter(haha) {
  //   if (haha === 1 )  {
  //     this. cl.opacity =  0.6;  }
  // }
}
