(function(){
    const overlay = document.querySelector(".overlay");
    const drDown = document.querySelector(".dr-down");
    const drItems = document.querySelectorAll(".dr-down__item");
    const icnMenu = document.querySelector(".menu__icn");
    const icnX = document.querySelector(".x");
    const greetPage = document.querySelector(".greet");
    greetPage.style.height = `${window.innerHeight - 54}px`;
    function openAndClose(){
        drDown.classList.toggle("hidden");
        drDown.classList.toggle("solid");
        overlay.classList.toggle("hidden");
        icnMenu.classList.toggle("hidden");
        icnX.classList.toggle("hidden");
    }
    icnMenu.addEventListener("click",openAndClose);
    icnX.addEventListener("click",openAndClose);
    overlay.addEventListener("click", openAndClose);
    for(let drItem of drItems) drItem.addEventListener("click",openAndClose);
    document.addEventListener("scroll",function(){
        if(!drDown.classList.contains("hidden")){
            openAndClose();
        }
    });
    window.addEventListener("resize",function(){
        greetPage.style.height = `${window.innerHeight - 54}px`;
    })
})();


// const cart = document.querySelector(".cart");

// cart.addEventListener("hallo",function(e){
//     console.log(e);
// })
// cart.addEventListener("click", function(){
//     cart.dispatchEvent(new Event("hallo"));
// })

