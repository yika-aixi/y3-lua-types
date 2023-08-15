// @ts-nocheck
declare interface Game
{
    event(name:y3.Const.GlobalEventType, act:ActionArgsNoSelf):Trigger;

    event<TEName extends keyof GlobalEvent>(name: TEName, act:Action1NoSelf<GlobalEvent[TEName]>):Trigger;

    event<TEName extends keyof GlobalEvent>(name: TEName, type:string, act:Action1NoSelf<GlobalEvent[TEName]>):Trigger;
}