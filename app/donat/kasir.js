kasir={
model:{
versi:'1.0',
produk:[
{id:1,nama:'pizza',img:'img/pizza.svg',banyak:1,harga:5000},
{id:2,nama:'coffe',img:'img/coffee.svg',banyak:1,harga:5000},
{id:3,nama:'donut',img:'img/donut.svg',banyak:1,harga:5000}],
cart:[
{id:2,nama:'coffee',img:'img/coffee.svg',banyak:1,harga:5000,jumlah:5000},
{id:3,nama:'donut',img:'img/donut.svg',banyak:1,harga:5000,jumlah:5000}],

},

view:{
produk:function(arr){
out=``;
step=arr.length;
color=d.color(step);
if(step<1) color[0]='red';

for(i in arr){ var {id,nama,img}=arr[i];
out+=`<div class="col-1-${step}" >
<div class="ag" style="background:${color[i]}" > <img src="${img}" style="width:150px ; height:auto;"> <div class="ag-menu" >
<div class="ag-title">${nama}<br/>Rp. 5.000</div>
<div class="ag-desc"> <button onClick="kasir.controller.add(${i})">Add</button> </div>
</div>
</div>
</div>`;
}
return out;
},

cart:function(arr){
out=``;
step=arr.length;
color=d.color(step);
if(step<1) color[0]='red';
out=`<div id="cart" class="row"  >`;
for(i in arr){ var {id,nama,img,banyak,harga,jumlah}=arr[i];
out+=`<div class="row shadow" onclick="${id}" >
<div class="col-1-4" >
<img src="${img}" style="width:50px ; height:auto;">
</div>
<div class="col-3-4" >
<div class="">
${banyak} x ${nama} <br>
@${harga}<br/>
Rp.${jumlah}
</div>
<div class="btns">
<button class="" onClick="kasir.controller.plus(${i})">${d.svg.icon('plus')}</button>
<button class="" onClick="kasir.controller.minus(${i})">${d.svg.icon('minus')}</button>
<button class="" onClick="kasir.controller.remove(${i})">${d.svg.icon('trush')}</button>
</div>
</div>
</div>`;
}
out+=`<div class="shadow"> Total:Rp.<span id="total" >150.000</span> <br/><button onClick="kasir.controller.add(${id})">Bayar</button> </div>`;
out+=`</div>`;
return out;
},



},

controller:{
add:function(i){
p=kasir.model.produk;
id=p[i].id;
c=kasir.model.cart;
const nod = c.find(e => e.id === id);
if(nod){nod.banyak+=1; }
else{  c.push(p[i])}
d.gebi('cart').innerHTML=kasir.view.cart(c);
this.total();
},

remove:function(i){
c=kasir.model.cart;
kasir.model.cart.splice(i,1);
d.gebi('cart').innerHTML=kasir.view.cart(c);
this.total();

},
plus:function(i){
c=kasir.model.cart;
c[i].banyak+=1;
d.gebi('cart').innerHTML=kasir.view.cart(c);
this.total();

},
minus:function(i){
c=kasir.model.cart;
if(c[i].banyak>0){c[i].banyak-=1; }
else { kasir.model.cart.splice(i,1);}
d.gebi('cart').innerHTML=kasir.view.cart(c);
this.total();

},

total:function(){
c=kasir.model.cart;
sum=0;
for (i in c) {
c[i].jumlah= (c[i].banyak * c[i].harga);
sum+=c[i].jumlah;
}
d.gebi('cart').innerHTML=kasir.view.cart(c);
d.gebi('total').innerHTML=sum;
},
produk:function(){
arr=kasir.model.produk;
d.gebi('content').innerHTML=kasir.view.produk(arr);

}
}
}
