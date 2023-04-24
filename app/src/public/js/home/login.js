"use strict";

const id = document.querySelector('#id'),
pw = document.querySelector('#pw'),
loginBtn = document.querySelector('#button');

const login = () => {
  const req ={
    id : id.value,
    pw : pw.value,
  };
  
  fetch("/login", { 
    method : "POST",
    headers : {
      "content-type" : "application/json",
    },
    body : JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) =>{
      if(res.success){
        location.href ="/";
      }else{
        alert(res.msg);
      }
  })
.catch((err) => {
  console.error("로그인 중 에러 발생");
})
};

loginBtn.addEventListener("click", login);
