const user: {
	readonly firstName: string;
	readonly age?: number; // ? делает параметр опциональныи
} = {
	firstName: 'Ismat',
	// age: undefined, // невалидная ситуация
};

// user.age = 55; // error

// let userHashMap = {
// 	sadada2131: {},
// 	saada3424: {},
// };

// let userHashMap: {
// 	timestamp: Date;
// 	[id: string]: typeof user | Date;
// } = {
// 	timestamp: new Date(),
// 	asdd13131: user,
// 	sasdadabgbgb: {
// 		firstName: 'Tahmina',
// 		age: 30,
// 	},
// };

let options: {
	timestamp: Date;
	type: 'ease-in' | 'ease-out';
	[data: `data-${string}`]: string; // сигнатура индекса
} = {
	timestamp: new Date(),
	type: 'ease-out',
	'data-value': '21',
	'data-delay': '22',
};

// let arr: readonly typeof user[] = [user];
// arr.push(user);
//
// arr[100] = user;

let tupleTYpe: readonly [ID: number, USER: typeof user, male?: boolean] = [132131, user];
tupleTYpe = [1231323, user, false];

// tupleTYpe.push(user);
//
// tupleTYpe[100] = user;

let tt: [string, ...number[]] = ['name', 1, 2, 3, 4, 5, 4, 5];
