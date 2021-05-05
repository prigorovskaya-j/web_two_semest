function outputInteres(id, title, text, image, name_image, ...params){
        document.write(
            `<div class="interesting" id="${id}">
            <div class="image">
            <img title="${name_image}" src="${image}">
            </div>
            <div class="text-wrapper">
            <p class="bold">${title}</p>
            <p>
            ${text}
            <ul>`
        );
     
        for (let item of params) {
            document.write(`<li>${item}</li>`);
        }
     
        document.write(`</ul></p></div></div>`);     
}

function outputPhotos() {
    let foto = [];
    let title = [];
    const n = 15;
 
    for (let i = 0; i < 5; i++) {
        foto[i] = "images/"+(i + 1) + ".jpg";
    }
 
    for (let i = 0; i < 10; i++) {
        title[i] = "Рисунок" + (i + 1);
    }
 
    for (let i = 0; i < n; i++) {
        document.write(`<figure><img title="Рисунок ` + (i + 1) + `" src="images/` + (i + 1) + `.jpg">
    <figcaption>Рисунок ${i+1}</figcaption></figure>`);
    }
    return foto;
}
var res,x;
  
 function check_question2(){
    res=document.formStudy.question2.value;
    res=res-0;
    if(res!=NaN && Number.isInteger(res))
        return true; 
   
    alert("Введите целое число ");
    formStudy.question2.focus(); 
    return false; 
 }

 function check_submit(){
   
    if(!check_question2()){
        return false;
    } 
    return true;
 }

 function check_submit_cont(){
    if(!focusFio()){return false;}
    if(!focusCom()){return false;}
    if(!focusMail()){return false;}
    if(!focusTel()){return false;}
}

function focusCom(x){
  var com=document.formContact.comment.value;
  var element = document.getElementById("pCom");
      
  if(com!=""){
    x.style.backgroundColor="green";
    element.innerHTML = "";
    return true;
  }
  else{
    x.style.backgroundColor="red";
    element.innerHTML = "Заполните комментарий";
    focus();
    return false;
  }
}
function focusMail(x){
  var mail=document.formContact.Mail.value;
  var element = document.getElementById("pMail");
  if(mail!=""){
    x.style.backgroundColor="green";
    element.innerHTML = "";
    return true;
  }
  else{
    x.style.backgroundColor="red";
    element.innerHTML = "Заполните email";
    return false;
  }
}

function focusTel(x){
  var phone=document.formContact.tel.value;
  var element = document.getElementById("pTel");
  let array = phone.split("");
  if((array.length==10 || array.length==11 || array.length==12)&&(array[0]=='+')&&(array[1]=='3' || array[1]=='7')){
    x.style.backgroundColor="green";
    element.innerHTML = "";
    return true;
  } else {
    x.style.backgroundColor="red";
    element.innerHTML = "Формат телефона не верный";
    return false;
  }
}

function focusFio(x){
  var fio = document.formContact.formFIO.value;
  var element = document.getElementById("pFio");
  
   let array = fio.split(" ");
   if(array.length==3){
     for(i=0; i<array.length; i++){
       if(array[i]!=""){
         x.style.backgroundColor="green";
         element.innerHTML = "";
         return true;
       }
       else{
          x.style.backgroundColor="red";
          element.innerHTML = "Формат ФИО не верный";
          return false;
        }   
     }
   }
   else {
    x.style.backgroundColor="red";
    element.innerHTML = "Формат ФИО не верный";
    return false;
   }
    
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
}
}

//ДМГ день недели
function currentDate() {
  var element = document.getElementById("DDay");
  var t=new Date();
  var now = new Date().toLocaleDateString();
  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  d=t.getDay();
  element.innerText ="Дата: "+now+"  "+days[d];
  setTimeout("currentDate()", 1000);
}

