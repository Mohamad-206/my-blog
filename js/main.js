// All vars
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const border = document.querySelector(".border");
const border_span = document.querySelector(".border-span") ;
const a = document.querySelectorAll("a");
const bars = document.querySelector(".bars");
const ul = document.querySelector("header ul")
const header = document.querySelector("header");
const li = document.querySelectorAll("header ul li");
const main = document.querySelector("main");
const info = document.querySelector(".info")
const img = document.querySelector("main img")
const h1 = document.querySelector("h1")
const select$lang = document.getElementById("select-lang")
const options = document.querySelectorAll("select option")
const span = document.querySelector(".barmaja")
const p = document.querySelector(".info p")

// url of ar.json

const url = 'js/Ar.json'

 

// onclick on moon

moon.addEventListener("click",(e)=> {
    border.style.backgroundColor =  "#00abdf7a";
    border_span.style.backgroundColor="#00abfd";
     document.body.style.backgroundColor = "#172028"
     border_span.classList.add("active")
     main.style.color = "#fff"
     ul.classList.add("dark")
     li.forEach((li)=> {
        li.style.borderBottom = "none";
     })
a.forEach((a)=> {
    a.style.color = "#fff";
})     
info.style.color = "#fff";
h1.style.color = "#fff";
select$lang.style.backgroundColor = "rgb(23, 32, 40)"
select$lang.style.color = "#fff"
})

// on click on sun

sun.addEventListener("click",(e)=> {
    border.style.backgroundColor =  "#f9d81c46";
     border_span.style.backgroundColor = "#f9d71c";
     border_span.classList.remove("active")
     document.body.style.backgroundColor = "#f6f6f6"
     ul.classList.remove("dark")

     a.forEach((a)=> {
        a.style.color = "#2c3e50"
    }) 
    h1.style.color = "#2c3e50"
    info.style.color = "#2c3e50"
    select$lang.style.backgroundColor = "#f6f6f6"
select$lang.style.color = "#2c3e50"
})

// settings bars

bars.addEventListener("click",(e)=> {
ul.classList.toggle('active')

})

// add active class on img and info 

window.onload = function() {
    info.classList.add("active");
    img.classList.add("active")
}

// set the event of select lang

select$lang.addEventListener("change",()=> {
         // check if the option value === select value
  options.forEach((options)=> {
    if (options.value === select$lang.value) {
      

        // check if the option value === Ar 
        if ( select$lang.value === "Ar")  {
            border_span.classList.remove("active")
            border_span.classList.add("activeT")
            sun.style.order = "2"
            moon.style.order = "1"
            document.body.setAttribute("dir","rtl")
            async function getAr() {
                let data = await fetch(url)
                let respons = await data.json();
                console.log(respons);
                 a[1].innerHTML = respons[0].a_1
                 a[2].innerHTML = respons[0].a_2
                 a[3].innerHTML = respons[0].a_3
                 a[4].innerHTML = respons[0].a_4
                 a[5].innerHTML = respons[0].a_5
                 h1.innerHTML =`${respons[0].h1} <span class="barmaja">${ respons[0].span}</span>` 
                  p.innerHTML = respons[0].main
            }  
            getAr()
            }
        else if ( select$lang.value === "En") {
            moon.style.order = "2"
            sun.style.order = "1"
            border_span.classList.add("active")
border_span.classList.remove("activeT")
            document.body.setAttribute("dir","ltr")
            async function getAr() {
                let data = await fetch(url)
                let respons = await data.json();
                console.log(respons);
                a[1].innerHTML = respons[1].a_1
                a[2].innerHTML = respons[1].a_2
                a[3].innerHTML = respons[1].a_3
                a[4].innerHTML = respons[1].a_4
                a[5].innerHTML = respons[1].a_5
                h1.innerHTML =`Welcome to <span class="barmaja"> barmaja </span> blog` 

                p.innerHTML = respons[1].main
            }  
            getAr()
            
            

          };
      };
  })


})
