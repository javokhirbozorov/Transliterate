
let inputBtn = document.querySelector("button");
let input = document.querySelector('input');


//logs the input value when the btn is clicked


let letterArray = [
    ['а','a'], 
    ['6', 'b'], 
    ['в','v'],
    ['г','g'], 
    ['д','d'],
    ['е','e'], 
    ['ё','e'],
    ['ж','j'], 
    ['з','z'],
    ['и','i'], 
    ['й','y'], 
    ['к','k'],
    ['л','l'], 
    ['м','m'],
    ['н','n'], 
    ['о','o'],
    ['п','p'], 
    ['р','r'],
    ['с','s'], 
    ['т','t'],
    ['у','u'], 
    ['ф','f'],
    ['х','h'], 
    ['уи','w'],
    ['ц','ts'],
    ['ч','ch'], 
    ['ш','sh'],
    ['ь',''], 
    ['ы','y'],
    ['э','e'], 
    ['ю','yu'],
    ['я','ya'], 
    ['щ','shch'],
    ['ъ',''],

    ['А', 'A',], ['Б', 'B',],
     ['В', 'V',], ['Г', 'G',],
     [ 'Д', 'D'], ['Е', 'E'], 
     ['Ё', 'E'], ['Ж', 'J'], 
     ['З', 'Z'], ['И', 'I'], 
     ['Й', 'Y'], ['К', 'K'], 
     ['Л', 'L'], ['М', 'M'],
     [ 'Н', 'N'], ['О', 'O'], ['П', 'P'], ['Р', 'R'], ['С', 'S'], ['Т', 'T'], ['У', 'U'], ['Ф', 'F'],['B','W'], ['Х', 'H'], ['Ц', 'TS'],
     [ 'Ч', 'CH'], ['Ш', 'SH'], ['Ь', ''], ['Ы', 'Y'], ['Э', 'E'], ['Ю', 'YU'], ['Я', 'YA'], ['Щ', 'SHCH'], ['Ъ', ''] 
  ]

let arrRus = [];
let arrEng = [];

input.addEventListener("click", ()=>{
 input.classList.add('active')
})


inputBtn.addEventListener('click',() => {
    input.classList.remove('active');
    console.log(input.value);
    arrRus = [];
    arrEng = [];
   
    let inputValue = input.value

    
     if(!inputValue.replace(/\s/g, '').length){
         alert(Error("Please enter a text!"))
     } else{
        function rus(input){
   
            let textRus = document.createElement('div');
            textRus.classList.add('text');
            let inputRus = input.split('');
            inputRus.forEach((element) => {
        
                letterArray.forEach(e =>{
                    if(element === e[1]){
                        element = e[0]
                    } 
                })
                arrRus.push(element)
            })
            console.log(arrRus);
            textRus.innerText = arrRus.join('');
            let cyrillicSection = document.querySelector('.cyrillic');
            cyrillicSection.appendChild(textRus)
        }
        rus(inputValue)
        
        
        function eng(input){
             let textEng = document.createElement('div');
            textEng.classList.add('text');
            let inputEng = input.split('');
            inputEng.forEach(element => {
                letterArray.forEach(e =>{
                    
                    if(element === e[0]){
                        element = e[1]
                    }
                })
                arrEng.push(element)
            })
            textEng.innerText = arrEng.join('');
            let latinSection = document.querySelector('.latin');
         latinSection.appendChild(textEng)
        
        }
        
        eng(inputValue)

        
        
        
    }
    input.value = "";
    let resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener("click", ()=>{
        window.location.reload();
    })
   


 
    // let latinSection = document.querySelector('.latin');
    // latinSection.appendChild(text)
 
})

//* for latin column
//* initialize the input to a variable.
//* split the string
//* loop through => if includes any latin replace it with cyrillic.

//* join the array
//* append it to the column


//* if the input is cyrillic add to the left column



