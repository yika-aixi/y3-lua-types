
declare type GameEventName = 
    | y3.Const.AbilityEventType
    | y3.Const.GlobalEventType
    | y3.Const.ItemEventType
    | y3.Const.UnitEventType
    | y3.Const.UIEventMap
    | y3.Const.UIEventType
    | y3.Const.ModifierEventType
    | y3.Const.ProjectileEventType
    | y3.Const.PlatformEventType
    | y3.Const.DestructibleEventType
    | y3.Const.MovementObstacleProcessType

declare interface GameEventDeclarations extends Record<GameEventName, object> {
    [y3.Const.GlobalEventType.UI_EVENT]: {
        // 触发事件的玩家
        player: Player,
        // ui事件变量名
        ui_event_name: string,
        // 触发事件控件名称
        comp_name: string,
        // 触碰坐标, todo 报错
        pos: Vector2,
        // 触碰ID
        touch_id: number
    }

    [y3.Const.GlobalEventType.CUSTOM_EVENT]: {
        c_param_1: any
        c_param_dict: any
    }
}

declare interface GameEventParams extends Record<GameEventName, (...args: [...any[], GameEventCallback<GameEventName>]) => void> {

    [y3.Const.GlobalEventType.UI_EVENT]: (event_name: string, fun: GameEventCallback<y3.Const.GlobalEventType.UI_EVENT>) => void
    [y3.Const.GlobalEventType.CUSTOM_EVENT]: (event_name: number, fun: GameEventCallback<y3.Const.GlobalEventType.CUSTOM_EVENT>) => void

}

//@ts-nocheck
declare type GameEventCallback<T> = (
    this: Trigger,
    data: T extends string
        ? T extends keyof GameEventDeclarations
        ? GameEventDeclarations[T]
        : { _py_params: LuaUserdata }
        : T,
) => void