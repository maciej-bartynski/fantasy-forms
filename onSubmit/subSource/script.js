document.addEventListener('DOMContentLoaded', getURL)

       
      

        function getURL() {
            let dataFromURL = window.location.search;
            let outp=document.querySelector(".twojedane");
            let array = dataFromURL.split('&');
            array.forEach(item => outp.innerText=outp.innerText+" "+item.split("="))
            //array.forEach(itm => itm.join(": "))
            //outp.innerText=array;
        }

    