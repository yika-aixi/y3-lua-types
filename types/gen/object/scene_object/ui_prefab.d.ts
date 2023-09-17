//@ts-nocheck
declare interface UIPrefab {
    /**
    * @param player Player
    * @param ui_name string
    * @return self
    */
    __init(player: Player, ui_name: string): this;
    /**
    * 通过py层的界面实例获取lua层的界面实例
    * @param  player Player 玩家
    * @param  prefab_name string
    * @return UIPrefab # 返回在lua层初始化后的lua层技能实例
    */
    get_by_handle(player, prefab_name): UIPrefab;
    /**
    * 创建界面模块实例
    * @param  player Player 玩家
    * @param  prefab_name string 界面模块id
    * @param  parent_ui UI 父控件
    * @return UIPrefab
    */
    create(player, prefab_name, parent_ui): UIPrefab;
    /**
    * 删除界面模块实例
    */
    remove(): void;
    /**
    *  获取 UIPrefab 的 UI 实例
    * @param  player Player 玩家
    * @return UI
    */
    get_ui(player): UI;
}
