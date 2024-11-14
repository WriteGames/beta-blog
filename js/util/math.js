const X = 0;
const Y = 1;
const Z = 2;
const W = 3;
export class Vec2 extends Array {
	// length: 2 = 2;
	constructor(x = 0, y = 0) {
		super(x, y);
	}
	get x() {
		return this[X];
	}
	set x(value) {
		this[X] = value;
	}
	get y() {
		return this[Y];
	}
	set y(value) {
		this[Y] = value;
	}
	map(
		// TODO: index: 0 | 1 ?
		callbackfn,
		thisArg,
	) {
		return super.map(callbackfn, thisArg);
	}
	every(predicate, thisArg) {
		return super.every(predicate, thisArg);
	}
	join(separator) {
		return super.join(separator);
	}
	[Symbol.iterator]() {
		return super.values();
	}
	clone() {
		return new Vec2(...this);
	}
	// TODO: add 'self' methods
	// addSelf(v: Vec2): this {
	// 	this.#values = this.map((val, i) => val + (v[i] ?? 0));
	// 	return this;
	// }
	add(v) {
		return Vec2.add(this, v);
	}
	static add(a, b) {
		return addPos(a, b);
	}
	sub(v) {
		return Vec2.sub(this, v);
	}
	static sub(a, b) {
		return subPos(a, b);
	}
	equal(v) {
		return Vec2.equal(this, v);
	}
	static equal(a, b) {
		return posEqual(a, b);
	}
	static get zero() {
		return new Vec2(0, 0);
	}
	static get one() {
		return new Vec2(1, 1);
	}
	static get right() {
		return new Vec2(1, 0);
	}
	static get up() {
		return new Vec2(0, 1);
	}
}
const vec = new Vec2(1, 3);
const [a, b, c, d, e] = vec;
export const V2 = Object.defineProperties(
	{},
	{
		zero: {
			value: [0, 0],
			writable: false,
		},
		one: {
			value: [1, 1],
			writable: false,
		},
	},
);
export const hashPos = (pos) => pos.join(',');
export const addPos = (a, b) => {
	const bb = [...b];
	return new Vec2(...a.map((v, i) => v + (bb[i] ?? 0)));
};
export const subPos = (a, b) => {
	const bb = [...b];
	return new Vec2(...a.map((v, i) => v - (bb[i] ?? 0)));
};
// export const addPos: FuncMapVector = (a, b) => {
// 	return a.map((v, i) => v + (b[i] ?? 0)) as typeof a;
// };
export const addScalar = (p, s) => {
	return new Vec2(...p.map((v) => v + s));
};
// export const subPos: FuncMapVector = (a, b) => {
// 	return a.map((v, i) => v - (b[i] ?? 0)) as typeof a;
// };
export const scalePos = (p, s) => {
	return new Vec2(...p.map((v) => v * s));
};
export const posEqual = (a, b) => {
	const aa = [...a];
	const bb = [...b];
	return aa.length === bb.length && aa.every((v, i) => equal(v, bb[i]));
};
export const equal = (a, b) => {
	return Math.abs(a - b) < Number.EPSILON;
};
export const indexToPos = (index, stride) =>
	new Vec2(index % stride, Math.floor(index / stride));
export const posToIndex = ([x, y], stride) => y * stride + x;
