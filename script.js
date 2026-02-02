//1.ランダムにおみくじの画像のパスを返す処理
function getRandomImage() {
   const number = Math.floor(Math.random() * 7) //0~6のランダムな整数を生成
   const imagePath = "./images/omikuji-" + number.toString() + ".png";
　 return imagePath;
}

function playOmikuji() {
    const timer = window.setInterval(function(){
        document.querySelector("#js-result").setAttribute("src", getRandomImage());
    },100)

    setTimeout(function(){
        clearInterval(timer);
},2000);
}


document.querySelector("#js-button").addEventListener("click" , playOmikuji);