//@ts-nocheck
declare interface SceneUI {
    /**
    * @param py_scene_node py.SceneNode
    * @return self
    */
    __init(py_scene_node: py.SceneNode): self;
    /**
    * 通过py层的界面实例获取lua层的界面实例
    * @param py_scene_node py.SceneNode
    * @return SceneUI
    */
    get_by_handle(py_scene_node: py.SceneNode): SceneUI;
    /**
    * 创建场景界面到场景点
    * @param  sceneui string 控件
    * @param  point Point 点
    * @param  range? number 可见距离
    * @param  height? number 离地高度
    * @return SceneUI scene_ui 场景ui
    */
    create_scene_ui_at_point(sceneui, point, range, height): SceneUI;
    /**
    * 创建场景界面到玩家单位挂点
    * @param scene_ui_type string 场景ui类型
    * @param player Player 玩家
    * @param unit Unit 单位
    * @param socket_name string 挂接点名称
    * @param distance? number 可见距离
    * @return SceneUI scene_ui 场景ui
    */
    create_scene_ui_at_player_unit_socket(scene_ui_type: string, player: Player, unit: Unit, socket_name: string, distance): SceneUI;
    /**
    * 删除场景界面
    */
    remove_scene_ui(): void;
    /**
    * 设置场景界面对玩家的可见距离
    * @param player Player 玩家
    * @param dis number 可见距离
    */
    set_scene_ui_visible_distance(player: Player, dis: number): void;
}
