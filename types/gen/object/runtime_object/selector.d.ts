//@ts-nocheck
declare interface Selector {
    /**
    * @return self
    */
    __init(): this;
    /**
    *  形状  添加形状对象
    * @param pos Point
    * @param shape Shape
    * @return self
    */
    in_shape(pos: Point, shape: Shape): this;
    /**
    *  条件  属于某个玩家
    * @param p Player
    * @return self
    */
    of_player(p: Player): this;
    /**
    *  条件  对某个玩家可见
    * @param p Player
    * @return self
    */
    is_visible(p: Player): this;
    /**
    *  条件  对某个玩家不可见
    * @param p Player
    * @return self
    */
    not_visible(p: Player): this;
    /**
    *  条件  不在某个单位组中
    * @param ug UnitGroup
    * @return self
    */
    not_in_group(ug: UnitGroup): this;
    /**
    *  条件  拥有特定标签
    * @param tag string
    * @return self
    */
    with_tag(tag: string): this;
    /**
    *  条件  不拥有特定标签
    * @param tag string
    * @return self
    */
    without_tag(tag: string): this;
    /**
    *  条件  不是某个特定的单位
    * @param u Unit
    * @return self
    */
    not_is(u: Unit): this;
    /**
    *  条件  拥有某个特定的状态
    * @param state integer
    * @return self
    */
    in_state(state: number): this;
    /**
    *  条件  不拥有某个特定的状态
    * @param state integer
    * @return self
    */
    not_in_state(state: number): this;
    /**
    *  条件  是某个特定的单位类型
    * @param unit_key py.UnitKey
    * @return self
    */
    is_unit_key(unit_key: py.UnitKey): this;
    /**
    *  条件  是某个特定的单位类型
    * @param unit_type py.UnitType
    * @return self
    */
    is_unit_type(unit_type: py.UnitType): this;
    /**
    *  选项  包含死亡的单位
    * @return self
    */
    include_dead(): this;
    /**
    *  选项  选取的数量
    * @param count integer
    * @return self
    */
    count(count: number): this;
    /**
    *  进行选取
    * @return UnitGroup
    */
    get(): UnitGroup;
    /**
    *  创建选取器
    * @return Selector
    */
    create(): Selector;
}
