// @ts-nocheck
declare interface SceneUI {
    get_by_handle(py_scene_node: py.SceneNode): SceneUI;
    create_scene_ui_at_point(sceneui: any, point: any, range: any, height: any): SceneUI;
    create_scene_ui_at_player_unit_socket(scene_ui_type: string, player: Player, unit: Unit, socket_name: string, distance: any): SceneUI;
    remove_scene_ui(): void;
    set_scene_ui_visible_distance(player: Player, dis: number): void;
}
