export function basicStrike(){
    let allClasses = document.querySelectorAll('.form_body_inne-dane_klasa input');
    let allStrikes = document.querySelectorAll('.form_body_inne-dane_uderzenie select');
    let iter = allClasses.length;
    for (let i=0; i<iter; i++){
        let eachStrike = allStrikes[i];
        eachStrike.disabled=true;
        allClasses[i].addEventListener('click', function (){
            let strike = allStrikes[i];
            for (let j=0;j<iter;j++){
                let eachStrike = allStrikes[j];
                eachStrike.disabled=true;
            }
            setClass(strike,i,iter);
        })
    }
    function setClass(strike){
        strike.disabled=false;
    }
}