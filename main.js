//innerHTML
//各マスの変数の表示
//各マスの変数に依存した画像表示
//0~6は自分のコマとストア,以降は敵のコマとストア
let table = [3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0];

//選択された場所
// let index = HTML側でクリックした場所のインデックスの値を返す

//選択された場所の石の数
let selectedNumberOfStone = table[index];

//種まきを行う関数
//敵と自分の操作を区別しない
//連続操作条件が起こらない時にターン終了(while文)
function seeding(index) {
  //自分のターン
  //スタート地点の石の数を0にする
  selectedNumberOfStone = 0;
  let n = 0;
  for (let i = index; i <= table[index] + index; i++) {
    //石の移動の増減処理
    //スタート地点から次のインデックス番号の石の数を条件の回数だけ1ずつ増やす
    n++;
    table[index + n]++;
    if (i > 13) {
      i %= 14;
    }
  }
  //更新した配列を返す
  return table;
}

//各マスの変数の定義(初期値設定)

//コンピュータが選択できるマスの条件
//ランダム関数で受け取った値を使う
//tableインデックスの7~12のうち空でない場所
//相手が選択したマスによって配列を更新する
function canSelectIndexByCom() {
  let canSelect = false;
  while (canSelect == false) {
    //コンピュータが選択したマス
    let indexSelectedByCom = Math.floor(Math.random() * 6) + 6;
    if (table[i] !== null) {
      canSelect = true;
    }
  }
  return indexSelectedByCom;
}

//普遍的な増減処理

//連続操作処理(条件；種まきの最後がストアに入る)

//対面の相手マスを奪える処理(条件；種まきの最後が自陣の空のマスに入る)

//相手の操作をランダム関数で定義

//自分のターンを表示

//ボタンクリック後、sleep関数で処理を待たせる

//試合終了処理（どちらかのプレーヤーのマスが全て空）

//勝者判定

//勝者表示
