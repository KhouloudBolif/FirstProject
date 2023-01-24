let grpa =document.getElementById('grp a');
let groupa=document.getElementById('groupe a')
let grpb =document.getElementById('grp b');
let groupb=document.getElementById('groupe b');
let grpc =document.getElementById('grp c');
let groupc=document.getElementById('groupe c')
let grpd =document.getElementById('grp d');
let groupd=document.getElementById('groupe d');
let volet2=document.getElementById('volet2');
let groupes=document.getElementById('groupes');
let acc=document.getElementById('acc');
let volet3=document.getElementById('volet3');
let Volet4=document.getElementById('volet4');
let tableau1=document.getElementById('tabmaroc');
let tableau2=document.getElementById('tabcanada');
let tableau3=document.getElementById('tabbelgique');
let tableau4=document.getElementById('tabcroatie');
let actu=document.getElementById('actu');
let vol5=document.getElementById('vol5');
let background=document.getElementById('background');
let hkm=document.getElementById('ft2');
let bn=document.getElementById('ft1');
let mz=document.getElementById('ft3');
let nh=document.getElementById('ft8');
let ss=document.getElementById('ft6');
let nf=document.getElementById('ft5');
let ns=document.getElementById('ft19');
let hz=document.getElementById('ft7');
let mr=document.getElementById('ft17');
let tg=document.getElementById('ft15');
let cl5=document.getElementById('cl5');
let pic=document.getElementById('bg');
let tabb=document.getElementById("tabb");

let gr=document.getElementById("gr");
let mj=document.getElementById("mj");
let buts=document.getElementById("buts");
let dp=document.getElementById("dp");
let pa=document.getElementById("pa");
let arr=document.getElementById("arr");
// formulaire d'ajoute 
tabb.style.display='none';

volet3.style.display='none';
//function de accueil

 acc.onclick=function(){
  volet2.style.display='none';
  volet3.style.display='none';
  Volet4.style.display='none';
  vol5.style.display='none';
  pic.style.display='none';
  background.style.display='block';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  tabb.style.display='none';
}
//function des groupes
volet2.style.display='none';

function a(){
   pic.style.display='block';
  background.style.display='none';
    volet2.style.display='block';
    grpa.style.display='block';
    grpb.style.display='none';
    grpc.style.display='none';
    grpd.style.display='none';
    hkm.style.display='none';
    bn.style.display='none';
    mz.style.display='none';
    nh.style.display='none';
    ss.style.display='none';
    nf.style.display='none';
    ns.style.display='none';
    hz.style.display='none';
    mr.style.display='none';
    tg.style.display='none';
    
}
function b(){
  pic.style.display='block';
  background.style.display='none';
    volet2.style.display='block';
    grpa.style.display='none';
    grpb.style.display='block';
    grpc.style.display='none';
    grpd.style.display='none';
    hkm.style.display='none';
    bn.style.display='none';
    mz.style.display='none';
    nh.style.display='none';
    ss.style.display='none';
    nf.style.display='none';
    ns.style.display='none';
    hz.style.display='none';
    mr.style.display='none';
    tg.style.display='none';
  
}
//------------------------Volet 3-/ volet4-----------------------
 function maroc(){
  background.style.display='none';
   let maroc=document.getElementById('maroc');
   let canada=document.getElementById('canada');
   let belgique=document.getElementById('belgique');
   let croatie=document.getElementById('croatie');
   volet3.style.display='block';
   maroc.style.display='block';
   canada.style.display='none';
    belgique.style.display='none';
    croatie.style.display='none';
    /*affichage de tableau maroc */ 
    Volet4.style.display='block';
    tableau1.style.display='block';
    tableau2.style.display='none';
    tableau3.style.display='none';
    hkm.style.display='none';
    bn.style.display='none';
    mz.style.display='none';
    nh.style.display='none';
    ss.style.display='none';
    nf.style.display='none';
    ns.style.display='none';
    hz.style.display='none';
    mr.style.display='none';
    tg.style.display='none';
    pic.style.display='none';
 }
 function canada(){
  background.style.display='none';
    let maroc=document.getElementById('maroc');
    let canada=document.getElementById('canada');
    let belgique=document.getElementById('belgique');
    let croatie=document.getElementById('croatie');
    maroc.style.display='none';
     canada.style.display='block';
     belgique.style.display='none';
     croatie.style.display='none';
      /*affichage de tableau canada */ 
     Volet4.style.display='block';
     tableau2.style.display='block';
     tableau1.style.display='none';
     tableau3.style.display='none';
     tableau4.style.display='none';
     hkm.style.display='none';
     bn.style.display='none';
     mz.style.display='none';
     nh.style.display='none';
     ss.style.display='none';
     nf.style.display='none';
     ns.style.display='none';
     hz.style.display='none';
     mr.style.display='none';
     tg.style.display='none';
     pic.style.display='none';
  }
 function belgique(){
  background.style.display='none';
    let maroc=document.getElementById('maroc');
    let canada=document.getElementById('canada');
    let belgique=document.getElementById('belgique');
    let croatie=document.getElementById('croatie');
    maroc.style.display='none';
     canada.style.display='none';
     belgique.style.display='block';
     croatie.style.display='none';
      /*affichage de tableau belgique */ 
    Volet4.style.display='block';
    tableau3.style.display='block';
    tableau1.style.display='none';
    tableau2.style.display='none';
    tableau4.style.display='none';
    hkm.style.display='none';
    bn.style.display='none';
    mz.style.display='none';
    nh.style.display='none';
    ss.style.display='none';
    nf.style.display='none';
    ns.style.display='none';
    hz.style.display='none';
    mr.style.display='none';
    tg.style.display='none';
    pic.style.display='none';
  }
  
  function croatie(){
    background.style.display='none';
    let maroc=document.getElementById('maroc');
    let canada=document.getElementById('canada');
    let belgique=document.getElementById('belgique');
    let croatie=document.getElementById('croatie');
    maroc.style.display='none';
     canada.style.display='none';
     belgique.style.display='none';
     croatie.style.display='block';
      /*affichage de tableau croatie */ 
     Volet4.style.display='block'; 
     tableau1.style.display='none';
      tableau4.style.display='block';
     tableau2.style.display='none';
     tableau3.style.display='none';
     hkm.style.display='none';
     bn.style.display='none';
     mz.style.display='none';
     nh.style.display='none';
     ss.style.display='none';
     nf.style.display='none';
     ns.style.display='none';
     hz.style.display='none';
     mr.style.display='none';
     tg.style.display='none';
     pic.style.display='none';
  }
// actualite

function actualite(){
  background.style.display='none';
vol5.style.display='block';
hkm.style.display='none';
bn.style.display='none';
mz.style.display='none';
nh.style.display='none';
ss.style.display='none';
nf.style.display='none';
ns.style.display='none';
hz.style.display='none';
mr.style.display='none';
tg.style.display='none';
cl5.style.display='none';
pic.style.display='block';

}
//fiche technique des joueur 
function ft2(){
  Volet4.style.display='none';
  hkm.style.display='block';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
  

}
function ft1(){
  Volet4.style.display='none';
  bn.style.display='block';
  hkm.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}

function ft3(){
  Volet4.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='block';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}
function ft8(){
  Volet4.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='block';
  ss.style.display='none';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}
function ft6(){
  Volet4.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='block';
  nf.style.display='none';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}
function ft5(){
  Volet4.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='block';
  ns.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}
function ft19(){
  Volet4.style.display='none';
  ns.style.display='block';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}
function ft7(){
  Volet4.style.display='none';
  ns.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  hz.style.display='block';
  mr.style.display='none';
  tg.style.display='none';
  pic.style.display='none';
}

function ft17(){ 
  Volet4.style.display='none';
  ns.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  hz.style.display='none';
  mr.style.display='block';
  tg.style.display='none';
  pic.style.display='none';
}
function ft15(){
  Volet4.style.display='none';
  ns.style.display='none';
  hkm.style.display='none';
  bn.style.display='none';
  mz.style.display='none';
  nh.style.display='none';
  ss.style.display='none';
  nf.style.display='none';
  hz.style.display='none';
  mr.style.display='none';
  tg.style.display='block';
  pic.style.display='none';
}

// clasement
function cls5(){
  cl5.style.display='block';
  vol5.style.display='none';

}
//supprimer
function supprimer(ele){
var i=ele.parentNode.parentNode.rowIndex;
document.getElementById("myTable").deleteRow(i);
}


//button ajouter
btn.onclick=function(){

  tabb.style.display="block"

}
//ajouter dans le tableau 
function Ajouter(){
  var fpos=document.getElementById('gr').value ;
  var fmj=document.getElementById('mj').value ;
  var fbuts=document.getElementById('buts').value ;
 var fdp=document.getElementById('dp').value ;
 var fpa=document.getElementById('pa').value ;
 var farr=document.getElementById('arr').value ;
 
 var table=document.getElementById('myTable');
 var newRow=table.insertRow(table.length);
 var cell1=newRow.insertCell(0);
 var cell2=newRow.insertCell(1);
 var cell3=newRow.insertCell(2);
 var cell4=newRow.insertCell(3);
 var cell5=newRow.insertCell(4);
 var cell6=newRow.insertCell(5);
 var cell7=newRow.insertCell(6);

cell1.innerHTML=fpos;
cell2.innerHTML =fmj;
cell3.innerHTML=fbuts;
cell4.innerHTML=fdp;
cell5.innerHTML=fpa;
cell6.innerHTML=farr;

cell7.innerHTML='<button>modifier</button> <button>supprimer</button>'
selectedRowToInput();
}

//modifier dans le tableau
 
  var rIndex,table =document.getElementById('myTable');
  for (var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick=function(){
      rIndex=this.rowIndex;
      console.log(rIndex);
      document.getElementById('gr').value = this.cells[0].innerHTML;
      document.getElementById('mj').value = this.cells[1].innerHTML;
      document.getElementById('buts').value = this.cells[2].innerHTML;
      document.getElementById('dp').value = this.cells[3].innerHTML;
      document.getElementById('pa').value = this.cells[4].innerHTML;
      document.getElementById('arr').value = this.cells[5].innerHTML;
    };
  }

 
//selectedRowToInput();
function modifier(){
  
 table.rows[rIndex].cells[0].innerHTML=document.getElementById('gr').value;
 table.rows[rIndex].cells[1].innerHTM =document.getElementById('mj').value;
 table.rows[rIndex].cells[2].innerHTML= document.getElementById('buts').value;
 table.rows[rIndex].cells[3].innerHTML=document.getElementById('dp').value;
 table.rows[rIndex].cells[4].innerHTML=document.getElementById('pa').value;
 table.rows[rIndex].cells[5].innerHTML=document.getElementById('arr').value;
}