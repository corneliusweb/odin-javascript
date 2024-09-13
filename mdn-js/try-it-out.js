const dummy =
	'Hi baby, how are you doing today? I miss you! Do you miss me too?';

// let's practice the methods here

let a = dummy.length;
// console.log(a);

let b = dummy[dummy.length - 1];
// console.log(b);

let c = dummy.includes('miss');
// console.log(c);

let d = dummy.indexOf('you');
// console.log(d);
let d2 = dummy.indexOf('you', d + 1);
// console.log(e);

let e = dummy.slice(41, 44);
// console.log(f);
let e2 = dummy.slice(34);
// console.log(e2)

const f = dummy.slice(34).toLocaleUpperCase();
// console.log(f);

const g = dummy.replace('miss', 'love');
// console.log(g)
const g2 = dummy.replace(/miss/gi, 'love');
console.log(g2);
