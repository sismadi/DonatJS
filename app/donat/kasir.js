kasir={
model:{
  versi:'1.0',
  produk:[{id:1,nama:'bread',img:'img/bread.svg'},{id:2,nama:'tea',img:'img/tea.svg'},{id:3,nama:'donut',img:'img/donut.svg'}],
  cart:[ {id:2,nama:'tea',img:'img/tea.svg'},{id:3,nama:'donut',img:'img/donut.svg'}],

},

view:{
produk:function(arr){
out=``;
step=arr.length;
color=d.color(step);
if(step<1) color[0]='red';

for(i in arr){ var {id,nama,img}=arr[i];
out+=`<div class="col-1-${step}" onclick="${id}" >
<div class="ag" style="background:${color[i]}" > <img src="${img}" style="width:150px ; height:auto;"> <div class="ag-menu" >
<div class="ag-title">${nama}<br/>Rp. 5.000</div>
<div class="ag-desc"> <button onClick="kasir.controller.add(${id})">Add</button> </div>
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

for(i in arr){ var {id,nama,img}=arr[i];
out+=`<div class="row shadow" onclick="${id}" >
<div class="col-1-4" >
<img src="${img}" style="width:50px ; height:auto;">
</div>
<div class="col-3-4" >
<div class="">
2 x ${nama} <br>
@5.000<br/>
Rp.10.000
</div>
<div class="btns">
<button class="" onClick="kasir.controller.add(${id})">${d.svg.icon('trush')} Remove</button>
<button class="" onClick="kasir.controller.add(${id})">${d.svg.icon('plus')} Add</button>
</div>
</div>
</div>`;
}
out+=`<div class="shadow"> Total:Rp.20.000 <br/><button onClick="kasir.controller.add(${id})">Bayar</button> </div>`;
return out;
},



},

controller:{
add:function(i){ d.modal(i);
},
produk:function(){
  // d.modal('produk')
  arr=kasir.model.produk;
  d.gebi('content').innerHTML=kasir.view.produk(arr);

}
}
}
