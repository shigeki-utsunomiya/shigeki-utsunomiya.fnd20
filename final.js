'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 画像要素の取得
const img = document.getElementsByTagName("img");
const imgArray = ["down.png","up.png"];

// 初期設定
let count = 0;
let totalMaxFinger = 4;
let myMaxFinger = 2;
let cpMaxFinger = 2;

// 指の合計本数期待値取得
let myTotalFinger = "";

function getTotalFinger(number) {
  for (let i = 0; i <= totalMaxFinger; i++) {
    totalNumber[i].style.backgroundColor = "forestgreen";
  }
  totalNumber[number].style.backgroundColor = "orange";
  myTotalFinger = Number(totalNumber[number].value);
  // window.alert("hello");
}

const totalNumber = document.getElementsByClassName("totalbtn");

for (let i = 0; i <= totalMaxFinger; i++) {
  totalNumber[i].addEventListener("click", function() {
    getTotalFinger(i);
  });
}

// ユーザーの指の本数実績値取得
let myFinger = "";

function getMyFinger(number) {
  for (let i = 0; i <= myMaxFinger; i++) {
    myNumber[i].style.backgroundColor = "forestgreen";
  }
  myNumber[number].style.backgroundColor = "orange";
  myFinger = Number(myNumber[number].value);
  // if (myFinger === "0") {
  //   img[2].src = imgArray[0];
  //   img[3].src = imgArray[0];
  // } else if (myFinger === "1") {
  //   img[2].src = imgArray[0];
  //   img[3].src = imgArray[1];
  // } else {
  //   img[2].src = imgArray[1];
  //   img[3].src = imgArray[1];
  // }
}

const myNumber = document.getElementsByClassName("mybtn");

for (let i = 0; i <= myMaxFinger; i++) {
  myNumber[i].addEventListener("click", function() {
    getMyFinger(i);
  });
}

document.getElementById("startbtn").addEventListener("click",getEvent);

function getEvent() {
  const cpFinger = Math.round(Math.random() * cpMaxFinger);
  // console.log(`cp:${cpFinger}`);
  if (cpFinger === 0) {
    img[1].src = imgArray[0];
    img[2].src = imgArray[0];
  } else if (cpFinger === 1) {
    img[1].src = imgArray[0];
    img[2].src = imgArray[1];
  } else {
    img[1].src = imgArray[1];
    img[2].src = imgArray[1];
  }
  if (myFinger === 0) {
    img[3].src = imgArray[0];
    img[4].src = imgArray[0];
  } else if (myFinger === 1) {
    img[3].src = imgArray[0];
    img[4].src = imgArray[1];
  } else {
    img[3].src = imgArray[1];
    img[4].src = imgArray[1];
  }
  if (count % 2 === 0) {
    document.getElementById("cpexpected").textContent = "";
    if (cpFinger + myFinger === myTotalFinger) {
      if (myMaxFinger === 1) {
        img[3].style.visibility ="hidden"; // 非表示
        document.getElementById("message").innerText = "youWin";
        document.getElementById("againbtn").style.visibility = "visible";
        document.getElementById("startbtn").disabled = true;
        document.getElementById("startbtn").style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.getElementById("startbtn").style.color = "rgba(0, 0, 0, 0.5)";
      } else {
        myMaxFinger = 1;
        img[4].style.visibility = "hidden";
        myNumber[2].style.visibility = "hidden"; // ボタンの表示を消す
        // myNumber[2].disabled = true; // ボタンを押せなくする
        // myNumber[2].style.backgroundColor = "black"; // ボタンの色変更
        if (totalMaxFinger === 4) {
          totalMaxFinger =3;
          totalNumber[4].style.visibility = "hidden";
          // totalNumber[4].disabled = true;
          // totalNumber[4].style.backgroundColor = "black";
        } else if(totalMaxFinger === 3) {
          totalMaxFinger =2;
          totalNumber[3].style.visibility = "hidden";
          // totalNumber[3].disabled = true;
          // totalNumber[3].style.backgroundColor = "black";
        }
      }
    }
    for (let i = 0; i <= totalMaxFinger; i++) {
      totalNumber[i].disabled = true;
      totalNumber[i].style.backgroundColor = "rgba(34, 139, 34, 0.5)";
      totalNumber[i].style.color = "rgba(0, 0, 0, 0.5)";
    }
    for (let i = 0; i <= myMaxFinger; i++) {
      myNumber[i].style.backgroundColor = "forestgreen";
    }
  } else {
    const cpTotalFinger = Math.round(Math.random() * totalMaxFinger);
    document.getElementById("cpexpected").textContent = cpTotalFinger;
    // console.log(`cpTotal:${cpTotalFinger}`)
    if (cpFinger + myFinger === cpTotalFinger) {
      if (cpMaxFinger === 1) {
        img[1].style.visibility = "hidden";
        document.getElementById("message").innerText = "youLose";
        document.getElementById("againbtn").style.visibility = "visible";
        document.getElementById("startbtn").disabled = true;
        document.getElementById("startbtn").style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.getElementById("startbtn").style.color = "rgba(0, 0, 0, 0.5)";
      } else {
        cpMaxFinger = 1;
        img[2].style.visibility = "hidden";
        if (totalMaxFinger === 4) {
          totalMaxFinger =3;
          totalNumber[4].style.visibility = "hidden";
          // totalNumber[4].disabled = true;
          // totalNumber[4].style.backgroundColor = "black";
        } else if(totalMaxFinger === 3) {
          totalMaxFinger =2;
          totalNumber[3].style.visibility = "hidden";
          // totalNumber[3].disabled = true;
          // totalNumber[3].style.backgroundColor = "black";
        }
      }
    }
    for (let i = 0; i <= totalMaxFinger; i++) {
      totalNumber[i].disabled = false;
      totalNumber[i].style.backgroundColor = "forestgreen";
      totalNumber[i].style.color = "black";
    }
    for (let i = 0; i <= myMaxFinger; i++) {
      myNumber[i].style.backgroundColor = "forestgreen";
    }
  }
  count++;
  console.log(count);
}

document.getElementById("againbtn").addEventListener("click",getAgain);

function getAgain() {
  document.getElementById("startbtn").disabled = false;
  document.getElementById("startbtn").style.backgroundColor = "red";
  document.getElementById("startbtn").style.color = "black";
  location.href = "index.html";
}

document.getElementById("endbtn").addEventListener("click",getEnd);

function getEnd() {
  location.href = "end.html";
}

document.getElementById("youwinbtn").addEventListener("click",getwinmessage);

function getwinmessage() {
  document.getElementById("message").innerText = "youWin";
  document.getElementById("againbtn").style.visibility = "visible";
  document.getElementById("startbtn").disabled = true;
  document.getElementById("startbtn").style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  document.getElementById("startbtn").style.color = "rgba(0, 0, 0, 0.5)";
}

document.getElementById("youlosebtn").addEventListener("click",getlosemessage);

function getlosemessage() {
  document.getElementById("message").innerText = "youLose";
  document.getElementById("againbtn").style.visibility = "visible";
  document.getElementById("startbtn").disabled = true;
  document.getElementById("startbtn").style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  document.getElementById("startbtn").style.color = "rgba(0, 0, 0, 0.5)";
}
