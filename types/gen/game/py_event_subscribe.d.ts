//@ts-nocheck
declare interface PYEventRegister {
    /**
    * @private
    * @param event_key y3.Const.EventType
    * @param event_params py.Dict
    * @return table
    */
    convert_py_params(event_key: y3.Const.EventType, event_params: py.Dict): object;
    /**
    * @private
    * @param event_name y3.Const.EventType
    * @param event_data table
    * @param event_params py.Dict
    * @return table
    */
    convert_py_params_instant(event_name: y3.Const.EventType, event_data: object, event_params: py.Dict): object;
    /**
    * @private
    * @param event_data table
    * @return table
    */
    build_params_lazy_mt(event_data: object): object;
    /**
    * @private
    * @param event_key y3.Const.EventType
    * @param event_data table
    * @param event_params py.Dict
    * @return table
    */
    convert_py_params_lazy(event_key: y3.Const.EventType, event_data: object, event_params: py.Dict): object;
    /**
    *  如果已经被标记过，会返回false
    * @private
    * @param name  string
    * @param args? any[]
    * @return boolean
    */
    mark_subscribed(name: , args): boolean;
    /**
    * @param event_name y3.Const.EventType # 注册给引擎的事件名
    * @param extra_args? any[] # 额外参数
    */
    event_register(event_name: y3.Const.EventType, extra_args): void;
}
