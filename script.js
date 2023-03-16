 function validate1(){
 let mail = document.getElementById('input1').value.trim();

 let btn

 if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
    alert("enter proper email id");
    
    btn = false
 }else{
    alert('successfully Added')
    document.getElementById('input1').value = "";
 }

 return btn;

}

///////////////////////////////////////////////////////




function validate2(){
    let mail = document.getElementById('input2').value.trim();
   
    let btn
   
    if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
       alert("enter proper email id");
       
       btn = false
    }else{
       alert('successfully Added')
       document.getElementById('input2').value = "";
    }
   
    return btn;
   
   }




/////////// get Start Button hover effect /////////////

let button1 = document.getElementById("get-str-btn1");


button1.addEventListener("mouseover", function() {
  button1.style.backgroundColor = "#C2351B";
});


button1.addEventListener("mouseout", function() {
  button1.style.backgroundColor = "";
});

/////////// second btn hover ///////////

let button2 = document.getElementById("get-str-btn2");


button2.addEventListener("mouseover", function() {
  button2.style.backgroundColor = "#C2351B";
});


button2.addEventListener("mouseout", function() {
  button2.style.backgroundColor = "";
});