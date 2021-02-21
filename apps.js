'use strict';
let max = 25;
let attemps=0;
let arr =[];

let img1 = document.getElementById('imgEl1')
let img2 = document.getElementById('imgEl2')
let img3 = document.getElementById('imgEl3')
let contanier= document.getElementById('contanier')

function products(name, filename){
    this.name=name;
    this.src = filename;
    this.count=0;
    this.numofDisplay=0;
    arr.push(this);

}

new products('Bag' , 'img/bag.jpg');
new products('Banana','img/banana.jpg');
new products('Bathroom','img/bathroom.jpg')
new products('Boots','img/boots.jpg');
new products('BreakFast','img/breakfast.jpg');
new products('BubbleGum','img/bubblegum.jpg');
new products('Chair','img/chair.jpg');
new products('Cthulhu','img/cthulhu.jpg');
new products('Dog-Duck','img/dog-duck.jpg');
new products('Dargon','img/dragon.jpg');
new products('Pen','img/pen.jpg');
new products('Pet-sweep','img/pet-sweep.jpg');
new products ('scissors','img/scissors.jpg');
new products('shark','img/shark.jpg');
new products('sweep','img/sweep.png');
new products('tauntaun','img/tauntaun.jpg');
new products('unicorn','img/unicorn.jpg');
new products('usb','img/usb.gif');
new products('water-can','img/water-can.jpg');
new products('wine-glass','img/wine-glass.jpg');
console.log(arr);

let imageIndex1;
let imageIndex2;
let imageIndex3;
function renderThreeRandomImages(){

    imageIndex1=generateRandomIndex();
    imageIndex2=generateRandomIndex();
    imageIndex3=generateRandomIndex();
   
  
    while(imageIndex1 === imageIndex2){
        imageIndex1 =generateRandomIndex();

    }
    while(imageIndex1 === imageIndex3){
        imageIndex3 = generateRandomIndex();

    }
    while(imageIndex2 === imageIndex3){
        imageIndex2=generateRandomIndex();
    }
    arr[imageIndex1].numofDisplay++;
    arr[imageIndex2].numofDisplay++;
    arr[imageIndex3].numofDisplay++;

img1.setAttribute('src',arr[imageIndex1].src)
img2.setAttribute('src',arr[imageIndex2].src)
img3.setAttribute('src',arr[imageIndex3].src)   

}

renderThreeRandomImages();


function generateRandomIndex(){
 
let random = Math.floor(Math.random() * arr.length);
return random ;

 
}

contanier.addEventListener('click',handleClicking)




function handleClicking(event){
    attemps++;
    console.log(event);
    if(attemps<=max){
      
        if(event.target.id ==='imgEl1' ){
            arr[imageIndex1].count++;
        }
        else if (event.target.id ==='imgEl2'){
            arr[imageIndex2].count++;

        }
        else {
            arr[imageIndex3].count++;
        }
        renderThreeRandomImages();
     

    }
    else {
      let result = document.getElementById('result')
      let li ;
      for(let i =0 ;i<arr.length; i++){
          li=document.createElement('li');
          result.appendChild(li);
          li.textContent=`${arr[i].name }Has ${arr[i].count} Counts and Showen ${arr[i].numofDisplay } Times `
      
        }
        document.getElementById('userResult').style.display='block';



      contanier.removeEventListener('click', handleClicking)
   
    
    }

 
}


function showResult(){
    document.getElementById('result').style.display="block";
}