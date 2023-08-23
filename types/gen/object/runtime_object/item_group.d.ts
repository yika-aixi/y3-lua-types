//@ts-nocheck
declare interface ItemGroup {
    /**
    * @param py_item_group py.ItemGroup
    * @return self
    */
    __init(py_item_group: py.ItemGroup): self;
    /**
    * @param py_item_group py.ItemGroup
    * @return ItemGroup
    */
    create_lua_item_group_from_py(py_item_group: py.ItemGroup): ItemGroup;
    /**
    * 遍历物品组中玩家做动作
    * @return Item[]
    */
    pick(): Item[];
    /**
    * 筛选范围内的所有物品
    * @param point Point 点
    * @param shape Shape 筛选范围
    * @return ItemGroup
    */
    get_all_items_in_shapes(point: Point, shape: Shape): ItemGroup;
}
