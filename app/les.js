d.svg.di();
data=[
{id:1,nama:"ktupad",isi:20,icon:"ktupad",url:"mod.js?mod/load"},
{id:2,nama:"bayam",isi:30,icon:"bayam",url:"mod.js?mod/load"},
{id:3,nama:"donat",isi:50,icon:"donat",url:"mod.js?mod/load"},
];
intro={ id:`Intro `, nama:"ktupad",};

les={
l01:{
res:`Hi Bumi`,
js:`d.gebi('content').innerHTML='Hi Bumi';`,},
l02:{
res:`get string from model`,
js:`
d.model.sample='get string from model';<br>
d.gebi('content').innerHTML=d.model.sample;`,
},
l03:{
res:`create view`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(){return  'create view';}<br>
d.gebi('content').innerHTML=d.view.sample();`,
},
l04:{
res:`get string from model`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(arr){return  arr;}<br>
d.gebi('content').innerHTML=d.view.sample(d.model.sample);
`,
},
l05:{
res:`get string from model`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(arr){return  arr;};<br>
d.controller.sample=function(){
d.gebi('content').innerHTML=d.view.sample(d.model.sample);
};<br/>
d.controller.sample();
`,
},

l06:{ res:`satu,dua,tiga`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(arr){return  arr;};<br>
d.controller.sample=function(){
d.gebi('content').innerHTML=d.view.sample(d.model.sample);
};<br/>
d.model.sample=['satu','dua','tiga'];<br/>
d.controller.sample();
`,
},


l07:{ res:`1.satu<br/>2.dua<br/>3.tiga`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(arr){
out="&lt;ol>";<br/>
for (i in arr){
out+="&lt;li class='contoh'>"+arr[i]+"&lt;/li>";
} <br/>
out+="&lt;/ol>";<br/>
return  out; } <br/>
d.controller.sample=function(){
d.gebi('content').innerHTML=d.view.sample(d.model.sample);
};<br/>
d.model.sample=['satu','dua','tiga'];<br/>
d.controller.sample();
`,
},


l08:{ res:`1.satu<br/>2.dua<br/>3.tiga`,
js:`
d.model.sample='get string from model';<br>
d.view.sample=function(arr){
out="&lt;ol>";<br/>
for (i in arr){
out+="&lt;li class='contoh'>"+arr[i].nama+"&lt;/li>";
} <br/>
out+="&lt;/ol>";<br/>
return  out; } <br/>
d.controller.sample=function(){
d.gebi('content').innerHTML=d.view.sample(d.model.sample);
};<br/>
d.model.sample=[{id:1,nama:'satu'},{id:2,nama:'dua'},{id:2,nama:'tiga'}];<br/>
d.controller.sample();
`,
},

l09:{res:d.view.button(d.model.button),js:`
log(d.model);<br/>
log(d.view);<br/>
log(d.controller);<br/>
d.gebi('content').innerHTML=d.view.button(d.model.button);<br/>
`,},

l10:{res:l10(),js:`
d.model.button.data[0].icon='printer';<br/>
d.gebi('content').innerHTML=d.view.button(d.model.button);<br/>
`,},
l11:{res:l11(),js:`
d.model.button.data[0].url='mymodal()';<br/>
d.gebi('content').innerHTML=d.view.button(d.model.button);<br/>
mymodal=function(){
d.modal('detail produk');
}
`,},

l12:{res:l12(),js:`

log(d.api);<br/>
d.api.host="https://api.donat.id/ukm/database.php";<br/>
d.api.req({mod:"setting",id:'22'},callback);<br/>
function callback(json){res=JSON.parse(json);<br/>
log(res);<br/>
d.model.button.data=JSON.parse(res[0].isi);<br/>
d.gebi('content').innerHTML=d.view.button(d.model.button);<br/>
`,},

}

function l10(){
d.model.button.data[0].icon='printer';
return  d.view.button(d.model.button);
}
function l11(){
d.model.button.data[0].url='mymodal()';
return  d.view.button(d.model.button);
}
function l12(){

  d.api.host="https://api.donat.id/ukm/database.php";
  d.api.req({mod:"setting",id:'22'},callback);
  function callback(json){res=JSON.parse(json);
  log(res);
   d.model.button.data=JSON.parse(res[0].isi);
   // d.gebi('content').innerHTML=d.view.button(d.model.button);
   dm=d.view.button(d.model.button);
  return  dm;
}
}

function mymodal(){
d.modal('detail produk');
}

model=[
//page
{id:1,mod:"page",induk:"content",nama:"intro",css:"row shadow",isi:''},
{id:1,mod:"page",induk:"intro",nama:"fitur",css:"row",isi:''},
{id:1,mod:"page",induk:"content",nama:"demo",css:"row",isi:''},

//div
//intro
{id:1,mod:"div",induk:"intro",nama:"Instalasi",css:"row",isi:intro.id},
//fitur
{id:1,mod:"div",induk:"fitur",nama:"01",css:"row shadow",isi:"01"},
{id:1,mod:"div",induk:"fitur",nama:"02",css:"row shadow",isi:"02"},
{id:1,mod:"div",induk:"fitur",nama:"03",css:"row shadow",isi:"03"},
{id:1,mod:"div",induk:"fitur",nama:"04",css:"row shadow",isi:"04"},
{id:1,mod:"div",induk:"fitur",nama:"05",css:"row shadow",isi:"05"},
{id:1,mod:"div",induk:"fitur",nama:"06",css:"row shadow",isi:"06"},
{id:1,mod:"div",induk:"fitur",nama:"07",css:"row shadow",isi:"07"},
{id:1,mod:"div",induk:"fitur",nama:"08",css:"row shadow",isi:"08"},
{id:1,mod:"div",induk:"fitur",nama:"09",css:"row shadow",isi:"09"},
{id:1,mod:"div",induk:"fitur",nama:"10",css:"row shadow",isi:"10"},
{id:1,mod:"div",induk:"fitur",nama:"11",css:"row shadow",isi:"11"},
{id:1,mod:"div",induk:"fitur",nama:"12",css:"row shadow",isi:"12"},

//demo
{id:1,mod:"div",induk:"demo",nama:"profile",css:"row",isi:''},

{id:1,mod:"les",induk:"01",nama:"01-create-element",css:"row",isi:les.l01},
{id:1,mod:"les",induk:"02",nama:"02-create-model",css:"row",isi:les.l02},
{id:1,mod:"les",induk:"03",nama:"03-create-view",css:"row",isi:les.l03},
{id:1,mod:"les",induk:"04",nama:"04-create-view-param",css:"row",isi:les.l04},
{id:1,mod:"les",induk:"05",nama:"05-create-controller",css:"row",isi:les.l05},
{id:1,mod:"les",induk:"06",nama:"06-change-model-array",css:"row",isi:les.l06},
{id:1,mod:"les",induk:"07",nama:"07-create-view-array",css:"row",isi:les.l07},
{id:1,mod:"les",induk:"08",nama:"08-change-model-object",css:"row",isi:les.l08},
{id:1,mod:"les",induk:"09",nama:"09-donat-properties",css:"row",isi:les.l09},
{id:1,mod:"les",induk:"10",nama:"10-change-model-element",css:"row",isi:les.l10},
{id:1,mod:"les",induk:"11",nama:"11-create-controller-function",css:"row",isi:les.l11},
{id:1,mod:"les",induk:"12",nama:"12-change-model-api",css:"row",isi:les.l12},



];


getPage=function(id){
page=id;
inc=[];
const n0 = model.filter(e => e.mod === 'page' && e.nama === id);
if(n0.length>0) { out=``;
for(i in n0){ n1=n0[i];
out+=`<div id="${n1.nama}" class="${n1.css}"> ${n1.isi} ${getDiv(n1.nama)} </div>`;
}
d.gebi('content').innerHTML=out;

const n00 = model.filter(e => e.mod === 'les');
for(i in n00){ d.gebi(n00[i].induk).innerHTML=getDoc(n00[i]);}

}
};


getDiv=function(id){
const n0 = model.filter(e => e.mod === 'div' && e.induk === id);
out=``;
for (i in n0) { n1=n0[i];
if(n1.induk!=n1.nama){
out+=`<div id="${n1.nama}"  class="${n1.css}"> ${n1.isi} ${getDiv(n1.nama)}</div>`;}
inc.push(n1.nama);
}
return out;
}


getDoc=function(nod){
// content=JSON.stringify(nod);
return `
<div class='doc'>
<div class='row'> <b>Nama: </b> ${nod.nama} </div>
<hr>
<div class='col-1-2'>
<div class='row'><b>HTML: </b> <br/>
&lt;div class='row' id='content'>Hello Donat &lt;/div>
</div>
<div class='row'> <b>JS: </b><br/>
${nod.isi.js}<br/>
</div>
</div>
<div class='col-1-2'><div class='row'> <b>Result: </b> <br/>${nod.isi.res}  </div></div>
</div>
`;



}

d.open('menu');
getPage('fitur');
