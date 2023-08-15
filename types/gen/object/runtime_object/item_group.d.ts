// @ts-nocheck
declare interface ItemGroup {
    create_lua_item_group_from_py(py_item_group: py.ItemGroup): ItemGroup;
    pick(): Item[];
    get_all_items_in_shapes(point: Point, shape: Shape): ItemGroup;
}
