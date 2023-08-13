// @ts-nocheck
declare interface Game
{
    event(name:string, act:(...arg)=> void):Trigger;
}