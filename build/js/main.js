const menuBtn=document.querySelector(".menu-btn"),navBar=document.querySelector(".navbar");let menuOpen=!1;menuBtn.addEventListener("click",()=>{menuOpen?(menuBtn.classList.remove("open"),navBar.classList.remove("active"),menuOpen=!1):(menuBtn.classList.add("open"),navBar.classList.add("active"),menuOpen=!0)});
//# sourceMappingURL=main.js.map
