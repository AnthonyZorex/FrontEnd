//Настройка главного div
let cheskers = document.querySelector(".grid-container");
 let row  = document.createElement("div");
row.style.display="grid";
row.style.gridTemplateColumns=" 100px 100px 100px 100px 100px 100px 100px 100px"; 

//Параметры полей и положение шашек в них
let arrayCheksWhite = [0,2,4,6,9,11,13,15,16,18,20,22,25,27,29,31,32,34,36,38,41,43,45,47,48,50,52,54,57,59,61,63];
let arrayCheksblack =  [1,3,5,7,8,10,12,14,17,19,21,23,24,26,28,30,33,35,37,39,40,42,44,46,49,51,53,55,56,58,60,62];
let white =[1,3,5,7,8,10,12,14,17,19,21,23];
let black = [40,42,44,46,49,51,53,55,56,58,60,62];

// расположение ячеек и шашек в них
for(let gridCheker = 0;gridCheker<65;gridCheker++)
{
        if(arrayCheksWhite.some(item=>item===gridCheker)){
            let gridWhite = document.createElement("div");
            gridWhite.classList.add("grid-element");
            gridWhite.style.background="white";
            row.appendChild(gridWhite);
            cheskers.appendChild(row);
        }
        else if(arrayCheksblack.some(item=>item===gridCheker)){
            let gridBlack = document.createElement("div");
            gridBlack.classList.add("grid-element");
               gridBlack.style.background="grey";
              row.appendChild(gridBlack);
              cheskers.appendChild(row);
              if(white.some(item=>item===gridCheker)){
                let char = document.createElement("div");
                char.classList.add("amount");
                char.style.background="black";
                let border_char = document.createElement("div");
                border_char.classList.add("radiuAmount");
                char.appendChild(border_char);
                gridBlack.appendChild(char);
              }
             else if(black.some(item=>item===gridCheker)){
                let charBlack = document.createElement("div");
                charBlack = document.createElement("div");
                charBlack.classList.add("amount");
                let border_char = document.createElement("div");
                border_char.classList.add("radiuAmount");
                charBlack.appendChild(border_char);
                gridBlack.appendChild(charBlack);
              }
        }
}
//Gameplay
let all_Items = document.querySelectorAll(".amount");
let all_ItemsGrid = document.querySelectorAll("grid-element");
function Gameplay(){
  console.log(all_ItemsGrid.some(item=>item===black));
}
for(let i =0;i<all_Items.length;i++)
all_Items[i].addEventListener("click",Gameplay);
