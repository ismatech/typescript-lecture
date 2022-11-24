//import '../assets/css/style.css';

// interface IUserAccount {
//     firstName: string;
//     age: number
// }
//
// const acc = IUserAccount;

// const userAccount = {
//     firstName: 'Ismat';
//     age: 31
// }
//
// const person = userAccount;
//
// class UserAccount  {
//     public name:string = 'Ismat';
//     // public age:number = 31;
// }
//
// const user: UserAccount = UserAccount;
/*

let num: number = 1;
num = 0x0111;

num.toFixed(2);

let str: string = 'str';
let bool: boolean = true;
let und: undefined = undefined;
let nil: null = null;

let b: bigint = 5n;

let key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
let key3 = Symbol('key3');

let strictObj = {
    [key1]: 100,
    [key2]: 200,
    [key3]: 300,
}

let value1 = strictObj[key1];
let value2 = strictObj[key2];
let value3 = strictObj[key3];*/
/*

let anyType: any  = 1;
anyType();
anyType = null;
anyType.a.b = 1;
anyType = () => {};

let unkType: unknown  = 1;
unkType();
unkType = null;
unkType.a.b = 1;
unkType = () => {};

let v: void = undefined;

function fn(): void {}

function fn1(): never {
    throw new Error('sada');
}*/

// let num: 1 | 2 | 3 | 4 | 5 = 2;
//
// type AnimationType = 'ease';
// type AnimationDirection = 'in' | 'out' | 'out-in';
//
enum AnimationEnum {
	EASE_IN = 'ease-in',
	EASE_OUT = 'ease-out',
}
//
// interface IAnimationOptions {
// 	delay: number;
// 	// type: `${AnimationType}-${AnimationDirection}`;
// 	type: AnimationEnum;
// }
//
// function animate(_options: IAnimationOptions) {
// 	if (_options.type === AnimationEnum.EASE_IN) {
// 		/**
// 		 * do smth
// 		 */
// 	}
// }
//
// animate({ delay: 1000, type: AnimationEnum.EASE_OUT });
//
// enum Size {
// 	X = 48,
// 	L = 44,
// 	XL = 52,
// 	S = 42,
// }
//
// let s = Size.S;

// type CB = (a: number) => void;
// function fn(cb: CB) {}
// function fn1(cb: CB) {}
// function fn2(cb: CB) {}
//
// fn(()=>{})

interface IFact {
	factId: number;
	userId: string;
	useTo: string;
}

const dataList: { action: string; data: IFact }[] = [];

// @ts-ignore
let str: IFact[keyof IFact] = '1'; // number | string

// @ts-ignore
type keysTypes = keyof IFact;

const uniqueKey = (): keyof IFact => {
	// factId | userId | useTo
	return 'factId';
};

dataList.map((item: { action: string; data: IFact }) => {
	if (item.data[uniqueKey()]) {
	}
});

let ss = Object.keys(AnimationEnum).map((key: string) => {
	return AnimationEnum[key as keyof typeof AnimationEnum];
});

console.log('ss', ss);
