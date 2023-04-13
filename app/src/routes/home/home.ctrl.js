"use strict";


const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
}

const user = {
  id:["seo", "chang", "hyun"],
  pw:["123","1234","12345"],
};

const process = {
  login : (req, res) => {
    const id=req.body.id;
    const pw=req.body.pw;

    if(user.id.includes(id)){
      const idx = user.id.indexOf(id);
      if(user.pw[idx]===pw){
        return res.json({
          success:true,
        });
      }
    }

    return res.json({
      success:false,
      msg:"로그인에 실패했습니다.",
    });

  },
}

module.exports = {
  output,
  process,
};

