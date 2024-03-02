d.svg.di();

data=[
{id:1,nama:"ktupad",isi:20,icon:"ktupad",url:"mod.js?mod/load"},
{id:2,nama:"bayam",isi:30,icon:"bayam",url:"mod.js?mod/load"},
{id:3,nama:"donat",isi:50,icon:"donat",url:"mod.js?mod/load"},
];
intro={
id:`
<h2>Selamat datang di dokumentasi resmi DonatJS!</h2>
DonatJS adalah sebuah framework JavaScript yang didesain untuk memudahkan pengembangan aplikasi web dengan pendekatan MVC (Model-View-Controller). Dokumentasi ini akan membimbing Anda melalui langkah-langkah penggunaan, konfigurasi, dan fitur-fitur utama yang disediakan oleh DonatJS.
<h2>Versi yang Didukung</h2>
Saat ini, DonatJS tersedia dalam versi 1.0.0. Kami terus berusaha untuk meningkatkan dan memperbarui framework ini agar sesuai dengan kebutuhan Anda.
<h2>Tentang Aplikasi Ini</h2>
DonatJS adalah framework JavaScript yang bertujuan untuk menyediakan struktur pengembangan yang lebih terstruktur dan terorganisir dalam pembuatan aplikasi web. Dengan memisahkan aplikasi menjadi tiga komponen utama: Model, View, dan Controller, DonatJS memungkinkan Anda untuk dengan mudah mengelola logika bisnis, tampilan, dan interaksi pengguna.
<h2>Teknologi</h2>
DonatJS dibangun dengan menggunakan teknologi-teknologi berikut:
<ul>
<li><b>JavaScript:</b> Bahasa pemrograman inti yang digunakan untuk mengembangkan framework ini.</li>
<li><b>HTML: </b>Digunakan untuk merender tampilan aplikasi.</li>
<li><b>CSS: </b>Untuk mengatur tampilan dan gaya aplikasi.</li>
<li><b>MVC (Model-View-Controller):</b> Pendekatan pengembangan yang mendasari DonatJS, memisahkan aplikasi menjadi tiga komponen terpisah.</li>
</ul>
<h2>Aksesibilitas</h2>
Komitmen kami terhadap aksesibilitas adalah hal yang sangat penting. DonatJS telah dirancang dengan mempertimbangkan pedoman aksesibilitas web terbaru. Framework ini menyediakan alat dan praktik terbaik untuk membantu Anda mengembangkan aplikasi yang dapat diakses oleh semua pengguna, termasuk mereka yang memiliki tantangan aksesibilitas.

<h2>Mulai</h2>
Mulai menggunakan DonatJS sangatlah mudah. Ikuti langkah-langkah di bawah ini untuk memulai pengembangan aplikasi web dengan DonatJS.

<h2>Instal Aplikasi</h2>
Anda dapat membuat berkas HTML sebagai titik masuk untuk aplikasi Anda. Berikut adalah contoh penggunaan DonatJS dalam berkas HTML:

<br>&lt;!DOCTYPE html&gt;
<br>&lt;html&gt;
<br>&lt;head&gt;
<br>&lt;link rel="stylesheet" type="text/css" href="https://donat.id/donat/donat.css" async&gt;

<br>&lt;title&gt;Aplikasi DonatJS&lt;/title&gt;
<br>&lt;/head&gt;
<br>&lt;body&gt;
<br>&lt;div id="content"> Hello Donat &lt;/div>
<br>&lt;script src="https://donat.id/donat/donat.js"&gt;&lt;/script&gt;
<br>&lt;script&gt;
<br>&lt;!-- Tambahkan kode aplikasi Anda di sini menggunakan DonatJS --&gt;
<br>&lt;/script&gt;
<br>&lt;/body&gt;
<br>&lt;/html&gt;


<h2>Info Lebih Lanjut</h2>
Untuk informasi lebih lanjut tentang fitur-fitur, penggunaan, dan praktik terbaik DonatJS, silakan kunjungi situs web resmi DonatJS atau lihat dokumentasi lengkap.
Sekarang Anda siap untuk memulai pengembangan aplikasi web dengan DonatJS! Lihat dokumentasi lebih lanjut untuk informasi tentang penggunaan, komponen, dan fitur-fitur yang disediakan oleh DonatJS.
Jangan ragu untuk menjelajahi fitur-fitur yang ada dan mulai menciptakan pengalaman pengembangan web yang lebih terstruktur dan efisien dengan DonatJS. Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi tim dukungan kami.
Selamat mengembangkan dengan DonatJS!
<a name="fitur">
 `,
nama:"ktupad",
};

model=[
{id:1,mod:"page",induk:"content",nama:"intro",css:"row shadow",isi:''},
{id:1,mod:"page",induk:"intro",nama:"fitur",css:"row",isi:''},
{id:1,mod:"page",induk:"content",nama:"demo",css:"row",isi:''},

{id:1,mod:"div",induk:"intro",nama:"Instalasi",css:"row",isi:intro.id},

{id:1,mod:"div",induk:"fitur",nama:"nav",css:"row shadow",isi:'menu'},
{id:1,mod:"div",induk:"fitur",nama:"card",css:"row shadow",isi:'div'},
{id:1,mod:"div",induk:"fitur",nama:"pie",css:"row shadow ",isi:'div'},
{id:1,mod:"div",induk:"fitur",nama:"progress",css:"row shadow",isi:'div'},
{id:1,mod:"div",induk:"fitur",nama:"datatable",css:"row shadow",isi:'datatable'},
{id:1,mod:"div",induk:"fitur",nama:"inputs",css:"row shadow",isi:'inputs'},
{id:1,mod:"div",induk:"fitur",nama:"button",css:"row shadow",isi:'button'},
{id:1,mod:"div",induk:"fitur",nama:"grid",css:"row shadow",isi:'grid'},
{id:1,mod:"div",induk:"fitur",nama:"icons",css:"row shadow",isi:'icons'},





// demo
{id:1,mod:"div",induk:"demo",nama:"profile",css:"row",isi:''},

{id:1,mod:"div",induk:"demo",nama:"button",css:"row shadow",isi:'button'},
{id:1,mod:"div",induk:"demo",nama:"datatable",css:"row shadow",isi:'datatable'},
{id:1,mod:"div",induk:"demo",nama:"inputs",css:"row shadow",isi:'inputs'},

 // mod

 {id:1,mod:"profile",induk:"profile",nama:"profiles",
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


 {id:1,mod:"card",induk:"card",nama:"card",css:"row shadow",data:data},

{id:1,mod:"pie",induk:"pie",nama:"pie",css:"row shadow",data:data},
{id:1,mod:"progress",induk:"progress",nama:"progress",css:"row shadow",data:data},
{id:1,mod:"button",induk:"button",nama:"button",css:"row shadow",data:data},
{id:1,mod:"grid",induk:"grid",nama:"grid",css:"gGrid",data:[
  {nama:"1",isi:"row",css:"row"},
  {nama:"2",isi:"col-1-2",css:"col-1-2"},
  {nama:"3",isi:"col-1-2",css:"col-1-2"},
  {nama:"3",isi:"col-1-3",css:"col-1-3"},
  {nama:"3",isi:"col-2-3",css:"col-2-3"},
  {nama:"3",isi:"col-1-4",css:"col-1-4"},
  {nama:"3",isi:"col-3-4",css:"col-3-4"},
  {nama:"3",isi:"col-1-5",css:"col-1-5"},
  {nama:"3",isi:"col-4-5",css:"col-4-5"},]},
{id:6,mod:"input",induk:"inputs",nama:"input",isi:"input",css:"row shadow",data:data[0],tipe:[]},
{id:1,mod:"datatable",induk:"datatable",nama:"datatable",css:"row shadow",data:data,rpp:5,page:1,fld:'id,nama'},
  {id:1,mod:"icons",induk:"icons",nama:"icons",css:"",data:[
    'save','share','category','mark','link','filter','person','house','threedots','menu','trush','check','x',
    'plus','printer','pen','chart','cart','card','envelope','geo','twitter','google',
    'facebook','whatsapp','eye','qrcode','search','minus','bayam','scan',
    'upload','download','camera','bel','lock','setting','terminal','process',
    'decision','io','connector','ellipse','calendar','donat','ktupad','wedus',
  ]},


  {id:1,mod:"menu",induk:"nav",nama:"nav",data:data,},





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

mod='page,datatable,card,pie,progress,button,icons,menu,grid,input,profile'.split(',');
for(i in mod){getObj(mod[i]);}

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

getObj=function(id){
  // log(inc)
const n0 = model.filter(e => e.mod ===  id);
if(n0.length>0) {
for( i in n0){ n1=n0[i];
  log(n1)
if (page=='fitur'){nah=getDoc(n1);} else { nah=d.view[id](n1); }
log(page)
log(n1)

if(inc.includes(n1.induk)) {
  // d.gebi(nod.induk).innerHTML=getDoc(nod,d.view.div(nod));
  d.gebi(n1.induk).innerHTML=nah;
}

}
}
};

getDoc=function(nod){
content=JSON.stringify(nod);
return `
<div class='doc'>
<div class='row'> <b>Nama: </b> ${nod.mod} </div>
<hr>
<div class='col-1-2'>
<div class='row'> <b>HTML: </b> <br/>
&lt;div class='row' id='${nod.induk}'>  &lt;/div>
</div>
<div class='row'> <b>JS: </b><br/>
${nod.nama} = ${content}; <br/>
document.getElementById('${nod.induk}').innerHTML=d.view.${nod.mod}(${nod.nama});
</div>
</div>
<div class='col-1-2'><div class='row'> <b>Result: </b> <br/>${d.view[nod.mod](nod)}  </div></div>
</div>
`;
}

d.open('menu');
// d.model.menu=menu;

// menu=[
// {id:1,mod:"menu",induk:"menu-left",nama:"menuleft",data:[
// {id:1,induk:"menuleft",nama:"Intro",url:"intro",icon:"house"},
// {id:2,induk:"menuleft",nama:"Fitur",url:"fitur",icon:"qrcode"},
// {id:3,induk:"menuleft",nama:"Demo",url:"demo",icon:"setting"},],},
// ]
//
// d.gebi('menu-left').innerHTML=d.view.menu(menu[0]);

getPage('intro');
