


const btnE= document.querySelector(".btn");
const birthdateE= document.querySelector("input");
const resultE= document.querySelector(".result");


function getAge(birthDayValue){
  const birthYear= new Date(birthDayValue).getFullYear();
  const birthMonth= new Date(birthDayValue).getMonth();
  const currentYear= new Date().getFullYear();
  const currentMonth= new Date().getMonth();
    let age= currentYear-birthYear;
    let month=currentMonth-birthMonth;

    if(month<0 ||(month==0 && birthDayValue>currentYear)){
        age--;
    }

  
  return age;
  
  
  
}
function calculateAge(){
    const birthDayValue=birthdateE.value;
    if(birthDayValue===""){
        alert(" you must Enter your birthDate");
    }else{
        const age = getAge(birthDayValue);

        resultE.innerHTML=` your age is ${age} ${age>1?"years":"year"} old`
    }
    
}

btnE.addEventListener("click", calculateAge);
