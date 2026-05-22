//constで定義した配列はプロパティー変更が可能
const val1 = ['dog', 'cat', 'tiger'];
console.log(val1);
val1[0] = 'bird';
val1.push('monkey');
console.log(val1);

//constで定義したオブジェクトはプロパティー変更が可能
const val2 = {
  name: 'yuki',
  age: 24,
};
console.log(val2);
val2.age = 25;
val2.address = 'tokyo';
console.log(val2);

//テンプレート文字列
const name = 'yuki';
const age = 24;

const message1 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message1);

//アロー関数の引数が１つの場合は（）が省略可能
const fun1 = num => {
  return num;
}
console.log(fun1(10));

//＝＞のあとが単一式での処理なら{}も省略可能　＊{}を使うときはreturnがないとundefiedになる
const fun2 = (num1, num2) => num1 + num2;
console.log(fun2(10, 20))

const fun3 = (num1, num2) => { return num1 + num2;}
console.log(fun3(10, 20));

//アロー関数の返り値が何かしらのオブジェクトの場合（{}）のようにカッコで囲むことで単一式の処理の扱いになる
const fun4 = (num1, num2) => ({
  yuki: num1,
  taro: num2
});
console.log(fun4(20, 30));

//配列の分割代入
const myprofile = {
  name1: "ユウキ",
  age1: 24
}
const {name1, age1} = myprofile;
const message2 = `私の名前は${name1}です。年齢は${age1}歳です。`;
console.log(message2);

//配列の分割代入
const animals = ["bird", "dog", "cat", "rabbit"];
const [fav1, fav2] = animals;
const message3 = `私の好きな動物は${fav1}と${fav2}です。`;
console.log(message3);
//分割代入では、いらない要素を , で飛ばせます。
const [,tomfav1,,tomfav2] = animals;
const message4 = `トムの好きな動物は${tomfav1}と${tomfav2}です。`;
console.log(message4);


//デフォルト値
const profile = {
  myage: 32
};
const {myage, myname = "ゲスト"} = profile;//mynameのデフォルト値が"ゲスト"
const message5 = `こんにちは${myname}さん、年齢は${myage}ですね！`;
console.log(message5);

//オブジェクトの省略記法
const dinner = "カレー";
const lunch = "サンドウィッチ";

const meal = {
  lunch,
  dinner
};
console.log(meal);

//スプレッド構文
//配列の展開
const arr1 = [1, 2, 3, 4];
console.log(...arr1);
console.log(arr1);

//まとめる
const arr2 = [2, 3, 4, 5, 6];
const [first, second, ...arr3] = arr2;
console.log(first,second, arr3);

//配列のコピーと結合

const arr4 = [1, 2, 3, 4];
const arr5 = [10, 30];
//コピー　＊const  arr6 = arr4とかにすると　arr6 [0]=100にするとarr4[0]= 100になってしまう
const arr6 = [...arr4];
console.log(arr6);
//結合
const arr7 = [...arr4,...arr5];
console.log(arr7);

//mapで二つ目の引数を取るとindexが入る
const namearr = ["山田","田中","鈴木","武田"];
const nameIndex = namearr.map((name, index) => `${index+1}番目は${name}さんです`);
console.log(nameIndex);

//三項演算子
const number = 180000
const checknum = typeof number === "number" ? number.toLocaleString(): "数値入力してください";
console.log(checknum);