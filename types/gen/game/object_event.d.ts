// @ts-nocheck
declare interface ObjectEvent {
    event(event_name: string, ...vararg: any): Trigger;
    subscribe_event(event_name: string, ...vararg: any): [
        any[]?,
        Trigger.CallBack
    ];
}
