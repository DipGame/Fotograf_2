!function(){if(document.querySelector(".portfolio")){const i=document.querySelector(".portfolio"),e=i.querySelectorAll("li"),s=i.querySelector(".grid__img").querySelectorAll("img");e.forEach((i=>{i.addEventListener("click",(()=>{e.forEach((i=>{i.classList.contains("filter__active")&&i.classList.remove("filter__active")})),i.classList.add("filter__active"),0==i.id?s.forEach((i=>{i.classList.contains("invise")&&i.classList.remove("invise")})):(s.forEach((i=>{i.classList.contains("invise")||i.classList.add("invise")})),s.forEach((e=>{e.id==i.id&&e.classList.remove("invise")})))}))}))}}();