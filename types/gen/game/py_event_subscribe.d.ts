// @ts-nocheck
declare interface PYEventRegister {
    convert_py_params(event_key: y3.Const.EventType, event_params: py.Dict): object;
    convert_py_params_instant(event_name: y3.Const.EventType, event_data: object, event_params: py.Dict): object;
    build_params_lazy_mt(event_data: object): object;
    convert_py_params_lazy(event_key: y3.Const.EventType, event_data: object, event_params: py.Dict): object;
    mark_subscribed(name: , args: any): boolean;
    event_register(event_manager: EventManager, event_name: y3.Const.EventType, extra_args: any): void;
}
