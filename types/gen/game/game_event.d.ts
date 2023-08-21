// @ts-nocheck
declare interface Game {
    event(event_type: y3.Const.EventType, ...vararg: any): Trigger;
    get_event_manager(): EventManager;
    subscribe_event(event_type: y3.Const.EventType, ...vararg: any): [
        any[]?,
        Trigger.CallBack
    ];
}
