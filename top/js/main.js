// デジタル時計
function displayTime() {
    const padZero = (value) => value.toString().padStart(2, "0");
  
    const now = new Date();
    const hour = padZero(now.getHours());
    const minute = padZero(now.getMinutes());
    const second = padZero(now.getSeconds());
  
    const currentTime = `${hour}:${minute}:${second}`;
    document.querySelector(".clock").textContent = currentTime;
}
  
displayTime();
setInterval(displayTime, 1000);


// おみくじ
function playOmikuji(){
    main.src = "images/load1.png";
    setTimeout(loading1, 600);
}
function loading1(){
    main.src = "images/load2.png";
    setTimeout(loading2, 600);
}
function loading2(){
    main.src = "images/load3.png";
    setTimeout(loading3, 600);
}
function loading3(){
    main.src = "images/load4.png";
    setTimeout(result, 600);
}


function result(){

    var omikuji = ['大吉', '吉', '中吉', '小吉', '末吉', '凶','大凶'];
    var image = ['daikichi', 'kichi', 'chukichi', 'shokichi', 'suekichi', 'kyo','daikyo'];
    var random = Math.floor( Math.random() * omikuji.length );
    
    main.src = "images/" + image[random] + ".png";    
}

// 押した数をカウントするボタンの機能
let count = 0;

function incrementCount() {
    count++;
    document.getElementById('count').innerText = count;
}

function resetCount() {
    count = 0;
    document.getElementById('count').innerText = count;
}

/*アラート表示*/
document.getElementById('alert-button').addEventListener('click', function() {
    const alertCount = parseInt(document.getElementById('alert-count').value);
    
    if (isNaN(alertCount) || alertCount < 1) {
        alert('正しい数値を入力してください');
        return;
    }

    for (let i = 0; i < alertCount; i++) {
        alert(`アラート ${i + 1}`);
    }
});