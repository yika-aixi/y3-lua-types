type Func<T, TOut> = (this : T) => TOut;
type FuncNoSelf<TOut> = (this : void) => TOut;
type FuncArgs<T,TOut> = (this : T ,...args : any[]) => TOut;
type FuncNoSelfArgs<TOut> = (this : void, ...args : any[]) => TOut;

type Func1<T, T1, TOut> = (this : T, arg : T1) => TOut;
type Func1Args<T, T1, TOut> = (this : T, arg : T1, ...args : any[]) => TOut;
type Func1NoSelf<T1, TOut> = (this : void, arg : T1) => TOut;
type Func1ArgsNoSelf<T1, TOut> = (this : void, arg : T1, ...args : any[]) => TOut;

type Func2<T,T1, T2, TOut> = (this : T, arg : T1, arg1 : T2) => TOut;
type Func2Args<T, T1, T2, TOut> = (this : T, arg : T1, arg2: T2, ...args : any[]) => TOut;
type Func2NoSelf<T1, T2, TOut> = (this : void, arg : T1, arg1 : T2) => TOut;
type Func2ArgsNoSelf<T, T1, T2, TOut> = (this : void, arg : T1, arg2: T2, ...args : any[]) => TOut;

type Func3<T, T1, T2, T3, TOut> = (this : T, arg : T1, arg2: T2, arg3: T3) => TOut;
type Func3SelfArgs<T, T1, T2, T3, TOut> = (this : T, arg : T1, arg2: T2, arg3: T3, ...args : any[]) => TOut;
type Func3NoSelf<T1, T2, T3, TOut> = (this : void, arg : T1, arg1 : T2, arg2 : T3) => TOut;
type Func3ArgsNoSelf<T, T1, T2, T3, TOut> = (this : void, arg : T1, arg2: T2, arg3: T3, ...args : any[]) => TOut;

type Action<TThis> = (this : TThis) => void;
type ActionArgs<TThis> = (this : TThis,...args : any[]) => void;
type ActionNoSelf = (this : void) => void;
type ActionArgsNoSelf = (this : void, ...args : any[]) => void;

type Action1<TThis, T1> = (this : TThis, arg : T1) => void;
type Action1Args<T, T1> = (this : T, arg : T1, ...args : any[]) => void;
type Action1NoSelf<T1> = (this : void, arg : T1) => void;
type Action1ArgsNoSelf<T1> = (this : void, arg : T1, ...args : any[]) => void;

type Action2<TThis,T1, T2> = (this:TThis,arg : T1, arg1 : T2) => void;
type Action2Args<T, T1, T2> = (this : T, arg : T1, arg1 : T2, ...args : any[]) => void;
type Action2NoSelf<T1, T2> = (this : void, arg : T1, arg1 : T2) => void;
type Action2ArgsNoSelf<T1, T2> = (this : void, arg : T1, arg1 : T2, ...args : any[]) => void;

type Action3<TThis,T1, T2, T3> = (this:TThis,arg : T1, arg2 : T2, arg3:T3) => void;
type Action3Args<T, T1, T2, T3> = (this : T, arg : T1, arg2 : T2, arg3:T3, ...args : any[]) => void;
type Action3NoSelf<T1, T2, T3> = (this : void, arg : T1, arg2 : T2, arg3 : T3) => void;
type Action3ArgsNoSelf<T1, T2, T3> = (this : void, arg : T1, arg2 : T2, arg3:T3, ...args : any[]) => void;