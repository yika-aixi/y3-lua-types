//@ts-nocheck
declare interface UIPrefab {
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
    * @param  ui_name string ui实例
    * @return UIPrefab
    */
    create_ui_prefab_instance(player, prefab_name, ui_name): UIPrefab;
    /**
    * 删除界面模块实例
    */
    remove_ui_prefab(): void;
    /**
    *  获取 UIPrefab 的 UI 实例
    * @param  player Player 玩家
    * @return UI
    */
    get_ui(player): UI;
}
