// conditional types
// if T extends U ? X : Y
/*type NonUndefined<T> = T extends undefined ? never : T;

const a: NonUndefined<number | undefined | boolean> = 's';
const b: Exclude<any, any>
*/

interface IHydrantA {
	name: string;
	type: 'A';
}
/*
interface IHydrantB {
	name: string;
	type: 'B';
}

interface IHydrantC {
	name: string;
	type: 'C';
}

type Hydrant = IHydrantA | IHydrantB | IHydrantC;
const hAC: Exclude<Hydrant, IHydrantB | IHydrantC> = {
	name: 'MyHydrant',
	type: 'A',
};
*/

type Arr = [() => string, () => number];

type FirstTupleElReturnType<T> = T extends [infer U, ...unknown[]]
	? U extends (...args: unknown[]) => infer R
		? R
		: never
	: never;

const v: FirstTupleElReturnType<Arr> = 'aaa';
