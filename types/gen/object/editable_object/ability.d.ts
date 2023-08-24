//@ts-nocheck
declare interface Ability {
    /**
    * @param py_ability py.Ability
    * @return self
    */
    __init(py_ability: py.Ability): this;
    /**
    
    */
    __del(): void;
    /**
    * 通过py层的技能实例获取lua层的技能实例
    * @param py_ability py.Ability # py层的技能实例
    * @return Ability ability # 返回在lua层初始化后的lua层技能实例
    */
    get_by_handle(py_ability: py.Ability): Ability;
    /**
    * 是否受冷却缩减影响
    * @return boolean is_influenced 是否受冷却缩减影响
    */
    is_cd_reduce(): boolean;
    /**
    * 消耗生命是否会死亡
    * @return boolean is_cost 消耗生命是否会死亡
    */
    is_cost_hp_can_die(): boolean;
    /**
    * 生命不足是否可以释放
    * @return boolean can_cast 生命不足是否可以释放
    */
    can_cast_when_hp_insufficient(): boolean;
    /**
    * 是否具有标签
    * @param tag string 标签
    * @return boolean
    */
    has_tag(tag: string): boolean;
    /**
    * 启用技能
    */
    enable(): void;
    /**
    * 禁用技能
    */
    disable(): void;
    /**
    * 进入冷却
    */
    restart_cd(): void;
    /**
    * 完成冷却
    */
    complete_cd(): void;
    /**
    * 移除技能
    */
    remove(): void;
    /**
    * 设置技能等级
    * @param level integer 等级
    */
    set_level(level: number): void;
    /**
    * 增加冷却时间
    * @param value number 冷却
    */
    add_cd(value: number): void;
    /**
    * 设置充能层数
    * @param value integer 层数
    */
    set_stack(value: number): void;
    /**
    
    */
    get_name(): void;
    /**
    * 设置实数属性
    * @param key string 属性key
    * @param value number 属性值
    */
    set_float_attr(key: string, value: number): void;
    /**
    * 设置整数属性
    * @param key string 属性key
    * @param value integer 属性值
    */
    set_int_attr(key: string, value: number): void;
    /**
    * 设置剩余冷却时间
    * @param value number 剩余冷却时间
    */
    set_cd(value: number): void;
    /**
    * 增加技能等级
    * @param value integer 等级
    */
    add_level(value: number): void;
    /**
    * 增加技能充能层数
    * @param value integer 层数
    */
    add_stack(value: number): void;
    /**
    * 增加技能剩余冷却时间
    * @param value number 剩余冷却时间
    */
    add_remaining_cd(value: number): void;
    /**
    * 增加实数属性
    * @param key string 属性key
    * @param value number 属性值
    */
    add_float_attr(key: string, value: number): void;
    /**
    * 增加整数属性
    * @param key string 属性key
    * @param value integer 属性值
    */
    add_int_attr(key: string, value: number): void;
    /**
    * 设置技能名字
    * @param name string 技能名字
    */
    set_name(name: string): void;
    /**
    * 设置技能描述
    * @param des string 描述
    */
    set_description(des: string): void;
    /**
    * 学习技能
    */
    learn(): void;
    /**
    * 设置技能剩余充能时间
    * @param value number 剩余充能时间
    */
    set_charge_time(value: number): void;
    /**
    * 设置技能施法范围
    * @param value number 施法范围
    */
    set_range(value: number): void;
    /**
    * 设置技能施法范围
    * @return number # 施法范围
    */
    get_range(): number;
    /**
    * 设置技能玩家属性消耗
    * @param key string 属性key
    * @param value number 属性值
    */
    set_player_attr_cost(key: string, value: number): void;
    /**
    * 增加技能玩家属性消耗
    * @param key string 属性key
    * @param value number 属性值
    */
    add_player_attr_cost(key: string, value: number): void;
    /**
    * 设置技能是否受冷却缩减的影响
    * @param is_influenced boolean 属性key
    */
    set_cd_reduce(is_influenced: boolean): void;
    /**
    * 设置消耗生命是否会死亡
    * @param can_die boolean 是否会死亡
    */
    set_is_cost_hp_can_die(can_die: boolean): void;
    /**
    * 设置生命不足时是否可以释放技能
    * @param can_cast boolean 是否可以释放
    */
    set_can_cast_when_hp_insufficient(can_cast: boolean): void;
    /**
    * 设置扇形指示器半径
    * @param value number 半径
    */
    set_sector_radius(value: number): void;
    /**
    * 设置扇形指示器夹角
    * @param value number 角度
    */
    set_sector_angle(value: number): void;
    /**
    * 设置箭头/多段指示器长度
    * @param value number 长度
    */
    set_arrow_length(value: number): void;
    /**
    * 设置箭头/多段指示器宽度
    * @param value number 宽度
    */
    set_arrow_width(value: number): void;
    /**
    * 设置箭圆形指示器半径
    * @param value number 半径
    */
    set_circle_radius(value: number): void;
    /**
    * 设置技能指示器类型
    * @param type y3.Const.AbilityPointerType 技能指示器类型
    */
    set_pointer_type(type: y3.Const.AbilityPointerType): void;
    /**
    * 获取技能当前剩余充能时间
    * @return number
    */
    get_charge_time(): number;
    /**
    * 获取技能种类
    * @return y3.Const.AbilityType type 技能种类
    */
    get_type(): y3.Const.AbilityType;
    /**
    * 获取技能类型id(物编id)
    * @return py.AbilityKey ability_key 技能类型id(物编id)
    */
    get_ability_key(): py.AbilityKey;
    /**
    * 获取技能所在技能位
    * @return y3.Const.AbilityIndex index 技能所在技能位
    */
    get_slot(): y3.Const.AbilityIndex;
    /**
    * 获取技能消耗的玩家属性值
    * @param key string 属性key
    * @return number cost 玩家属性值
    */
    get_player_attr_cost(key: string): number;
    /**
    * 获取技能释放类型 AbilityCastType
    * @return py.AbilityCastType type 技能释放类型
    */
    get_cast_type(): py.AbilityCastType;
    /**
    * 获取技能公式类型的kv
    * @param key string 键值key
    * @return number value 值
    */
    get_formula_kv(key: string): number;
    /**
    * 获取实数属性
    * @param key string 键值key
    * @return number value 值
    */
    get_float_attr(key: string): number;
    /**
    * 获取整数属性
    * @param key string 键值key
    * @return number value 值
    */
    get_int_attr(key: string): number;
    /**
    * 获取字符串属性
    * @param key py.AbilityStrAttr 键值key
    * @return string value 值
    */
    get_string_attr(key: py.AbilityStrAttr): string;
    /**
    * 获取技能的拥有者
    * @return Unit owner 技能拥有者
    */
    get_owner(): Unit;
    /**
    * 获取当前冷却时间
    * @return number time 当前冷却时间
    */
    get_cd(): number;
    /**
    * 是否存在
    * @return boolean is_exist 是否存在
    */
    is_destory(): boolean;
    /**
    * @param cast integer 施法ID
    * @return Unit|Destructible|Item|Point|nil target 目标
    */
    get_target(cast: number): Unit | Destructible | Item | Point | undefined;
    /**
    * 显示技能指示器
    * @param player Player 玩家
    */
    show_indicator(player: Player): void;
    /**
    * 类的方法
    * 检查技能类型前置条件
    * @param player Player 玩家
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @return boolean is_meet 技能类型前置条件是否满足
    */
    check_precondition_by_key(player: Player, ability_key: py.AbilityKey): boolean;
    /**
    * 技能类型是否受冷却缩减影响
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @return boolean is_influenced 技能类型是否受冷却缩减影响
    */
    is_cd_reduce_by_key(ability_key: py.AbilityKey): boolean;
    /**
    * 获取技能类型实数属性
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @param key string 键值key
    * @return number value 值
    */
    get_float_attr_by_key(ability_key: py.AbilityKey, key: string): number;
    /**
    * 获取技能类型整数属性
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @param key string 键值key
    * @return integer value 值
    */
    get_int_attr_by_key(ability_key: py.AbilityKey, key: string): number;
    /**
    * 设置玩家的普攻预览状态
    * @param player Player 玩家
    * @param state boolean 状态 开/关
    */
    set_normal_attack_preview_state(player: Player, state: boolean): void;
    /**
    * 设置玩家的指示器在智能施法时是否显示
    * @param player Player 玩家
    * @param state boolean 状态 开/关
    */
    set_smart_cast_with_pointer(player: Player, state: boolean): void;
    /**
    * 关闭技能指示器
    * @param player Player 玩家
    */
    hide_pointer(player: Player): void;
    /**
    * 获取技能类型的icon图标的图片ID
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @return integer id 图片ID
    */
    get_icon_by_key(ability_key: py.AbilityKey): number;
    /**
    * 开关自动施法
    * @param enable boolean 开关
    */
    set_autocast(enable: boolean): void;
    /**
    * 获取技能类型公式属性
    * @param ability_id py.AbilityKey 技能类型id(物编id)
    * @param attr_name string 属性名称
    * @param level integer 技能等级
    * @param stack_count integer 技能层数
    * @param unit_hp_max number 单位最大生命
    * @param unit_hp_cur number 单位当前生命
    * @return number value 值
    */
    get_formula_attr_by_key(ability_id: py.AbilityKey, attr_name: string, level: number, stack_count: number, unit_hp_max: number, unit_hp_cur: number): number;
    /**
    * 获取技能类型字符串属性
    * @param ability_key py.AbilityKey 技能类型id (物编id)
    * @param key py.AbilityStrAttr 键值key
    * @return string str 值
    */
    get_str_attr_by_key(ability_key: py.AbilityKey, key: py.AbilityStrAttr): string;
    /**
    * 设置技能图标
    * @param icon_id integer 图片id
    */
    set_icon(icon_id: number): void;
    /**
    * 设置技能的建造朝向
    * @param angle number 角度
    */
    set_build_rotate(angle: number): void;
    /**
    * 获取技能的指示器类型
    * @return y3.Const.AbilityPointerType
    */
    get_skill_pointer(): y3.Const.AbilityPointerType;
    /**
    * 获取技能类型的指示器类型
    * @param name py.AbilityKey
    * @return y3.Const.AbilityPointerType
    */
    get_skill_type_pointer(name: py.AbilityKey): y3.Const.AbilityPointerType;
    /**
    * 设置技能最大CD
    * @param value number
    */
    set_max_cd(value: number): void;
}
