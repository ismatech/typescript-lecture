// generic - это какое-то обобщение
// function fn(a, b) {
//
// }
/*

interface IRegularUser {
	id: number;
	age: number;
	info: {
		male: boolean;
	};
}

interface IAdmin {
	id: string;
	age: number;
	info: {
		male: boolean;
	};
}
// interface, type, class, function

interface IBaseInfo {
	male: boolean;
}

// extends ограничивает дженерики
interface IUser<Info extends IBaseInfo = IBaseInfo, ID = number> {
	id: ID;
	age: number;
	info: Info;
}

let user: IUser = {
	id: 1231,
	age: 31,
	info: {
		male: true,
	},
};

let admin: IUser<{ male: boolean; subjects: string[] }, string> = {
	id: '313dda',
	age: 55,
	info: {
		male: true,
		subjects: ['ts', 'js'],
	},
};
*/

//state example like redux or vuex
interface IUser {
	name: string;
	age: number;
}

interface IProduct {
	name: string;
	price: number;
}

interface IState {
	user: IUser;
	products: IProduct[];
}

const state: IState = {
	user: { name: 'Ismat', age: 31 },
	products: [
		{ name: 'IPhone 13', price: 1111 },
		{ name: 'IPhone 14', price: 22222 },
	],
};
type Select<T> = <K extends keyof T>(state: T, field: K) => T[K];

const select: Select<IState> = (store: any, field: any) => store[field];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
