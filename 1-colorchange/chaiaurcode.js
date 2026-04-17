console.log("Aprajita")

const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach( function (button){
    console.log(button);
    button.addEventListener('click',
        function(e){
            console.log(e);
            console.log(e.target);//jidhr se click hoga uska reference dega
            if(e.target.id==='grey'){
                body.style.backgroundColor='grey';
            }
            if(e.target.id==='blue'){
                body.style.backgroundColor='blue';
            }
            if(e.target.id==='pink'){
                body.style.backgroundColor='pink';
            }
            if(e.target.id==='yellow'){
                body.style.backgroundColor='yellow';
            }
        }
    )
})
//pehle 