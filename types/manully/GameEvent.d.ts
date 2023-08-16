
declare interface Game
{
    event<T extends string | object>(
            /** 事件名 */
            name: (T extends string ? T : string) | GameEventName,
            /** 事件的辅助参数 ，这里应该是 若干个， */
            ...args: T extends string 
            ? T extends keyof GameEventParams 
                ? Parameters<GameEventParams[T]>
                : [GameEventCallback<any> ]
            : [GameEventCallback<T>]
        ): Trigger;
}