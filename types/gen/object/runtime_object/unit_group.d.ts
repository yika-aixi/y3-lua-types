//@ts-nocheck
declare interface UnitGroup {
    /**
    * @param py_unit_group py.UnitGroup
    * @return self
    */
    __init(py_unit_group: py.UnitGroup): self;
    /**
    * @param py_unit_group py.UnitGroup
    * @return UnitGroup
    */
    get_by_handle(py_unit_group: py.UnitGroup): UnitGroup;
    /**
    * 遍历单位组中单位做动作
    * @return Unit[]
    */
    pick(): Unit[];
    /**
    * 根据单位组选中单位
    */
    select_units(): void;
    /**
    * 添加单位
    * @param unit Unit 单位
    */
    add_unit(unit: Unit): void;
    /**
    * 移除单位
    * @param unit Unit 单位
    */
    remove_unit(unit: Unit): void;
    /**
    * 移除单位类型
    * @param unit_key py.UnitKey 单位类型id
    */
    remove_units_by_key(unit_key: py.UnitKey): void;
    /**
    * 单位组中随机整数个单位
    * @param count integer
    * @return UnitGroup unit_group  随机整数个单位
    */
    pick_random_n(count: number): UnitGroup;
    /**
    * 挑选指定单位类型的单位
    * @param unit_key py.UnitKey 单位类型id
    * @return UnitGroup unit_group 单位组
    */
    pick_by_key(unit_key: py.UnitKey): UnitGroup;
    /**
    * 获取单位组中单位数量
    * @return integer unit_group_num 单位数量
    */
    count(): number;
    /**
    * 单位组中单位类型的数量
    * @param unit_key py.UnitKey
    * @return integer num_of_unit 单位类型的数量
    */
    count_by_key(unit_key: py.UnitKey): number;
    /**
    * 获取单位组内第一个单位
    * @return Unit unit 单位组内第一个单位
    */
    get_first(): Unit;
    /**
    * 获取单位组中随机一个单位
    * @return Unit unit 单位组中随机一个单位
    */
    get_random(): Unit;
    /**
    * 获取单位组内最后一个单位
    * @return Unit unit 最后一个单位
    */
    get_last(): Unit;
}
