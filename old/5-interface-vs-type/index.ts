// Objects

/**
 * offtopic namespace - группировка интерфейсов
 */
/*
namespace Validators {
	export interface IStringValidator {
		name: string;
		fn: string;
	}

	export interface INumberValidator {
		name: string;
		fn: string;
	}
	export let a = '1';
}

let a: Validators.INumberValidator;
*/
/*

interface IPoint {
	x: number;
	y: number;
}

type TPoint = {
	x: number;
	y: number;
};

let p: IPoint = {
	x: 1,
	y: 1,
};

// function
type TCallBack = (a: number) => number;
// type TCallBack = { new (a: number): number };

interface ICallBack {
	(a: number): number;
}

let fn: ICallBack = (_a: number) => {
	return 1;
};

// пока что нет различий между type и interface
*/

//extends

interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = {
	x: number;
};

type TY = {
	y: number;
};

interface IPoint extends IX, IY {
	z: number;
}

type TPoint = TX & TY & { z: number };

let p: IPoint = {
	x: 1,
	y: 1,
	z: 2,
	// d: 6,
};
// все еще нет разницы

//implements
type AnimationType = 'ease-in' | 'ease-out'; // своя область видиомсти

class Point implements IX, TY {
	public x!: number;

	public y!: number;
}
// все еще нет разницы

// !!!! type надо использовать только для необъектных типов, а для объектных - interface

/*
interface IPoint { // интерфейсы могут мерджиться
	d: number;
}
*/
