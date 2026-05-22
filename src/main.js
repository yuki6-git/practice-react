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
