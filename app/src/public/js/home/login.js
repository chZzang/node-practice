"use strict";

const id = document.querySelector('#id'),
pw = document.querySelector('#pw'),
loginBtn = document.querySelector('button');

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
  .then(console.log)

}

loginBtn.addEventListener("click", login);
