"use strict";

const id = document.querySelector('#id'),
name = document.querySelector('#name'),
pw = document.querySelector('#pw'),
confirmPw = document.querySelector('#confirm-pw'),
registerBtn = document.querySelector('#button');

const register = () => {
  const req ={
    id : id.value,
    name : name.value,
    pw : pw.value,
    confirmPw : confirmPw.value,
  };
  console.log(req);
  
  fetch("/register", { 
    method : "POST",
    headers : {
      "content-type" : "application/json",
    },
    body : JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) =>{
      if(res.success){
        location.href ="/login";
      }else{
        alert(res.msg);
      }
  })
  .catch((err) => {
    console.error("회원가입 중 에러 발생");
  })
};

registerBtn.addEventListener("click", register);
