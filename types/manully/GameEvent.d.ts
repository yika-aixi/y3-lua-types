// //@ts-nocheck
declare type GameEventCallback<T> = Action1<
    Trigger,
    T extends string ?
        T extends keyof GameEventDeclarations ?
            GameEventDeclarations[T] : { _py_params: LuaUserdata }
        :
        T
>

declare interface Game
{
    event<T extends string | object>(
        /** 事件名 */
        name: (T extends string ? T : string) | GameEventNames,
        /** 事件的辅助参数 ，这里应该是 若干个， */
        ...args: T extends string
            ? T extends keyof GameEventParamsDeclarations
                ? Parameters<GameEventParamsDeclarations[T]>
                : [GameEventCallback<any> ]
            : [GameEventCallback<T>]
    ): Trigger;
}