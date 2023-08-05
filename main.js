//innerHTML
//各マスの変数の表示
//各マスの変数に依存した画像表示
//0~6は自分のコマとストア,以降は敵のコマとストア
let table = [3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0];

//選択された場所
// let index = HTML側でクリックした場所のインデックスの値を返す

//選択された場所の石の数
let selectedNumberOfStone = table[index];

//種まきを1度だけ行う関数
//連続操作条件が発生するときにもう一度呼び出される
//普遍的な増減処理
//敵と自分の操作を区別しない
//連続操作条件が起こらない時にターン終了(while文)
function seeding(index) {
  //自分のターン
  //スタート地点の石の数を0にする
  selectedNumberOfStone = 0; //初期値を０
  let n = 0;
  lastSeedingPlace;
  for (let i = index; i <= table[index] + index; i++) {
    //石の移動の増減処理
    //スタート地点から次のインデックス番号の石の数を条件の回数だけ1ずつ増やす
    n++;
    table[index + n]++;
    if (i > 13) {
      i %= 14;
    }
  }
  //最後の種を落とした場所
  lastSeedingPlace = index + n;
  //更新した配列を返す
  return table;
}

//連続操作機能
function canContinue(index) {
  let storePlace;
  //プレイヤーのマスの選択
  if (0 <= index <= 5) storePlace == 6;
  //相手のマスの選択
  else if (7 <= index <= 12) storePlace = 13;

  let canContinue = false;
  while (canContinue == true) {
    if (lastSeedingPlace == storePlace) {
      canContinue = true;
    }
  }
}

if (lastSeedingPlace !== storePlace) {
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

//自分のターンを表示
function displayPlayerTurn() {
  // (ここに自分のターンを表示する処理を追加)
}

//ボタンクリック後、sleep関数で処理を待たせる

//試合終了処理（どちらかのプレーヤーのマスが全て空）

//勝者判定

//勝者表示
