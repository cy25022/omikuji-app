function getRandomImage() {
   let number = Math.floor(Math.random() * 8);

   if (number === 7) {
    number = 6;
   }

   const imagePath = "./images/omikuji-" + number.toString() + ".png";
   return imagePath;
}

// 大吉が出た時の特別な演出
function specialDaikichi() {

    document.body.style.background =
      "linear-gradient(135deg, #ffd700, #ff8c00)";

    const audio = new Audio("./images/daikichi.mp3");
    audio.play();


    setTimeout(() => {
        document.body.style.background =
          "linear-gradient(135deg, #667eea, #764ba2)";
    }, 2000);
}

function playOmikuji() {
    const img = document.querySelector("#js-result");
    
    const timer = window.setInterval(function(){
        img.setAttribute("src", getRandomImage());
    },200);

    setTimeout(function(){
        clearInterval(timer);

        // 確定後に大吉チェック
        const src = img.getAttribute("src");

        if (src.includes("omikuji-6")) {
            img.classList.add("daikichi");
            specialDaikichi();        // ← ここで1回だけ！
        } else {
            img.classList.remove("daikichi");
        }
        
    },4000);
}

document.querySelector("#js-button")
        .addEventListener("click", playOmikuji);
