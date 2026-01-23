//selection side navbar, menuicon

 const sidenav=document.getElementById("sidenav")
 const menuicon=document.getElementById("menuicon")

 menuicon.addEventListener("click",function(){
    sidenav.style.right=0

     })

    const closenav=document.getElementById("classnav")
    closenav.addEventListener("click",function(){
        sidenav.style.right="-50%"
    })