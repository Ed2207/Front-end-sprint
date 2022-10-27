// let interval;
// let lettre = 0;

// const mot = ["P","r","o","u","t"]
// mot.myMethod = function (sProperty) {
//     console.log(arguments.length > 0 ? this[sProperty] : this);
//   };
//   setTimeout(myArray.myMethod, 1500, "1");



// let interval;
// let index = 0;
// let word = "Prout";

//  const displayWord = () => {
//     if(index == word.length){
//         clearInterval(interval);
//         }else{
//        document.write(word.charAt(index));
//        index++;
//     }
// }

// interval = setInterval(displayWord, 1000);

// const typewriter = setInterval(function(){
//     console.log (mot);
//     mot++;

//     if (lettre == 5) {
//         clearInterval (typewriter)
//     }
// },1000);


// const typewriter = setInterval(mycallback , 1000, 'P','r','o','u','t')

// let count =0;
// let interval = setInterval(function(){
//     count += 1;
//     if(count === 5){
//         clearInterval(interval);
//     }
//     // display the current time
//     const mot = ["P","r","o","u","t"]
//     let typewriter = mot.arrayLength ()
//     console.log(typewriter);

// }, 1000);
// exo2
// const b = document.body;
// const h1 = document.createElement ('h1');
// b.appendChild(h1);
// const h1txt = document.querySelector('h1')
// let date = new Date.getTime ();
// console.log (date)
// let timeSinceOpen = date.getTime ();


// const timeElapsed (date, timeSinceOpen) => {
//     let diff = {}
//     let time = date - timeSinceOpen;
//     time = Math.floor(time/1000);
//     diff.sec = time % 60;
// }

// var secondes = 0;
// const countSeconds = () => {
//     secondes += 1;
//     h1txt.innerHTML = "You have been on this page for" + secondes +"seconds.";
// }
// console.log (countSeconds)

// let time = 0 ;
// let dif = time - (time%60);
// const timedisplayed = () => {
//     if (time == 0){
//         document.write('You are on this page for ' + time+' second');
//     } else if (time <= 60) {
//         document.write('You are on this page for '+ time+' seconds');
//     }else {
//         document.write('You are on this page for '+ time%60 + ' minutes and'+dif +'seconds')
//     } document.write ('<br/>');
//     time++;
// }
// setInterval (timedisplayed, 200)

// const _initTime = Date.now()

// const getElapsedTime = () => {
//     return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
//   }
//   console.log (getElapsedTime)



//exo 3
const b = document.body;
const plateau = document.createElement('div');
b.append(plateau);
plateau.style.backgroundColor = 'white';
plateau.style.width = "500px";
plateau.style.height= '500px';
plateau.style.display ='flex';
plateau.style.border = 'solid 3px black';
plateau.style.margin ='auto';
plateau.style.flexWrap ='wrap';
plateau.style.justifyContent ='space-between';
plateau.style.alignItems='center'
plateau.style.paddingLeft='50px';
plateau.style.paddingRight='50px'
plateau.style.paddingBottom='50px';
plateau.style.paddingTop='30px'

for (i=1; i <=12 ;i++){
const cercle = document.createElement('button');
plateau.appendChild(cercle);
cercle.style.backgroundColor='white';
cercle.style.display = 'flex';
cercle.style.height ='120px';
cercle.style.width= '120px';
cercle.style.borderRadius= '50%';
cercle.style.border = 'solid 2px black';

}

const score = document.createElement('div');
plateau.appendChild(score);
score.style.border ='solid 2px black';
score.style.height ='60px';
score.style.width= '80%';
score.style.margin='auto';
score.style.display='flex';
score.style.justifyContent='space-around'

const points =0;
const scoretxt = document.createElement('p')
score.appendChild(scoretxt);
scoretxt.innerText = 'Score : '+ points;
scoretxt.style.color= 'Black';




// toute les X secondes, un cercle rouge se déplace parmis les douzes potentiels

// quand un utilisateur clicke sur le cercle qui est rouge, le score augmente



// circles = document.querySelectorAll('button')


// setInterval(() => {
//    let actives =  document.querySelectorAll('.active')
//     actives.forEach((active) => {
//         active.style.backgroundColor = "white"
//         active.classList.remove('active')
//     })
//     let edouard = Math.floor(Math.random() * 12)
//     circles[edouard].classList.add("active")
//     circles[edouard].style.background = "red"
// }, 1000)


// circles.forEach((cercle) =>
// // console.log(cercle)
// cercle.addEventListener ('clik', (e)=>
// console.log(target))
   

// )
// const tapMole = (e) => {
//     if(e.target.style.backgroundColor == "red") {
//         scoreNumber++;
//         score.innerText = scoreNumber;
//     }
// };

// for(const mole of moles) {
//     mole.addEventListener("click", tapMole);
// }

// const resetScore = () => {
//     scoreNumber = 0;
//     score.innerText = scoreNumber;
// };

// const resetScoreButton = document.getElementById("reset-score-button");
// resetScoreButton.addEventListener("click", resetScore);