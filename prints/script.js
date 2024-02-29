function PrintElem() { window.print(); return true;}
function uc(string){ return string.charAt(0).toUpperCase() + string.slice(1); }
function rs(string){ return string.replace(/_/g, ' ') }

function headers(arr){
out=``;
for(key in arr) { fitem=arr[key];
out+=`<div class="col-1-2" >
<label for="${fitem}" id="la-${fitem}">${uc(key)}: </label> <span> ${fitem}</span>
</div>
`;
}
return out;

}

function table(arr){
page=1;
rpp=100;
var al=arr.length;
var	col=arr[0];
out  = '';
out += '<div class="dd" ><table>';
out += '<thead><tr>';
outf  = '<tfoot><tr><td></td>';
for (key in col){ outf += '<td id="f'+ key +'"></td>'; out  += '<th>'+ uc(rs(key)) +'</th>'; }
out += '</tr></thead>';
out += '<tbody>';
for (var i = (page-1) * rpp; i < (page * rpp) && i < al; i++) {cols=arr[i];
out += '<tr>';
for (key in cols) {

if(key=='pecahan' || key=='jumlah' ) {

var str=rupiah(cols[key]);
}
else{
var str=cols[key];

}
out += '<td id="'+str.id+'" > '+ str +'</td>';
}
out += '</tr>';
}

out += '</tbody>';
out += '</table></div>';
return out;
}



function tables(){
var{id,fld,data}=this;
fld=fld.split(',');

out=`<div class="table">
<table id="table1">
<tr>
<td colspan=${(fld.length+1)}><b>${id}</b></td>
</tr>`;

out += `<tr><td >Aksi</td>`;
for(i in fld){
out += `<td>${fld[i]}</td>`;
}
out += `</tr>`;
for(i in data){ col=data[i];
out += `<tr>`;
out += `<td><div class="aksi" >
<button onClick="j.${m}.add();"> ${b[x].svg.js.icon('plus')} </button>
<button onClick="j.${m}.rem(${i});"> ${b[x].svg.js.icon('trush')} </button>
`;
// <button onClick="j.${m}.upd(${i});"> ${b[x].svg.js.icon('pen')} </button> </div> </td>
for(key in col){
// out += `<td><input type='text' aria-label="respon" id="${key}-${i}" name="${m}-${key}" value="${col[key]}"></td>`;
out+= `<td>`;
out+=this.tipe(induk,key,col[key]);
out+=`</td>`;
}


out += `</tr>`;
}

out+=`</table></div>`;

return out;

};



// const rupiah = (number)=>{
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR"
//     }).format(number);
//   }

// rupiah(20000) // "Rp 20.000,00"
