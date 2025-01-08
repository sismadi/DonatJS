// DonatJS 1.0.0 Framework
console.log('Powered by DonatJS 1.0.0');

log=console.log.bind(window.console);

data=[
{id:1,nama:"satu",isi:250,icon:"bayam",url:"mod.js?mod/load"},
{id:2,nama:"dua",isi:75,icon:"person",url:"mod.js?mod/load"},
{id:3,nama:"tiga",isi:250,icon:"geo",url:"mod.js?mod/load"},
];

datatable={id:'datatable',data:data,rpp:5,page:1,fld:'id,nama'};

var d={
setcss:function(id,str){return document.documentElement.style.setProperty(id, str);;},
gebi:function(str){return document.getElementById(str);},
gebc:function(str){return document.getElementsByClassName(str);},
qs:function(str){return document.querySelector(str);},
getf:function(id){ var item = d.model.set.filter( el => el.nama==id); if(item.length>0){ controller[item[0].isi]();}},
ce:function(str) { return document.createElement(str);},
setls:function(nama,arr) { return window.localStorage.setItem(nama, JSON.stringify(arr));},
getls:function(nama) { return window.localStorage.getItem(nama);},
remls:function(nama) { return window.localStorage.removeItem(nama);},
color:function(step){
var pColor = getComputedStyle(document.body);
ph=pColor.getPropertyValue('--pColor-h');
ps=pColor.getPropertyValue('--pColor-s');
pl=pColor.getPropertyValue('--pColor-l');
arrColor = [];
var pl=parseInt(pl);
var pl=parseInt(pl+15);
per=parseInt(30 / step);
for(var i = 0; i < step; i++){ hsl=`hsl(${ph},${ps},${pl}%)`;
pl=pl-per;
arrColor.push(hsl);
}
return arrColor;
},
modal:function(id) {
out=`<div class="modal">
<button class="right" onclick="tutup()">X</button>
<div class="row">${id}</div></div>`;
d.gebi('modal').innerHTML=out;
d.open('modal')

tutup=function(){
d.modal('');
d.close('modal');
}
},
info:function(msg){d.gebi('bawah').innerHTML=msg;
d.open('bawah');
setTimeout(function(){ d.close('bawah'); }, 3000);
},


close:function(id){ var z=this.gebi(id); z.className=z.className.replace('show', 'hide');},
open:function(id) { var z=this.gebi(id); z.className=z.className.replace('hide', 'show');},
events:function(id,method){ d.gebi(id).addEventListener("click", method);},



model:{
color:{id:'color',data:[{id:'--pColor-h',isi:'213'},{id:'--pColor-s',isi:'100%'},{id:'--pColor-l',isi:'22.5%'}]},
data:[{id:1,nama:"satu"},{id:2,nama:"dua"},],
nama:'donat',
css:{
ul:'ul', li:'li', a:'a',search:'search',page:'shadow row',
table:'table',
form:'form row',
gInput:'gInput', input:'input', label:'label',
gButton:"gButton", button:'button',
gIcons:"gIcons", icons:'icons',
},
page:{id:'page',data:['input','table','button'],},
datatable:datatable,
table:datatable,
input:{id:'input',data:data,tipe:[
{id:"status",nama:"option",arr:'1,2'},
{id:"keterangan",nama:"textarea",arr:'1,2'},
],},
button:{id:'button',data:data,},
block:{id:'block',data:[],},
card:{id:'card',data:[
  {id:1,nama:"User",isi:"2",icon:"person",url:"d.api.read('master_users/view')"},
  {id:1,nama:"Menu",isi:"2",icon:"menu",url:"d.api.read('master_menu/view')"},
]},
view:{id:'view',
datatable:datatable,

button:{data:[
{id:1,nama:"Add",icon:"plus",url:"d.controller.add()"},
{id:2,nama:"Print",icon:"printer",url:"d.controller.print()"},
]},



},
add:{
id:'add',
input:{data:data[0],tipe:[],},
button:{data:[
{id:1,nama:"Insert",icon:"plus",url:"d.api.create()"},
{id:2,nama:"Cancel",icon:"x",url:"d.controller.view()"},
]},
},
edit:{
id:'add',
input:{data:data[0],tipe:[
{id:"status",nama:"option",arr:'1,2'},
{id:"keterangan",nama:"textarea",arr:'1,2'},
],},
button:{data:[
{id:1,nama:"Update",icon:"pen",url:"d.api.update()"},
{id:1,nama:"Delete",icon:"trush",url:"d.api.delete()"},
{id:2,nama:"Cancel",icon:"x",url:"d.controller.view()"},
]},
},

profile:{
id:'profile',
avatar:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSI+CiA8cGF0aCBkPSJNNCAyMlYxOUE0IDQgMCAwMTcgMTVIMTdBNCA0IDAgMDEyMCAxOVYyMk03IDdBNCA0IDAgMDAxNyA3IDQgNCAwIDAwNyA3Ij48L3BhdGg+PC9zdmc+',
username:'Wawan',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[
{id:1,nama:"Signout",icon:"person",url:"d.login.signout()"},
{id:1,nama:"Update",icon:"pen",url:"d.login.signin()"},
]},
card:{data:[
  {id:1,nama:"User",isi:"2",icon:"person",url:"d.api.read('master_users/view')"},
{id:1,nama:"Menu",isi:"2",icon:"menu",url:"d.api.read('master_menu/view')"},
]},
},

},


view:{
page:function(arr){out=``;
for(i in arr){out+=`<div id="${arr[i].nama}" class="${arr[i].css} ">${arr[i].isi} </div>`;}
return out;
},

grid:function(arr){ var {data}=arr;
out=`<div class="gGrid">`;
for(i in data){ var {css,nama,isi}=data[i];
out+=`<div class="${css}"> <span> ${isi}</span> </div>`; }
out+=`</div>`;
return out;
var {css,nama,isi}=arr;
out=`<div id="${arr.nama}" class="${arr.css} ">${arr.isi} </div>`;
return out;
},

div:function(arr){
const node = arr.filter(e => e.induk === id);
out=``;
for (i in node) { nod=node[i];
if(nod.induk!=nod.nama){
out+=`<div id="${nod.nama}"  class="${nod.css}"> ${nod.isi} ${this.div(nod.nama)}</div>`;}
inc.push(nod.nama);
}
log(inc)
return out;
},

menu:function(arr){
log(arr)
var{data}=arr;
out=`<ul class="${css.ul}">`;
log(data)
for(i in data){
out+=`<li class="${css.li}">
<a class="${css.a}" onclick="d.api.read('${data[i].url}')"> ${d.svg.icon(data[i].icon)} ${data[i].nama}</a>
</li>`; }
out+=`</ul>`;
return out;
},

datatable:function(arr){
out=`<div class="${css.search}">
<select class="input" onChange="d.controller.rpp(this.value);"><option>5</option><option>10</option> <option>50</option></select>
<input class="input" type="text" onkeyup="d.controller.search()"></div>`;
out+=`<div id="table" class="gTable">${this.table(arr)}</div>`;
return out;
},

table:function(arr){
log(arr)
var{page,rpp,data}=arr;
var al=data.length;
var np=Math.ceil(al / rpp);
out=`<table class="${css.table}">`;
out+=`<thead><tr><th>Aksi</th>`;
for(i in data[0]){ out+=`<th scope="col">${i}</th>`; }
out+=`</tr></thead>
<tbody>`;

for (var key=(page-1) * rpp; key < (page * rpp) && key < al; key++) { col=data[key];
out+=`<tr>`;
out+=`<td>  ${d.view.aksi(key)} </td>`;
for(i in col){ str=col[i];

if(str.length>12){ str=str.substring(0, 12) + ' ...' }
out+=`<td data-title="${i}">&nbsp; ${str} </td>`; }
out+=`</tr>`;
}
out+=`</tbody>
</table>`;
return out;
},

aksi:function(i){
return `<button class="${css.button}" onclick="d.controller.edit(${i})"> ${d.svg.icon('pen')} <span>Edit</span></button>`;
},

input:function(arr){
var {data,tipe}=arr;
function input(tipe,data,id) { inp=``; hide=``; label=``;

if(tipe.length>0) {
const nod = tipe.find(e => e.id === id);
if (nod && nod.nama === "hidden") { hide =`hide`;}
if (nod && nod.nama === "label") { label =`label`;}
else if (nod && nod.nama === "password") {
inp = `<input id="${id}" class="${css.input}" type="password" aria-label="${id}" value="${data[id]}" placeholder="" name="${id}" >`;
}
else if (nod && nod.nama === "textarea") {
inp = `<textarea class="${css.input}" onInput="this.parentNode.dataset.replicatedValue = this.value" class="did-floating-input" aria-label="${i}"  name="${i}" id="${i}" placeholder=" ">${data[i]}</textarea>`;
}

else if (nod && nod.nama === "option") {
text=nod.arr;
arr=text.split(",");
inp  = `<select class="${css.input}"  data-nama="${nod.nama}" class="did-floating-select" id="${id}" name="${id}" onchange="this.setAttribute('value', this.value);" onclick="this.setAttribute('value', this.value);">`;
inp += `<option value="" ></option>`;
for (let i in arr) {
if(data[id]==arr[i]){ sel='selected';} else{sel='';}
inp += `<option value="${arr[i]}" ${sel} >${arr[i]}</option>`;
}
inp += `</select>`;
}
else { inp = `<input id="${id}" class="${css.input}" type="text" aria-label="${id}" value="${data[id]}" placeholder="" name="${id}" >`;
}
}

else { inp = `<input id="${id}" class="${css.input}" type="text" aria-label="${id}" value="${data[id]}" placeholder="" name="${id}" >`;}

out=`<div class="col-1-2 ${hide} ${label}"><div class="${css.gInput} ">${inp}<label class="${css.label}">${i}</label></div></div>`;
return out;
}

out=`<form id="form" class="${css.form}">`;
for(i in data){
out+=input(tipe,data,i);

}
out+=`</form>`;
return out;
},

button:function(arr){
var {data}=arr;
out=`<div class="${css.gButton}">`;
for(i in data){ var {icon,url,nama}=data[i];
out+=`<button class="${css.button}" onclick="${url}"> ${d.svg.icon(icon)}  ${nama}</button>`; }
out+=`</div>`;
return out;
},

paging:function(arr){ var {data,page}=arr;
log(arr)
rpp=d.model.table.rpp;
al=data.length;
np=Math.ceil(al / rpp);

if (page < 1) page=1;
if (page > np) page=np;
p='show';n='show';
if (page==1)  {p='hide';n='show';}
if (page==np) {p='show';n='hide';}
if (al < rpp ) {p='hide'; n='hide';}

out=`<div class="gButton">
<button class="button ${p} " onclick="d.controller.paging(-1)" >Prev</button>
<button class="button ${n}" onclick="d.controller.paging(1)" >Next</button>
<div>page: ${page}/${np} data:${al} row(s)</div></div>`;
return out;
},

pie:function(arr){
var {data}=arr;
log(data)
step=data.length;
color=d.color(step);
sdo=25;
s0=0;
s1=step*100;
out=`
<svg class="pie img" width="100" height="100%" viewBox="0 0 42 42">
<circle class="pie-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>`;
for(i in data){ val=data[i].isi;
val1=parseInt(100-val);
s0+=val;
out+=`
<circle id="" cx="21" cy="21" r="15.91549430918954"
fill="transparent"
stroke="${color[i]}"
stroke-width="3"
stroke-dasharray="${val} ${val1}"
stroke-dashoffset="${sdo}">
</circle>`;
sdo+=parseInt(-val);
}

s2=parseInt((s0/s1)*100);
log(s0);
log(s1);
log(s2);
out+=`<g class="chart-text">
<text x="50%" y="50%" class="chart-number" id="totalValue">${s2}%</text>
<text x="50%" y="50%" class="chart-label">Total</text></g>
</svg>
`;
return out;
},

progress:function(arr){
var {data}=arr;
let step=data.length;
color=d.color(step);
out=``;
for(i in data){ val=data[i].isi;nama=data[i].nama;
out+=`<div class="progress-bar-linear">
<p class="progress-bar-text">${nama}
<span class="float_right">${val}% </span>
</p>
<div class="progress-bar">
<span data-percent="80" style="background:${color[i]}; width:${val}%;"></span>
</div>
</div>`;
}
return out;
},

icons:function(arr){
var {data}=arr;
out=`<div class="${css.gIcons}">`;
for(i in data){ nama=data[i]
out+=`<div class="${css.icons}"> ${d.svg.icon(nama)} <span>${nama}</span>  </div>`; }
out+=`</div>`;
return out;
},

card:function(arr){
log(arr)
var {data}=arr;

step=data.length;
color=d.color(step);
if(step<1) color[0]='red';
out=``;

if (step>4){ step=4;}
for(i in data){ var {nama,isi,icon,url}=data[i];
out+=`<div class="col-1-${step}" onclick="${url}" >
<div class="ag" style="background:${color[i]}" > ${d.svg.icon(icon)}
<div class="ag-menu" >
<div class="ag-title">${nama}</div>
<div class="ag-desc">${isi}  </div>
</div>
</div>
</div>`;
}
return out;
},

profile:function(arr){
  log(arr)
out=`
<div id="profile" class="row shadow">
<div id="profile" class="col-1-3">
<img id="avatar" src="${arr.avatar}" alt="user avatar" class="user-avatar img">
<span class="username" >Welcome, ${arr.username}</span>
<div class=""> ${d.view.input(arr.input)} </div>
<div class=""> ${d.view.button(arr.button)} </div>
</div>
<div id="card" class="col-2-3"> ${d.view.card(arr.card)} </div>
</div>
`;
return out;
},

view:function(arr){
out=`<div class="row shadow"> <div class=""> ${this.button(arr.button)} </div>
<div class=""> ${this.datatable(arr.datatable)} </div> </div>`;
return out;
},

add:function(arr){
out=`<div class=""> ${this.input(arr.input)} </div>
<div class=""> ${this.button(arr.button)} </div>`;
return out;
},

edit:function(arr){
out=`<div class=""> ${this.input(arr.input)} </div>
<div class=""> ${this.button(arr.button)} </div>`;
return out;
},
},

controller:{
menu:function(){ x='menu'; d.gebi('menu-left').innerHTML=d.view[x](d.model[x]);},
page:function(){ var {page}=d.model; d.gebi('content').innerHTML=d.view.page(page); },
datatable:function(){ var {datatable}=d.model; d.gebi('datatable').innerHTML=d.view.datatable(datatable); },
input:function(){ var {input}=d.model; d.gebi('input').innerHTML=d.view.input(input); },
button:function(){ var {button}=d.model; d.gebi('button').innerHTML=d.view.button(button); },
table:function(){ var {table}=d.model; d.gebi('table').innerHTML=d.view.table(table); },
open:function(){},
close:function(){ d.controller.mod(d.model.page.nama); },
el:function(id){ frm=d.gebi(id); obj={};
for ( var i=0; i < frm.elements.length; i++ ) { e=frm.elements[i]; obj[e['name']]=e['value'];}
return obj;
},
paging:function(i){
page=d.model.page.table.page;
page=parseInt(page+i);
d.model.page.table.page=page;
data=d.model.page.table.data;
d.controller.table();
arr={data:data,page:page}
d.gebi('paging').innerHTML=d.view.paging(arr);
},

rpp:function(i){d.model.page.table.rpp=i; d.controller.table();},

view:function(){d.gebi('content').innerHTML=d.view.view(d.model['view']);},
add:function(){
d.model.add.input.data=data[0];
d.gebi('content').innerHTML=d.view.add(d.model['add']);},
edit:function(i){
d.model.edit.input.data=data[i];
d.gebi('content').innerHTML=d.view.edit(d.model['edit']);
},

print:function(){window.print();},
color:function(){ arr=d.model.color.data; for (i in arr){ d.setcss(arr[i].id, arr[i].isi);}}
}, //end controller


api:{
host:'http://localhost/donat/api/database.php',
param:{t:'master_users', mod:'login'},
callback:function(json){},

req:function(param,callback){
var {host}=d.api;
apiKey='bismillah';
var req=new XMLHttpRequest();
req.open("POST", host, true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// req.setRequestHeader('Authorization', `Bearer ${apiKey}`);
req.onreadystatechange=function(){
if(req.readyState==4 && req.status==200){ callback(req.responseText);}}
req.responseType="text";
req.onprogress=function(e){if(e.lengthComputable){}};
req.onloadstart=function(e){};
req.onloadend=function(e){};
req.send(JSON.stringify(param));
},

get:function(callback){ var {t,mod}=this.param;
param={t:t,mod:mod};
if(mod!=='table'){
frm=d.controller.el('form'); id=frm.id;
if(mod=='create'){delete frm['id'];}
param={t:t,mod:mod,data:frm,id:id};
}
this.req(param,callback1);
function callback1(json){ callback(json); }

},
create:function(){this.param.mod="create";this.get(this.callback);},
read:function(id){ p=id.split('/');
this.param.t=p[0];
this.param.mod="table";
this.get(callback);
function callback(json){ res=JSON.parse(json);data=res.data;
d.model.datatable.data=res.data; d.controller[p[1]](); }
},


update:function(){this.param.mod="update";this.get(this.callback);},
delete:function(){this.param.mod="delete";this.get(this.callback);},
},

svg:{
model:{id:'svg',data:[]},

path:{
gradien:`<defs>
<linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" >
<stop stop-color="#5757D9" offset="0%"/>
<stop stop-color="#21D9F7" offset="100%"/>
</linearGradient>
</defs>`,
ktupad:`M16 3 19 6 15 10 12 7ZM8 10 11 7 15 11 12 14ZM16 10 19 7 23 11 20 14ZM8 3 11 6 7 10 4 7ZM0 10 3 7 7 11 4 14ZM8 18 11 15 15 19 12 22ZM8 11 11 14 7 18 4 15ZM16 11 19 14 15 18 12 15Z`,
filter:`M11 12 14 12 14 22 11 22ZM4 2 7 2 7 11 4 11 4 2M11 2 14 2 14 7 16 7 16 10 9 10 9 7 11 7 11 2M18 2 21 2 21 13 18 13 18 2M2 13 9 13 9 16 7 16 7 22 4 22 4 16 2 16 2 13M16 15 23 15 23 18 21 18 21 22 18 22 18 18 16 18Z`,
// filter:`M4 21 4 14M4 10 4 3M12 21 12 12M12 8 12 3M20 21 20 16M20 12 20 3M1 14 7 14M9 8 15 8M17 16 23 16`,
person:`M2 22V19A4 4 0 015 15H19A4 4 0 0122 19V22ZM7 7A4 4 0 0017 7 4 4 0 007 7`,
house:`M20 10v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10M9 22V12h6v10M2 10 12 2l10 8`,
threedots:`M10 5A1 1 0 0014 5 1 1 0 0010 5M10 12A1 1 0 0014 12 1 1 0 0010 12M10 19A1 1 0 0014 19 1 1 0 0010 19`,
menu:`M2 5 22 5 22 8 2 8ZM2 11 22 11 22 14 2 14ZM2 17 22 17 22 20 2 20Z`,
trush:`M19 6V20A2 2 0 0117 22H7A2 2 0 015 20V6M8 6V4A2 2 0 0110 2H14A2 2 0 0116 4V6M3 6 5 6 21 6M10 11 10 17M14 11 14 17`,
check:`M2 15 12 22 22 2 19 2 11 18 2 12Z`,
x:`M2 2 6 2 12 10 18 2 22 2 14 12 22 22 18 22 12 14 6 22 2 22 10 12Z`,
plus:`M2 12a10 10 0 1020 0 10 10 0 10-20 0M11 7 13 7 13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11Z`,
printer:`M6 9V2H18V9M6 18H4A2 2 0 012 16V11A2 2 0 014 9H20A2 2 0 0122 11V16A2 2 0 0120 18H18M6 14H18V22H6Z`,
pen:`M16 3 21 8 8 21 3 21 3 16 16 3`,
chart:`M2 2V22H22L22 19 5 19 5 2ZM22 5 19 11 14 3 6 18 9 18 14 8 19 16 22 11Z`,
cart:`M4 5 2 5 2 2 5 2 8 7 22 6 19 18 11 18ZM9 21A1 1 0 0013 21 1 1 0 009 21M16 21A1 1 0 0020 21 1 1 0 0016 21ZM17 15 19 9 10 10 13 15Z`,
card:`M5 16H7M2 9H22M2 5H22V19H2Z`,
envelope:`M2 8C2 7 3 6 4 6L20 6C21 6 22 7 22 8L22 20C22 21 21 22 20 22L4 22C3 22 2 21 2 20ZM22 8 12 15 2 8`,
geo:`M4 10A1 1 0 0120 10C20 17 12 22 12 22 12 22 4 17 4 10M9 10A1 1 0 0015 10 1 1 0 009 10`,
twitter:`M23 3A11 11 0 0120 4 4 4 0 0012 7V8A10 10 0 013 4S1 14 8 17A12 12 0 011 19C10 24 21 19 21 8A4.5 4.5 0 0021 7 8 8 0 0023 3Z`,
facebook:`M17 2H14A5 5 0 009 7V10H6V14H9V22H13V14H16L17 10H13V7A1 1 0 0114 6H17Z`,
whatsapp:`M20 11A8 8 0 018 18L3 21 5 15A8 8 0 014 11 1 1 0 0120 11Z`,
eye:`M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12ZM9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12`,
// qrcode:`M2 2 11 2 11 11 2 11ZM14 2 23 2 23 9 14 9ZM2 14 11 14 11 20 2 20ZM15 14 23 14 23 21 15 21Z`,
qrcode:`M2 2 8 2 8 8 2 8ZM16 2 22 2 22 8 16 8ZM2 16 8 16 8 22 2 22ZM12 12 22 12 22 22 12 22z`,
search:`M20 11A1 1 0 002 11 1 1 0 0020 11M5 11A1 1 0 0117 11 1 1 0 015 11ZM17 19 19 17 24 22 22 24Z`,
minus:`M2 12a10 10 0 1020 0 10 10 0 10-20 0M7 11 17 11 17 13 7 13Z`,
bayam:`M1 18 1 6A1 1 0 0111 6L11 13 18 13A1 1 0 0118 23L6 23 6 6A1 1 0 0116 6L16 8 18 8A1 1 0 0118 18Z`,
scan:`M2 10 2 5C2 3 3 2 5 2L10 2 10 5 6 5C5 5 5 5 5 6L5 10ZM15 2 19 2C21 2 22 3 22 5L22 10 19 10 19 6C19 5 19 5 18 5L15 5ZM22 19C22 21 21 22 19 22L15 22 15 19 18 19C19 19 19 19 19 18L19 15 22 15ZM10 22 5 22C3 22 2 21 2 19L2 15 5 15 5 18C5 19 5 19 6 19L10 19Z`,
upload:`M5 8 12 2 19 8 19 12 12 6 5 12ZM5 14 2 14 2 19C2 21 3 22 5 22L19 22C21 22 22 21 22 19L22 14 19 14 19 18C19 19 19 19 18 19L6 19C5 19 5 19 5 18Z`,
download:`M5 2 12 8 19 2 19 6 12 12 5 6ZM5 14 2 14 2 19C2 21 3 22 5 22L19 22C21 22 22 21 22 19L22 14 19 14 19 18C19 19 19 19 18 19L6 19C5 19 5 19 5 18Z`,
camera:`M22 20A2 2 0 0120 22H4A2 2 0 012 20V7A2 2 0 014 5H7L9 2H15L17 5H20A2 2 0 0122 7V20M7 14A1 1 0 0017 14 1 1 0 007 14`,
bel:`M22 17H2A3 3 0 005 14V9A7 7 0 0119 9V14A3 3 0 0022 17ZM9 19 15 19A2 2 0 019 19`,
lock:`M20 12 17 12 17 7A1 1 0 007 7L7 12 4 12C3 12 2 13 2 14L2 20C2 21 3 22 4 22L20 22C21 22 22 21 22 20L22 14C22 13 21 12 20 12ZM10 12 10 7A1 1 0 0114 7L14 12Z`,
setting:`M9 12A3 3 0 1015 12 3 3 0 109 12M21 14A1.65 1.65 0 0020 17 2 2 0 0117 20 1.65 1.65 0 0014 21 2 2 0 0110 21 1.65 1.65 0 007 20 2 2 0 014 17 1.65 1.65 0 003 14 2 2 0 013 10 1.65 1.65 0 004 7 2 2 0 017 4 1.65 1.65 0 0010 3 2 2 0 0114 3 1.65 1.65 0 0017 4 2 2 0 0120 7 1.65 1.65 0 0021 10 2 2 0 0121 14Z`,
terminal:`M5 7Q1 7 1 11L1 13Q1 17 5 17L19 17Q23 17 23 13L23 11Q23 7 19 7Z`,
process:`M1 7 1 17 23 17 23 7Z`,
decision:`M12 23 1 12 12 1 23 12Z`,
io:`M5 7 1 17 19 17 23 7Z`,
connector:`M18 12A1 1 0 006 12 1 1 0 0018 12Z`,
ellipse:`M1 12C1 22 23 22 23 12 23 2 1 2 1 12`,
calendar:`M2 5Q2 3 4 3A1 1 0 016 3L18 3A1 1 0 0120 3Q22 3 22 5L22 19Q22 22 19 22L5 22Q2 22 2 19ZM4 8 20 8 20 19A1 1 0 0119 20L5 20A1 1 0 014 19Z`,
donat:`M12 10C7 5 4 14 12 17 20 14 17 5 12 10M12 22A8 8 0 0112 2 8 8 0 0112 22Z`,
file:`M4 2 13 2 20 9 20 22 4 22ZM20 9 13 9 13 2Z`,
save:`M2 2 22 2 22 22 6 22 2 18ZM5 2 19 2 19 10 5 10ZM9 16 19 16 19 22 9 22Z`,
kinjeng:`M9 4C9 2 12 2 12 4 12 2 15 2 15 4 15 8 12 5 12 4 12 5 9 8 9 4M12 8C14 9 23 12 23 7 23 5 17 8 12 8 20 7 23 6 23 1 22-2 19 3 12 8M12 6C11 6 10 6 11 10 11 13 11 22 12 22 13 22 13 13 13 10 14 6 13 6 12 6M12 8C5 3 2-2 1 1 1 6 5 7 12 8 7 8 1 5 1 7 1 12 10 9 12 8`,


},

icon:function(id='bayam'){
var {path}=d.svg;
return `<svg class="svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
<path id="path${id}" d="${path[id]}"  /></svg>`;
},

di:function(id='bayam'){
var {path,icon}=d.svg;
for(key in path ){
list = document.getElementsByClassName("di-"+key);
if(list.length > 0){
for (var i=0 ; i<list.length; i++){ list[i].innerHTML = icon(key);}
}
}
},
},

login:{
login:function(){
data=d.getls('data');
if(data) {this.profile();
d.open('menu');
d.gebi('main').classList.remove("login");
}
else { this.signform();
d.close('menu');
d.gebi('main').classList.add("login");
}
},

signform:function(){
arr={
id:'signform',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[{id:1,nama:"Signin",icon:"person",url:"d.login.signin()"},]},}
out=`
<div id="login" class="show row login">
<div class="shadow" style="max-width:400px; padding: 20px auto; margin: 0  auto;">
<h1>Login</h1>
<div class=""> ${d.view.input(arr.input)} </div>
<div class=""> ${d.view.button(arr.button)} </div></div></div>`;
d.gebi('content').innerHTML=out;
},

signin:function(){
  email=d.gebi('email').value;
  pin=d.gebi('email').value;
param={mod:"login",data:{email:email,pin:pin}}
  d.api.req(param,callback);
  function callback(json){
res=JSON.parse(json)
log(res)
  if (res.login.length>0){
    d.setls('data',res);
    d.login.login();
  } else {

d.info('Login Gagal')

  }
    // login.app.js.login();
  }


},
signout:function(){d.remls('data');this.login();},
profile:function(){
data=JSON.parse(d.getls('data'));

log(data)
log(data.menu)
d.model.profile.card.data=data.menu;

arr=d.model.profile;
d.gebi('content').innerHTML=d.view.profile(arr);
},
},

};
var {css}=d.model;
