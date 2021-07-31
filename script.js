window.onload=function(){

    const select=document.querySelector('select')

    select.addEventListener('change',show)

    

    function show(){

        const choice=select.value;

        lp1.style.display="none";

        lp2.style.display="none";

        

        if (choice==='lp'){

            lp1.style.display="block";}

             if(choice==='up'){

                lp2.style.display="block";

            }

    }

}