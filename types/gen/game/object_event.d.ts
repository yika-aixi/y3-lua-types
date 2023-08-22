//@ts-nocheck
declare interface ObjectEvent {
    /**
    *  注册对象的引擎事件
    * @param event_name string
    * @param ... any
    * @return Trigger
    */
    event(event_name: string, ...vararg: any): Trigger;
    /**
    * @param event_name string
    * @param ... any
    * @return any[]?
    * @return Trigger.CallBack
    */
    subscribe_event(event_name: string, ...vararg: any): [
        any[]?,
        Trigger.CallBack
    ];
}
