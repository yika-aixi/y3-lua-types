//@ts-nocheck
declare interface Game {
    /**
    *  注册引擎事件
    * @param event_type y3.Const.EventType
    * @param ... any
    * @return Trigger
    */
    event(event_type: y3.Const.EventType, ...vararg: any): Trigger;
    /**
    * @return EventManager
    */
    get_event_manager(): EventManager;
    /**
    * @param event_type y3.Const.EventType
    * @param ... any
    * @return any[]?
    * @return Trigger.CallBack
    */
    subscribe_event(event_type: y3.Const.EventType, ...vararg: any): [
        any[]?,
        Trigger.CallBack
    ];
}
