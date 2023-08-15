//@ts-nocheck
declare interface Y3EventDeclarations
{
    "界面-消息":
    {
        // 触发事件的玩家
        player:Player,
        // ui事件变量名
        ui_event_name:string,
        // 触发事件控件名称
        comp_name:string,
        // 触碰坐标, todo 报错
        pos:py.Vector2,
        // 触碰ID
        touch_id:number
    }
}