//The Draw Function are remain to implement in the X O

let btn=document.querySelectorAll(".btn");

let ress=document.querySelector("#reset");


let turn="x";
for(let butt of btn){
butt.addEventListener("click",()=>{
    if(turn=="x"){
        butt.innerText="X";
         turn="o";
         
         
    }
    else{
        butt.innerText="O";
        turn="x";
        
         console.log(turn);
    }
    butt.disabled=true;


      if(btn[0].innerText =="X" && btn[1].innerText =="X" && btn[2].innerText =="X" || btn[3].innerText =="X" && btn[4].innerText =="X" && btn[5].innerText =="X" || btn[6].innerText =="X" && btn[7].innerText =="X" && btn[8].innerText =="X" ||  btn[0].innerText =="X" && btn[3].innerText =="X" && btn[6].innerText =="X" ||  btn[1].innerText =="X" && btn[4].innerText =="X" && btn[7].innerText =="X" ||  btn[2].innerText =="X" && btn[5].innerText =="X" && btn[8].innerText =="X" || btn[0].innerText =="X"  && btn[4].innerText =="X"&& btn[8].innerText =="X"|| btn[2].innerText =="X"   && btn[4].innerText =="X" && btn[6].innerText =="X") {
        alert('The winner is "X"')
    }
    else if((btn[0].innerText =="O" && btn[1].innerText =="O" && btn[2].innerText =="O" || btn[3].innerText =="O" && btn[4].innerText =="O" && btn[5].innerText =="O" || btn[6].innerText =="O" && btn[7].innerText =="O" && btn[8].innerText =="O" ||  btn[0].innerText =="O" && btn[3].innerText =="O" && btn[6].innerText =="O" ||  btn[1].innerText =="O" && btn[4].innerText =="O" && btn[7].innerText =="O" ||  btn[2].innerText =="O" && btn[5].innerText =="O" && btn[8].innerText =="O" || btn[0].innerText =="O"  && btn[4].innerText =="O"&& btn[8].innerText =="O"|| btn[2].innerText =="O"   && btn[4].innerText =="O" && btn[6].innerText =="O")) {
         alert('The winner is "O"')

    }
   

})

}

reset.addEventListener("click",()=>{
    window.location.reload();
})


   
let winnig=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];













// for(let i=0;i<=winning.length;i++){
    
//     for(let winner of winning){
//     if(winner[i]=="X"||"O"){
//       alert('Winner Decided');
//     }
// }
// }

