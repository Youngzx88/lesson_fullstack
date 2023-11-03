interface Foo {
    name: string;
    age: number;
}
interface Joo {
    name: string;
    title: string;
}
declare let foo: Foo;
declare let joo: Joo;
declare let foo2: Foo;
declare let joo2: Joo;
interface obj1 {
    name: string;
    age: number;
}
type obj2 = {
    name: string;
    age: number;
};
declare var youngzx: obj1;
declare var yuwant: obj2;
interface Tmp {
    mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}
type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;
type res = First<[1, 2, 3]>;
declare const a: res;
type MapType<T> = {
    [k in keyof T]: [T[k], T[k], T[k]];
};
type bType = MapType<{
    a: number;
    b: string;
}>;
declare const a2: bType;
type MapKeyType<T> = {
    [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [
        T[Key],
        T[Key],
        T[Key]
    ];
};
type bTYoe = MapKeyType<['1', 'x']>;
type MapKeyType2<T> = {
    [k in Extract<keyof T, string> as `${k & string}label `]: [T[k], T[k], T[k]];
};
type P = Promise<'ajksdhjak'>;
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
declare const p1: GetValueType<P>;
declare const arr: (string | number)[];
type GetArrFirstValueType<arr extends unknown[]> = arr extends [infer firstType, ...unknown[]] ? firstType : never;
declare const a4: GetArrFirstValueType<[9, 2, 3]>;
declare const a5: GetArrFirstValueType<[number, string, boolean]>;
type GetArrLastValueType<arr extends unknown[]> = arr extends [...unknown[], infer lastType] ? lastType : never;
declare const a6: GetArrLastValueType<[9, 2, 3]>;
declare const a7: GetArrLastValueType<[number, string, boolean]>;
type GetArrSaveValueType<arr extends unknown[]> = arr extends [...infer arrType, unknown] ? arrType : never;
declare const a8: GetArrSaveValueType<[9, 2, 3]>;
declare const a9: GetArrSaveValueType<[number, string, boolean]>;
type startWitchType<str extends string, preFix extends string> = str extends `${preFix}${string}` ? true : false;
declare const s1: startWitchType<'youngzx', 'c'>;
type ReplaceStr<originalStr extends string, strWhoReplace extends string, replaceStr extends string> = originalStr extends `${infer pre}${strWhoReplace}${infer next}` ? `${pre}${replaceStr}${next}` : originalStr;
declare const a10 = "youngzx";
declare const b: ReplaceStr<'youngzx', 'ng', 'cj'>;
type trimRight<originalStr extends string> = originalStr extends `${infer Rest}${' ' | '\n' | '\t'}` ? trimRight<Rest> : originalStr;
type trimLeft<originalStr extends string> = originalStr extends `${' ' | '\n' | '\t'}${infer Rest}` ? trimLeft<Rest> : originalStr;
declare const s2: trimRight<'asdkja    '>;
declare const s3: trimLeft<'    asdkja'>;
declare const s4: trimRight<trimLeft<'    asdkja    '>>;
declare function trimString<Str extends string>(str: trimRight<trimLeft<Str>>): string;
declare let s: string;
declare let sTrimmed: string;
type GetParameters<func extends Function> = func extends (...args: infer Args) => unknown ? Args : never;
type HaveArgs = GetParameters<(name: string, age: number) => string>;
type noArgs = GetParameters<() => string>;
declare const hanshu: HaveArgs;
declare const hansh2u: noArgs;
type GetReturnType<func extends Function> = func extends (...args: infer Args) => infer ReturnType ? ReturnType : never;
type returnType = GetReturnType<() => number>;
declare const returnT: returnType;
type getKeyOf = {
    name: string;
    age: number;
};
type getKeys = keyof getKeyOf;
declare const a12: getKeys;
type mapKeyOf<T> = {
    [key in keyof T]: T[key];
};
