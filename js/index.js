let flag = true;
let arr = [1, 0, 1, 0, 1, 0, 0, 1, 0];
let index;
let player1 = document.querySelector('.p1');
let player2 = document.querySelector('.p2');
let p1count = 0, p2count = 0;
let winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

// main function
var counter =0;
document.querySelector('.main1').addEventListener('click', (e) => {
    index = e.target.id;
    if (arr[index] == 0 || arr[index] == 1) {
        e.target.innerHTML = `${getVal()}`;
        arr[index] = getVal();
        counter++;
        if(counter>4)
        getWinner();
        flag = !flag;
    }

    console.log(arr);
})



function getVal() {
    return (flag) ? 'X' : 'O';
}




function getWinner() {
    // if(
    //     (arr[0]==arr[1] && arr[1]==arr[2])||
    //     (arr[3]==arr[4] && arr[4]==arr[5])||
    //     (arr[6]==arr[7] && arr[7]==arr[8])||
    //     (arr[0]==arr[3] && arr[3]==arr[6])||
    //     (arr[1]==arr[4] && arr[4]==arr[7])||
    //     (arr[2]==arr[5] && arr[5]==arr[8])||
    //     (arr[0]==arr[4] && arr[4]==arr[8])||
    //     (arr[2]==arr[4] && arr[4]==arr[6]))
    //     {
    //         if(flag){
    //             alert('winner is '+player1.value);
    //             p1count++;
    //         }
    //         else{
    //             alert('winner is '+player2.value);
    //             p2count++;
    //         }
    //         document.querySelector('.score1').innerText=p1count;
    //         document.querySelector('.score2').innerText=p2count;
    //         arr=[];//empty array
    //  } 

    for (let i = 0; i <= 7; i++) {
        let [a,b,c] = winnerArray[i];//[0,1,2]
        console.log(a,b,c);
        if((arr[a]==arr[b] && arr[b]==arr[c]))
            {
                if(flag){
                    alert('winner is '+player1.value);
                    p1count++;
                }
                else{
                    alert('winner is '+player2.value);
                    p2count++;
                }
                document.querySelector('.score1').innerText=p1count;
                document.querySelector('.score2').innerText=p2count;
                arr == []; //empty array
         }
    }

}


//page 1 start button
function start() {
    if (player1.value != '' && player2.value != '') {
        document.querySelector('.page1').style = 'display:none;'
        document.querySelector('.main').style = 'display:block;'
        document.querySelector('#p1').innerText = player1.value;
        document.querySelector('#p2').innerText = player2.value;
        // player1.value='';
        // player2.value='';
    }
}

//reset function
function reset() {
    for (let i = 0; i <= 8; i++) {
        document.querySelectorAll('.box')[i].innerHTML = '';
        arr = [1, 0, 1, 0, 1, 0, 0, 1, 0];
    }
    flag = true;
}


//restart function
function restart() {
    // reset()
    // document.querySelector('.page1').style='display:block;'
    // document.querySelector('.main').style='display:none;'
    // document.querySelector('.score1').innerText=0;
    // document.querySelector('.score2').innerText=0;
    location.reload();
}