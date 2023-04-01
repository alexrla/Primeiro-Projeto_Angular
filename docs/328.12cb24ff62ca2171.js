"use strict";(self.webpackChunknew_window_store=self.webpackChunknew_window_store||[]).push([[328],{5328:(M,d,r)=>{r.r(d),r.d(d,{ProductsModule:()=>C});var p=r(6895),c=r(9541),t=r(1571);const m=[{id:1,name:"Mouse 1",price:439,payment:"\xc0 vista no PIX",image:"./assets/mouse-3.jpg",quantity:50},{id:2,name:"Monitor",price:1200.5,payment:"\xc0 vista no PIX",image:"./assets/monitor-1.jpg",quantity:50},{id:3,name:"Teclado 1",price:749.99,payment:"\xc0 vista no PIX",image:"./assets/teclado-1.jpg",quantity:50},{id:4,name:"Fone de ouvido 1",price:599.99,payment:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-2.jpg",quantity:50},{id:5,name:"Fone de ouvido 2",price:299.99,payment:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-1.jpg",quantity:50},{id:6,name:"Fone de ouvido 3",price:399.99,payment:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-3.jpg",quantity:50},{id:7,name:"HD 1TB",price:499.99,payment:"\xc0 vista no PIX",image:"./assets/hd.jpg",quantity:50},{id:8,name:"Placas de v\xeddeo",price:18449.99,payment:"\xc0 vista no PIX",image:"./assets/placa-video.jpg",quantity:50},{id:9,name:"Processador Ryzen",price:1e3,payment:"\xc0 vista no PIX",image:"./assets/processador.jpg",quantity:50},{id:10,name:"Notebook 1",price:2500,payment:"\xc0 vista no PIX",image:"./assets/laptop-1.jpg",quantity:50},{id:11,name:"Notebook 2",price:4500,payment:"\xc0 vista no PIX",image:"./assets/laptop-2.jpg",quantity:50},{id:12,name:"Mouse 2",price:20,payment:"\xc0 vista no PIX",image:"./assets/mouse-1.png",quantity:50},{id:13,name:"Mouse 3",price:200,payment:"\xc0 vista no PIX",image:"./assets/mouse-2.jpg",quantity:50},{id:14,name:"Mouse 4",price:50,payment:"\xc0 vista no PIX",image:"./assets/mouse-4.jpg",quantity:50},{id:15,name:"Teclado 2",price:159.99,payment:"\xc0 vista no PIX",image:"./assets/teclado-2.jpg",quantity:50}];let l=(()=>{class n{constructor(){this.myProducts=m}getAll(){return this.myProducts}getProduct(o){return this.myProducts.find(e=>e.id==o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=r(8881);let _=(()=>{class n{constructor(o){this._snackBar=o}notify(o){this._snackBar.open(o,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(g.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=r(3705),a=r(433);let P=(()=>{class n{constructor(o,e,s,u){this.serviceProduct=o,this.route=e,this.notifyService=s,this.cartService=u,this.quantity=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.product=this.serviceProduct.getProduct(e)}addToCart(){this.notifyService.notify("Produto adicionado ao carrinho!");const o={...this.product,quantity:this.product.quantity-this.quantity,amount:this.quantity};this.product.quantity=this.product.quantity-this.quantity,this.cartService.addToCart(o)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l),t.Y36(c.gz),t.Y36(_),t.Y36(y.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-details"]],decls:19,vars:11,consts:[[1,"product-details"],[1,"product-details__img"],[3,"src","alt"],[1,"product-details__description"],[1,"product-details__name"],[1,"product-details__price"],[1,"alert"],[1,"quantity"],["type","number","min","1",3,"ngModel","max","value","ngModelChange"],[1,"avaiability"],["type","button",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p",6),t._uU(10,"Estoque dispon\xedvel"),t.qZA(),t.TgZ(11,"label",7),t._uU(12," Quantidade: "),t.TgZ(13,"input",8),t.NdJ("ngModelChange",function(u){return e.quantity=u}),t.qZA(),t._uU(14," unidade (s) "),t.qZA(),t.TgZ(15,"p",9),t._uU(16),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){return e.addToCart()}),t._uU(18,"Adicionar ao carrinho"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("src",null==e.product?null:e.product.image,t.LSH)("alt",null==e.product?null:e.product.name),t.xp6(3),t.Oqu(null==e.product?null:e.product.name),t.xp6(2),t.Oqu(t.xi3(8,8,null==e.product?null:e.product.price,"BRL")),t.xp6(6),t.s9C("max",null==e.product?null:e.product.quantity),t.Q6J("ngModel",e.quantity)("value",e.quantity>50?50:e.quantity),t.xp6(3),t.hij(" ",null==e.product?null:e.product.quantity," produto (s) em estoque "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.Fd,a.On,p.H9],styles:[".product-details[_ngcontent-%COMP%]{column-gap:20px;display:flex;margin:50px 0 80px}.product-details__img[_ngcontent-%COMP%]{align-self:center}.product-details__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:450px;width:450px}.product-details__name[_ngcontent-%COMP%]{font-size:36px}.product-details__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-details__description[_ngcontent-%COMP%]{border-radius:8px;border:1px solid var(--light-gray);flex:1;padding:15px}.avaiability[_ngcontent-%COMP%]{font-size:12px}.product-details__name[_ngcontent-%COMP%], .product-details__price[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%], .quantity[_ngcontent-%COMP%], .avaiability[_ngcontent-%COMP%]{color:var(--dark-gray)}label[_ngcontent-%COMP%]{display:block;margin:20px 0}input[_ngcontent-%COMP%]{padding:5px;width:30px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--royal-purple);border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:24px;margin:20px 0;padding:10px 13px;transition:.3s all}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),n})();function f(n,i){if(1&n&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"h2",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"button",8),t._uU(11,"Comprar"),t.qZA()()()),2&n){const o=i.$implicit;t.xp6(1),t.MGl("routerLink","/products/",o.id,""),t.xp6(1),t.Q6J("src",o.image,t.LSH)("alt",o.name),t.xp6(2),t.hij(" ",o.name," "),t.xp6(2),t.hij(" ",t.xi3(7,6,o.price,"BRL")," "),t.xp6(3),t.hij(" ",o.payment," ")}}const v=[{path:"",component:(()=>{class n{constructor(o,e){this.serviceProduct=o,this.route=e}ngOnInit(){const o=this.serviceProduct.getAll();this.route.queryParamMap.subscribe(e=>{const s=e.get("name")?.toLocaleLowerCase();this.myProducts=s?o.filter(u=>u.name.toLowerCase().includes(s)):o})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src","alt"],[1,"product-list__item-name"],[1,"product-list__item-price"],[1,"product-list__item-payment"],["type","button",1,"product-list__buy-button"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0),t.YNc(1,f,12,9,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",e.myProducts))},dependencies:[p.sg,c.rH,p.H9],styles:[".product-list[_ngcontent-%COMP%]{align-content:center;display:flex;flex-flow:row wrap;gap:20px;justify-content:space-evenly;padding:40px 0;width:-moz-fit-content;width:fit-content}.product-list__card[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;box-shadow:#63636333 0 2px 8px;cursor:pointer;flex:0 1 270px;height:auto;padding:10px;text-align:center;transition:all .3s ease-in-out}.product-list__card[_ngcontent-%COMP%]:hover{background-color:var(--portage);transform:scale(1.1)}[_ngcontent-%COMP%]:is(.product-list__card:hover)   [_ngcontent-%COMP%]:is(.product-list__item-name, .product-list__item-price[_ngcontent-%COMP%], .product-list__item-payment)[_ngcontent-%COMP%]{color:#fff}.product-list__link[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;row-gap:10px}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;display:block;height:250px;width:250px}.product-list__item-name[_ngcontent-%COMP%]{font-size:24px}.product-list__item-price[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.product-list__item-name[_ngcontent-%COMP%], .product-list__item-price[_ngcontent-%COMP%], .product-list__item-payment[_ngcontent-%COMP%]{color:var(--meteorite)}.product-list__buy-button[_ngcontent-%COMP%]{background-color:var(--meteorite);border:2px solid transparent;border-radius:8px;color:#fff;cursor:pointer;font-size:20px;margin:10px 0;padding:8px 12px;transition:all .3s ease-in-out}.product-list__buy-button[_ngcontent-%COMP%]:hover{background-color:#fff;border:2px solid var(--royal-purple);color:var(--royal-purple);transform:scale(1.1)}"]}),n})()},{path:":id",component:P}];let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,h,a.u5]}),n})()}}]);