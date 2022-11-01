
window.addEventListener('load',function(){


const keyboard = [1,2,3,4,5,6,7,8,9,0, '*','/','+','-','=','C','SQRT','POW'];

const k = document.querySelector('#key');
const t = document.querySelector('#text');

for (let i=0; i<keyboard.length; i++){
    const btn=`<button>${keyboard[i]}</button>`;
    k.innerHTML+=btn;
}

const btnAll=document.querySelectorAll('#key button');

for(let i=0; i<btnAll.length; i++){
    const btn=btnAll[i];

    btn.addEventListener('click',function(){
        const val=btn.innerText;

        switch(val){
            case '=':{
                t.value=eval(t.value);
                break;
                
            }
            case 'C':{
                t.value='';
                break;
            }
            case 'SQRT':{
                t.value=Math.sqrt(Number(t.value));
                break;
            }
            case 'POW':{
                t.value=Math.pow(Number(t.value),2);
                break;

            }

            default:{
                t.value+=val;
            }
            
            }

        

        /*
        if(val!=='='){

            t.value+=val;

        }else{

            t.value=eval(t.value);
            
        }
        */

    })
}

});