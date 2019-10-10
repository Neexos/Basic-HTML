const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const liens = document.querySelector(".liens");
    const anim = document.querySelectorAll(".liens li");

    burger.addEventListener("click", ()=>{
        liens.classList.toggle('liens-actif');

        anim.forEach((lien, index)=>{
            if(lien.style.animation){
                lien.style.animation = '';
            }else{
                lien.style.animation = `liensFondu 0.5s ease forwards ${index / 7 * 1.8}s`;
            }
        })

        burger.classList.toggle("toggle");
    })
}

navSlide();