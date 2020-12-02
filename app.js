
function add() {
       var a = document.getElementById("add").stepUp(1)
       var Pri = document.getElementById("addm").stepUp(100)
       console.log({Pri:addm.value});
    }
    function sub() {
        var a = document.getElementById("add").stepDown(1);
        var Pri = document.getElementById("addm").stepDown(100)
        console.log({Pri:addm.value});
    }
    function but(){
        var b = document.getElementById("hhh")
        b.innerHTML=addm.value
        console.log({Pri:addm.value});
 }

//  22222

    function a(){
       var xyz =document.getElementById("xyz").stepUp(1)
       var fin =document.getElementById("fina").stepUp(500)
     }
    function b(){
       var xyz =document.getElementById("xyz").stepDown(1)
       var fin =document.getElementById("fina").stepDown(500)
    }

   function cheak(){
       var chek= document.getElementById("chek")
       chek.innerHTML=fina.value
   }
// fffffffff
   function final(){
       var mm = document.getElementById("final")
       mm.innerHTML=+fina.value + +addm.value
   }

// navvvvvvvv
// function myAccFunc() {
//     var x = document.getElementById("demoAcc");
//     if (x.className.indexOf("w3-show") == -1) {
//       x.className += " w3-show";
//       x.previousElementSibling.className += " w3-green";
//     } else { 
//       x.className = x.className.replace(" w3-show", "");
//       x.previousElementSibling.className = 
//       x.previousElementSibling.className.replace(" w3-green", "");
//     }
//   }
  
//   function myDropFunc() {
//     var x = document.getElementById("demoDrop");
//     if (x.className.indexOf("w3-show") == -1) {
//       x.className += " w3-show";
//       x.previousElementSibling.className += " w3-green";
//     } else { 
//       x.className = x.className.replace(" w3-show", "");
//       x.previousElementSibling.className = 
//       x.previousElementSibling.className.replace(" w3-green", "");
//     }
//   }