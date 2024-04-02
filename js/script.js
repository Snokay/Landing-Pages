document.addEventListener("DOMContentLoaded", function() {

let plan1 = document.getElementById("plan1");
let plan2 = document.getElementById("plan2");
let plan3 = document.getElementById("plan3");

plan1.addEventListener("mouseover", () => {

    plan1.classList.add('active');
    plan2.classList.remove('active');
});
plan1.addEventListener("mouseout", () => {

    plan2.classList.add('active');
    plan1.classList.remove('active');
});

plan3.addEventListener("mouseover", () => {

    plan3.classList.add('active');
    plan2.classList.remove('active');
});
plan3.addEventListener("mouseout", () => {

    plan2.classList.add('active');
    plan3.classList.remove('active');
});

let client1 = document.getElementById("client1");
let client2 = document.getElementById("client2");
let client3 = document.getElementById("client3");
let client4 = document.getElementById("client4");
let client5 = document.getElementById("client5");

client1.addEventListener("mouseover", () => {

    client1.classList.add('a-client');
});
client1.addEventListener("mouseout", () => {

    client1.classList.remove('a-client');
});

client2.addEventListener("mouseover", () => {

    client2.classList.add('a-client');
});
client2.addEventListener("mouseout", () => {

    client2.classList.remove('a-client');
});

client3.addEventListener("mouseover", () => {

    client3.classList.add('a-client');
});
client3.addEventListener("mouseout", () => {

    client3.classList.remove('a-client');
});

client4.addEventListener("mouseover", () => {

    client4.classList.add('a-client');
});
client4.addEventListener("mouseout", () => {

    client4.classList.remove('a-client');
});

client5.addEventListener("mouseover", () => {

    client5.classList.add('a-client');
});
client5.addEventListener("mouseout", () => {

    client5.classList.remove('a-client');
});

let burger = document.getElementById("burger")
var open = false

burger.addEventListener("click", opensidemenu)

function opensidemenu(){
   if (open){
      document.getElementById("nav-links").style.transform="translate(100%)"
      burger.style.position="absolute"
      open = false
   }
   else{
      document.getElementById("nav-links").style.transform="translate(0)"
      burger.style.position="fixed"
      open = true
   }
}

let setting = document.getElementById("set-btn")
let setmenu = document.getElementById("set-menu")
var hide = true

setting.addEventListener("click", () => {
    console.log("test")
    if(hide == true){
        setmenu.classList.remove("hidden")
        setmenu.classList.add("set-menu")
        hide = false
    }else{
        setmenu.classList.add("hidden")
        setmenu.classList.remove("set-menu")
        hide = true
    }
});

let dark = document.getElementById("dark")
let light = document.getElementById("light")
let rgb = document.getElementById("rgb")

dark.addEventListener("click", () => {
    document.body.classList.remove("filter-light")
    document.body.classList.remove("filter-rgb")
    document.body.classList.add("filter-dark")
});

light.addEventListener("click", () => {
    document.body.classList.remove("filter-dark")
    document.body.classList.remove("filter-rgb")
});

rgb.addEventListener("click", () => {
    document.body.classList.remove("filter-light")
    document.body.classList.remove("filter-dark")
    document.body.classList.add("filter-rgb")
});

});