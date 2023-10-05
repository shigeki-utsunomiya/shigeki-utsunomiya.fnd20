'use strict'

// 指の合計本数期待値取得
let totalFinger = "";

function getTotalFinger(number) {
  for (let i=0; i < totalNumber.length; i++) {
    totalNumber[i].style.backgroundColor = "red";
  }
  totalNumber[number].style.backgroundColor = "black";
  totalFinger = totalNumber[number].value;
  // console.log(totalFinger);
  //   // number["ID"]
  //   // window.alert("hello");
}

const totalNumber = document.getElementsByClassName("totalbtn"); // HTMLコレクション取得

for (let i=0; i < totalNumber.length; i++) {
  totalNumber[i].addEventListener("click", function() {
    getTotalFinger(i);
  });
}

// ユーザーの指の本数実績値取得
let myFinger = "";

function getMyFinger(number) {
  for (let i=0; i < myNumber.length; i++) {
    myNumber[i].style.backgroundColor = "red";
  }
  myNumber[number].style.backgroundColor = "black";
  myFinger = myNumber[number].value;
  // console.log(myFinger);
}

const myNumber = document.getElementsByClassName("mybtn"); // HTMLコレクション取得

for (let i=0; i < myNumber.length; i++) {
  myNumber[i].addEventListener("click", function() {
    getMyFinger(i);
  });
}

// 指の本数で判定し初期状態に復帰
document.getElementById("startbtn").addEventListener("click",getEvent);

function getEvent() {
  console.log(totalFinger + myFinger);
}
