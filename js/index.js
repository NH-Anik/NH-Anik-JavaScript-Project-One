var number=document.querySelector(".number");

document.querySelector("#btn1").addEventListener("click",btnf);

document.querySelector("#btn2").addEventListener("click",resetbtn2);

var wrong=document.querySelector(".wrong");

function resetbtn2(e){
    output.innerHTML="";
    number.value="";
    wrong.innerHTML="";
}

// condition
function btnf(e){
  // e.preventDefault();
  wrong.innerHTML="";
  var star="";
  if(number.value<=30){
    for(var i=0; i<=number.value;i++){   
        for (var j = 1; j <= i; j++) {
            star += '*';
        }
        star += '</br>';
    }
    var output=document.querySelector("#output");
    output.innerHTML=star;
    name.value="";
  }else{
    wrong.innerHTML="pleace follow instruction ->>"+"  "+number.value+"<<-Not allowed";
  }
  number.value="";
  
  return 0;
}


