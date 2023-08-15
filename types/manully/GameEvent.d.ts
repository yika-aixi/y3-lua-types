// @ts-nocheck
declare interface Game
{
    event(name:y3.Const.GlobalEventType, act:ActionArgsNoSelf):Trigger;

    event<TEName extends keyof Y3EventDeclarations>(name: TEName, act:Action1NoSelf<Y3EventDeclarations[TEName]>):Trigger;

    event<TEName extends keyof Y3EventDeclarations>(name: TEName, type:string, act:Action1NoSelf<Y3EventDeclarations[TEName]>):Trigger;
}