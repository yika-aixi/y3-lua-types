// @ts-nocheck
declare interface UIPrefab {
    get_by_handle(player: any, prefab_name: any): UIPrefab;
    create_ui_prefab_instance(player: any, prefab_name: any, ui_name: any): UIPrefab;
    remove_ui_prefab(): void;
}
