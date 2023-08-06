//0~6は自分のコマとストア,以降は敵のコマとストア
let table = [3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0];

//クリックしたコマの場所

// //選択された場所の石の数

//種まきを1度だけ行う関数
//連続操作条件が発生するときにもう一度呼び出される
//普遍的な増減処理
//敵と自分の操作を区別しない
//連続操作条件が起こらない時にターン終了(while文)
function seeding(index) {
  //自分のターン
  //スタート地点の石の数を0にする
  // selectedNumberOfStone = 0; //初期値を０
  let lastSeedingPlace = index;
  let selectedNumberOfStone = table[index];
  for (let i = index + 1; i <= selectedNumberOfStone + index; i++) {
    //石の移動の増減処理
    //スタート地点から次のインデックス番号の石の数を条件の回数だけ1ずつ増やす
    table[i]++;
    table[index]--;
    // console.log(table[i]);
    if (i > 13) {
      i %= 14;
    }
    lastSeedingPlace++;
  }
  //最後の種を落とした場所
  result = { lastSeedingPlace, table };

  //更新した配列を返す
  return result;
}
// console.log(seeding(3).lastSeedingPlace);

//innerHTML
const holes = document.getElementById("holes");
holes.innerHTML = `
<div class="store com" id="13">
  <p>${table[13]}</p>
  <img src="images/${table[13]}.png" width="40" height="40">
</div>
<div class="field">
  <div class="table your">
    <div class="hole your" id="0">
      <button type="button" class="btn">
        <p>${table[0]}</p>
        <img src="images/${table[0]}.png" width="40" height="40">
      </button>
      </div>
    <div class="hole your" id="1">
    <button type="button" class="btn">
      <p>${table[1]}</p>
      <img src="images/${table[1]}.png" width="40" height="40">
    </button>
    </div>
    <div class="hole your" id="2">
      <button type="button" class="btn">
        <p>${table[2]}</p>
        <img src="images/${table[2]}.png" width="40" height="40">
      </button>
    </div>
    <div class="hole your" id="3">
      <button type="button" class="btn">
        <p>${table[3]}</p>
        <img src="images/${table[3]}.png" width="40" height="40">
      </button>
    </div>
    <div class="hole your" id="4">
      <button type="button" class="btn">
        <p>${table[4]}</p>
        <img src="images/${table[4]}.png" width="40" height="40">
      </button>
    </div>
    <div class="hole your" id="5">
      <button type="button" class="btn">
        <p>${table[5]}</p>
        <img src="images/${table[5]}.png" width="40" height="40">
      </button>
    </div>
  </div>
  <div class="table com">
    <div class="hole com" id="7">
      <p>${table[7]}</p>
      <img src="images/${table[7]}.png" width="40" height="40"></div>
    <div class="hole com" id="8">
      <p>${table[8]}</p>
      <img src="images/${table[8]}.png" width="40" height="40">
    </div>
    <div class="hole com" id="9">
      <p>${table[9]}</p>
      <img src="images/${table[9]}.png" width="40" height="40"></div>
    <div class="hole com" id="10">
      <p>${table[10]}</p>
      <img src="images/${table[10]}.png" width="40" height="40"></div>
    <div class="hole com" id="11">
      <p>${table[11]}</p>
      <img src="images/${table[11]}.png" width="40" height="40"></div>
    <div class="hole com" id="12">
      <p>${table[12]}</p>
      <img src="images/${table[12]}.png" width="40" height="40"></div>
  </div>
</div>
<div class="store your" id="6">
  <p>${table[6]}</p>
  <img src="images/${table[6]}.png" width="40" height="40">
</div>
`;

//連続操作機能
function canContinue(index) {
  let storePlace;
  //プレイヤーのマスの選択
  if (0 <= index <= 5) storePlace = 6;
  //相手のマスの選択
  else if (7 <= index <= 12) storePlace = 13;

  let canContinue = false;
  while (canContinue == true) {
    if (seeding().lastSeedingPlace == storePlace) {
      canContinue = true;
    }
  }
  return storePlace;
}

console.log(canContinue());

if (seeding() !== canContinue()) {
  if (table[index] === 1) {
    // マスに入った石が1つの場合、対面の相手マスを奪う処理を呼び出す
    captureComStones();
  }
  // 自分のターンが続く場合はターンを続ける
  // (ここに処理を追加)
} else {
  // 自分のターンが終わる場合、相手のターンを呼び出す
  computerTurn();
}
//各マスの変数の定義(初期値設定)

//コンピュータが選択できるマスの条件
//ランダム関数で受け取った値を使う
//tableインデックスの7~12のうち空でない場所
//相手が選択したマスによって配列を更新する
function canSelectIndexByCom() {
  let canSelect = false;
  let indexSelectedByCom;
  while (canSelect == false) {
    //コンピュータが選択したマス
    indexSelectedByCom = Math.floor(Math.random() * 6) + 6;
    if (table[indexSelectedByCom] !== null) {
      canSelect = true;
    }
  }
  //コンピュータが選択したインデックスを返してこの値をseeding関数で再利用する
  return indexSelectedByCom;
}

//連続操作処理（条件；種まきの最後がストアに入る）
//引数は種まきの最後の種が入るインデックス

//対面の相手マスを奪える処理(条件；種まきの最後が自陣の空のマスに入る)
function captureComStones(index) {
  // (ここに対面の相手マスを奪う処理を追加)
}

//相手の操作をランダム関数で定義
function computerTurn() {
  let indexSelectedByCom = canSelectIndexByCom();
  table = seeding(indexSelectedByCom);
}

//選択された場所
// let indexSelectedByPlayer = HTML側でクリックした場所のインデックスの値を返す
let button = document.getElementsByClassName("btn");
for (let j = 0; j <= 5; j++) {
  button[j].addEventListener("click", function () {
    seeding(j);
  });
}

// //各マスの変数の定義(初期値設定)

// //コンピュータが選択できるマスの条件
// //ランダム関数で受け取った値を使う
// //tableインデックスの7~12のうち空でない場所
// //相手が選択したマスによって配列を更新する
// function canSelectIndexByCom() {
//   let canSelect = false;
//   let indexSelectedByCom;
//   while (canSelect == false) {
//     //コンピュータが選択したマス
//     indexSelectedByCom = Math.floor(Math.random() * 6) + 6;
//     if (table[indexSelectedByCom] !== null) {
//       canSelect = true;
//     }
//   }
//   //コンピュータが選択したインデックスを返してこの値をseeding関数で再利用する
//   return indexSelectedByCom;
// }

// //普遍的な増減処理

// function seeding(index) {
//   //連続操作処理（条件；種まきの最後がストアに入る）
//   if (i !== 13) {
//     // 13は自分のストアのインデックス
//     if (table[i] === 1) {
//       // ストアに入った石が1つの場合、対面の相手マスを奪う処理を呼び出す
//       captureOpponentStones(i);
//     }
//     // 自分のターンが続く場合はターンを続ける
//     // (ここに処理を追加)
//   } else {
//     // 自分のターンが終わる場合、相手のターンを呼び出す
//     computerTurn();
//   }
// }

// //対面の相手マスを奪える処理(条件；種まきの最後が自陣の空のマスに入る)
// function captureOpponentStones(index) {
//   // (ここに対面の相手マスを奪う処理を追加)
// }

// //相手の操作をランダム関数で定義
// function computerTurn() {
//   let indexSelectedByCom = canSelectIndexByCom();
//   table = seeding(indexSelectedByCom);
// }

// //自分のターンを表示
// function displayPlayerTurn() {
//   // (ここに自分のターンを表示する処理を追加)
// }

// // ボタンクリック後、sleep関数で処理を待たせる

// // 試合終了処理（どちらかのプレーヤーのマスが全て空）

// // 勝者判定

// // 勝者表示

//ボタンクリック後、sleep関数で処理を待たせる

//試合終了処理（どちらかのプレーヤーのマスが全て空）

//勝者判定

//勝者表示
