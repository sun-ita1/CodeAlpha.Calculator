const calc =document.getElementById("calculate");
const buttons =document.querySelectorAll(".num");
const result =document.getElementById("result");

 function calculate(){
    try{
          let exp =calc.value;
          exp =exp.replaceAll("^","**"); 
          exp =exp.replace(/(\d+(\.\d+)?)%/g,"($1/100)");
                result.value =eval(exp);

            }catch{
                result.value ="Error";
            }
 };
 
 let memory =0;
  function mPlus(){
    memory +=Number(calc.value||0);
    console.log("M+ pressed,memory=",memory);
    calc.value=" ";
  }
  function mMinus(){
    memory -=Number(calc.value||0);
    console.log("M- pressed,memory =",memory);
    calc.value="";
  }
  function mRecall(){
    calc.value  =memory;
  }
  function mClear(){
    memory =0;
  }
  function Backspace(){
    let display =calc.value;
    calc.value =display.slice(0,-1);
  }

  

calc.addEventListener("keydown",function(e){
    const allowedkeys =["0","1","2","3","4","5","6","7","8","9","00","+","-","*","^","%","/",".",")","(","ArrowLeft","ArrowRight","Delete","Enter","Backspace"];
    if(!allowedkeys.includes(e.key)){
        e.preventDefault();
    }
    if(e.key ==="Enter"){
        calculate();
    }
});

buttons.forEach(num =>{
    num.addEventListener("click", ()=>{
        const value =num.innerText;
        if(value ==="="){
         calculate();
        }
        else if(value ==="C"){
            result.value =" ";
            calc.value =" ";
        }
        else if(value ==="AC"){
            calc.value=" ";
            result.value =" ";
            memory =0;
        }
        else if(value ==="M+"){
            mPlus();
        }
        else if(value ==="M-"){
            mMinus();
        }
        else if(value ==="MR"){
            mRecall();
        }
        else if(value==="MC"){
            mClear();
        }
        else if(value ==="->"){
            Backspace();
        }
        else{
            calc.value += value;
        }
    })
});
