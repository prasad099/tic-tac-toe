let flag = true;
let arr = [1, 0, 1, 0, 1, 0, 0, 1, 0];
player1 = document.querySelector('.p1');
player2 = document.querySelector('.p2');
let index;

//Start function
function start(){
    if(player1.value != '' && player2.value != ''){
        document.querySelector('.page1').style = 'display:none';
        document.querySelector('.main').style = 'display:block';
        document.querySelector('#p1').innerText = player1.value;
        document.querySelector('#p2').innerText = player2.value;
    }
}

function getVal(){
    return (flag) ? 'X' : 'O';
}

//Main Function

document.querySelector('.main').addEventListener('click', (e)=>{

})