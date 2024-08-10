// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
// let turn = "X"
// let isgameover = false;


// const changeTurn = ()=>{
//     return turn === "X"? "0": "X"
// }


// const checkWin=()=>{
//     let boxtext=document.getElementsByClassName('boxtext')
//     let wins=[
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8], 
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ]
//     // yuvan =()=>{
//     //     document.getElementsByClassName('imgbox')}
    

//     // wins.forEach(e=>{
//     //     if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!== '')  ){
//     //         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//     //     }
//     // })
//     wins.forEach(e =>{
//         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//             isgameover=true
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            
        
            
    
        


//         }
    

//     })


// }
// // let boxes =document.getElementsByClassName('box')


// // Array.from(boxes).forEach(element =>{
// //     let boxtext=element.querySelector('.boxtext')
// //     element.addEventListener('click',()=>{
// //         if(boxtext.innerText===''){
// //             boxtext.innerText=turn
// //             turn=changeTurn()
// //             audioTurn.play()
// //             checkWin()
// //             document.getElementsByClassName('info')[0].innerText="turn for"+ turn
// //         }
// //     })

// // })


// Array.from(document.getElementsByClassName('box')).forEach((element)=>{
//     let boxtexts=element.querySelector('.boxtext')
   
   
//     element.addEventListener("click",()=>{
    
//         if(boxtexts.innerText==''){
//             boxtexts.innerText=turn
//              turn = changeTurn()
//             audioTurn.play()
//             checkWin()
            
//             if(!isgameover){
//                 document.getElementsByClassName('info')[0].innerText="turn for"+ turn

//             }
            
            

         
      
         
       

//         }
//     })
// })

// // ! is not ! is not ! is not ! is not ! is not 
// document.getElementById('start').addEventListener('click',()=>
// {
//     if(music.paused || music.currentTime<=0){
//         music.play()

//     }
//     else{
//         music.pause()
//     }

// })

// reset.addEventListener('click',()=>{
//     boxtexts= document.querySelectorAll(".boxtext")
//     Array.from(boxtexts).forEach(element=>{
//         element.innerText=""

//     })
//     turn="X"
//     isgameover=false
//         document.getElementsByClassName('info')[0].innerText="turn for"+ turn
//         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
            

    
// })


// // music.play()


// let music = new Audio("music.mp3");
// let audioTurn = new Audio("ting.mp3");
// let gameover = new Audio("gameover.mp3");
// let turn = "X";
// let isgameover = false;

// const changeTurn = () => {
//     return turn === "X" ? "O" : "X";
// };

// const checkWin = () => {
//     let boxtext = document.getElementsByClassName('boxtext');
//     let wins = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8], 
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     wins.forEach(e => {
//         if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
//             (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && 
//             (boxtext[e[0]].innerText !== "")) {
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
//             isgameover = true;
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
//         }
//     });
// };

// Array.from(document.getElementsByClassName('box')).forEach((element) => {
//     let boxtext = element.querySelector('.boxtext');
    
//     element.addEventListener("click", () => {
//         if (boxtext.innerText === '') {
//             boxtext.innerText = turn;
//             boxtext.style.color = (turn === 'X') ? 'purple' : 'orange'; // Change color based on the player
//             turn = changeTurn();
//             audioTurn.play();
//             checkWin();
            
//             if (!isgameover) {
//                 document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
//             }
//         }
//     });
// });

// document.getElementById('start').addEventListener('click', () => {
//     if (music.paused || music.currentTime <= 0) {
//         music.play();
//     } else {
//         music.pause();
//     }
// });

// document.getElementById('reset').addEventListener('click', () => {
//     boxtexts = document.querySelectorAll(".boxtext");
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = "";
//     });
    
//     turn = "X";
//     isgameover = false;
//     document.querySelector('.info').innerText = "Turn for " + turn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
// });

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
};

Array.from(document.getElementsByClassName('box')).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            boxtext.style.color = (turn === 'X') ? 'orange' : 'green'; // Change color based on the player
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            
            if (!isgameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById('start').addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
    } else {
        music.pause();
    }
});

document.getElementById('reset').addEventListener('click', () => {
    boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    
    turn = "X";
    isgameover = false;
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
