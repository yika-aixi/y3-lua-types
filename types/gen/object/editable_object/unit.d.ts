//@ts-nocheck
declare interface Unit {
    /**
    
    */
    __tostring(): void;
    /**
    * @param py_unit_id py.UnitID
    * @param py_unit py.Unit
    * @return self
    */
    __init(py_unit_id: py.UnitID, py_unit: py.Unit): this;
    /**
    
    */
    __del(): void;
    /**
    * 通过py层的单位实例获取lua层的单位实例
    * @param py_unit py.Unit
    * @return Unit
    */
    get_by_handle(py_unit: py.Unit): Unit;
    /**
    *  根据唯一ID获取单位。
    * @param id py.UnitID
    * @return Unit?
    */
    get_by_id(id: py.UnitID): Unit?;
    /**
    *  获取摆放在场景上的单位
    * @param res_id integer
    * @return Unit
    */
    get_by_res_id(res_id: number): Unit;
    /**
    * 是否存在
    * @return boolean is_exist 是否存在
    */
    is_exist(): boolean;
    /**
    *  获取唯一ID
    * @return integer
    */
    get_id(): number;
    /**
    * 移除技能(指定类型)
    * @param type y3.Const.AbilityType 技能类型
    * @param ability_key py.AbilityKey 物编id
    */
    remove_abilitiy_by_key(type: y3.Const.AbilityType, ability_key: py.AbilityKey): void;
    /**
    * 单位添加物品
    * @param item_id py.ItemKey 物品id
    * @return Item
    */
    add_item(item_id: py.ItemKey): Item;
    /**
    * 单位移除物品
    * @param item_id py.ItemKey 物品id
    * @param num integer 数量
    */
    remove_item(item_id: py.ItemKey, num: number): void;
    /**
    * 移动物品
    * @param item Item 物品
    * @param type y3.Const.ShiftSlotTypeAlias
    * @param index integer 槽位
    * @param force boolean 是否强制移动，`true`: 如果目标有物品，则移动到另一个空格中；`false`: 如果目标有物品，则要移动的物品会掉落
    */
    shift_item(item: Item, type: y3.Const.ShiftSlotTypeAlias, index: number, force: boolean): void;
    /**
    *  交换物品
    *  如果目标位置是空的，则相当于把物品移动了过去
    * @param item Item 物品
    * @param type y3.Const.ShiftSlotTypeAlias
    * @param index integer 槽位
    */
    exchange_item(item: Item, type: y3.Const.ShiftSlotTypeAlias, index: number): void;
    /**
    * 获取指定类型的所有技能
    * @param type y3.Const.AbilityType
    * @return Ability[]
    */
    get_abilities_by_type(type: y3.Const.AbilityType): Ability[];
    /**
    * 获取单位身上的魔法效果
    * @return Buff[] # 魔法效果表
    */
    get_buffs(): Buff[];
    /**
    * 交换技能位置
    * @param ability_1 Ability 第一个技能
    * @param ability_2 Ability 第二个技能
    */
    switch_ability(ability_1: Ability, ability_2: Ability): void;
    /**
    * 根据坑位交换技能
    * @param type_1 y3.Const.AbilityType 第一个技能类型
    * @param slot_1 y3.Const.AbilityIndex 第一个技能坑位
    * @param type_2 y3.Const.AbilityType 第二个技能类型
    * @param slot_2 y3.Const.AbilityIndex 第二个技能坑位
    */
    switch_ability_by_slot(type_1: y3.Const.AbilityType, slot_1: y3.Const.AbilityIndex, type_2: y3.Const.AbilityType, slot_2: y3.Const.AbilityIndex): void;
    /**
    * 停止所有技能
    */
    stop_all_abilities(): void;
    /**
    * 添加技能
    * @param type y3.Const.AbilityType 技能类型
    * @param id py.AbilityKey 物编id
    * @param slot? y3.Const.AbilityIndex 技能位
    * @param level? integer 等级
    */
    add_ability(type: y3.Const.AbilityType, id: py.AbilityKey, slot, level): void;
    /**
    * 移除技能
    * @param type y3.Const.AbilityType 技能类型
    * @param slot y3.Const.AbilityIndex 技能位
    */
    remove_ability(type: y3.Const.AbilityType, slot: y3.Const.AbilityIndex): void;
    /**
    * 通过技能名寻找技能
    * @param type y3.Const.AbilityType | y3.Const.AbilityTypeAlias 技能类型
    * @param id py.AbilityKey 物编id
    * @return Ability? ability 技能
    */
    find_ability(type: y3.Const.AbilityType, id: py.AbilityKey): Ability?;
    /**
    * 获得某个技能位的的技能
    * @param type y3.Const.AbilityType 技能类型
    * @param slot y3.Const.AbilityIndex 技能位
    * @return Ability? ability 技能
    */
    get_ability_by_slot(type: y3.Const.AbilityType, slot: y3.Const.AbilityIndex): Ability?;
    /**
    * 获取单位背包槽位上的物品
    * @param type y3.Const.SlotType 槽位类型
    * @param slot integer 位置
    * @return Item? item 物品
    */
    get_item_by_slot(type: y3.Const.SlotType, slot: number): Item?;
    /**
    * 单位的所有物品
    * @return ItemGroup item_group 所有物品
    */
    get_all_items(): ItemGroup;
    /**
    * 单位获得科技
    * @param tech_key py.TechKey 科技类型
    */
    unit_gains_tech(tech_key: py.TechKey): void;
    /**
    * 创建单位
    * @param owner Player|Unit
    * @param unit_id py.UnitKey 单位类型
    * @param point Point 点
    * @param direction number 方向
    * @return Unit
    */
    create_unit(owner: Player | Unit, unit_id: py.UnitKey, point: Point, direction: number): Unit;
    /**
    * 杀死单位
    * @param killer Unit 凶手单位
    */
    kill_by(killer: Unit): void;
    /**
    * 单位是否有正在释放的技能
    * @return boolean
    */
    is_casting(): boolean;
    /**
    * 创建幻象
    * @param illusion_unit Unit 幻象复制的单位
    * @param call_unit Unit 召唤单位
    * @param player Player 玩家
    * @param point Point 点
    * @param direction number 方向
    * @param clone_hp_mp boolean 复制当前的生命值和魔法值
    */
    create_illusion(illusion_unit: Unit, call_unit: Unit, player: Player, point: Point, direction: number, clone_hp_mp: boolean): void;
    /**
    * 删除单位
    */
    remove(): void;
    /**
    * 传送到点
    * @param point Point 点
    */
    blink(point: Point): void;
    /**
    * 强制传送到点
    * @param point Point 点
    * @param isSmooth boolean 是否丝滑
    */
    set_point(point: Point, isSmooth: boolean): void;
    /**
    * 复活单位
    * @param point? Point 点
    */
    reborn(point): void;
    /**
    * 造成治疗
    * @param value number 治疗值
    * @param skill? Ability 技能
    * @param source_unit? Unit 单位
    * @param text_type? string 跳字类型
    */
    heals(value: number, skill, source_unit, text_type): void;
    /**
    * 添加标签
    * @param tag string 标签
    */
    add_tag(tag: string): void;
    /**
    * 移除标签
    * @param tag string 标签
    */
    remove_tag(tag: string): void;
    /**
    * 添加状态
    * @param state_enum integer 状态名
    */
    add_state(state_enum: number): void;
    /**
    * 移除状态
    * @param state_enum integer 状态名
    */
    remove_state(state_enum: number): void;
    /**
    * 学习技能
    * @param ability_key py.AbilityKey 技能id
    */
    learn(ability_key: py.AbilityKey): void;
    /**
    * 发布命令
    * @param command py.UnitCommand 命令
    */
    command(command: py.UnitCommand): void;
    /**
    *  命令移动
    * @param point Point 点
    * @param range? number 范围
    * @return py.UnitCommand # 命令
    */
    move_to_pos(point: Point, range): py.UnitCommand;
    /**
    *  命令停止
    * @return py.UnitCommand # 命令
    */
    stop(): py.UnitCommand;
    /**
    *  命令驻守
    * @param point Point 点
    * @return py.UnitCommand # 命令
    */
    hold(point: Point): py.UnitCommand;
    /**
    *  命令攻击移动
    * @param point Point 点
    * @param range? number 范围
    * @return py.UnitCommand # 命令
    */
    attack_move(point: Point, range): py.UnitCommand;
    /**
    *  命令攻击目标
    * @param target Unit 目标
    * @param range number 范围
    * @return py.UnitCommand # 命令
    */
    attack_target(target: Unit, range: number): py.UnitCommand;
    /**
    *  命令沿路径移动
    * @param road Road 路径
    * @param patrol_mode integer 移动模式
    * @param can_attack boolean 是否自动攻击
    * @param start_from_nearest boolean 就近选择起始点
    * @param back_to_nearest boolean 偏离后就近返回
    * @return py.UnitCommand # 命令
    */
    move_along_road(road: Road, patrol_mode: number, can_attack: boolean, start_from_nearest: boolean, back_to_nearest: boolean): py.UnitCommand;
    /**
    *  命令发动技能
    * @param ability Ability # 技能
    * @param target? Point|Unit|Item|Destructible # 目标
    * @param extra_target? Point # 额外目标
    * @return py.UnitCommand
    */
    cast(ability: Ability, target, extra_target): py.UnitCommand;
    /**
    *  命令拾取物品
    * @param item Item
    * @return py.UnitCommand
    */
    pick_item(item: Item): py.UnitCommand;
    /**
    *  命令丢弃物品
    * @param item Item
    * @param point Point
    * @return py.UnitCommand
    */
    drop_item(item: Item, point: Point): py.UnitCommand;
    /**
    *  命令给予物品
    * @param item Item
    * @param target Unit
    * @return py.UnitCommand
    */
    give_item(item: Item, target: Unit): py.UnitCommand;
    /**
    *  命令使用物品
    * @param item Item
    * @param target? Point|Unit|Item|Destructible
    * @param extra_target? Point
    * @return py.UnitCommand
    */
    use_item(item: Item, target, extra_target): py.UnitCommand;
    /**
    *  命令跟随单位
    * @param target Unit
    * @return py.UnitCommand
    */
    follow(target: Unit): py.UnitCommand;
    /**
    * 设置朝向
    * @param direction number 朝向
    * @param turn_time number 转向时间
    */
    set_facing(direction: number, turn_time: number): void;
    /**
    * 设置名称
    * @param name string 名称
    */
    set_name(name: string): void;
    /**
    * 设置描述
    * @param description string 描述
    */
    set_description(description: string): void;
    /**
    * 设置属性
    * @param attr_name string 属性名
    * @param value number 属性值
    * @param attr_type string 属性类型
    */
    set_attr(attr_name: string, value: number, attr_type: string): void;
    /**
    * 增加属性
    * @param attr_name string 属性名
    * @param value number 属性值
    * @param attr_type string 属性类型
    */
    add_attr(attr_name: string, value: number, attr_type: string): void;
    /**
    * 设置等级
    * @param level integer 等级
    */
    set_level(level: number): void;
    /**
    * 增加等级
    * @param level integer 等级
    */
    add_level(level: number): void;
    /**
    * 设置经验
    * @param exp number 经验
    */
    set_exp(exp: number): void;
    /**
    * 增加经验值
    * @param exp number 经验
    */
    add_exp(exp: number): void;
    /**
    * 设置当前生命值
    * @param hp number 当前生命值
    */
    set_hp(hp: number): void;
    /**
    * 增加当前生命值
    * @param hp number 当前生命值
    */
    add_hp(hp: number): void;
    /**
    * 设置当前魔法值
    * @param mp number 当前魔法值
    */
    set_mp(mp: number): void;
    /**
    * 增加当前魔法值
    * @param mp number 当前魔法值
    */
    add_mp(mp: number): void;
    /**
    * 设置技能点
    * @param skill_point integer 技能点
    */
    set_ability_point(skill_point: number): void;
    /**
    * 增加技能点
    * @param skill_point integer 技能点
    */
    add_ability_point(skill_point: number): void;
    /**
    * 改变所属玩家
    * @param player Player 所属玩家
    */
    change_owner(player: Player): void;
    /**
    * 设置飞行高度
    * @param height number 高度
    * @param trans_time number 过渡时间
    */
    set_height(height: number, trans_time: number): void;
    /**
    * 设置生命周期
    * @param time number 生命周期
    */
    set_life_cycle(time: number): void;
    /**
    * 设置生命周期暂停状态
    * @param is_stop boolean 生命周期暂停状态
    */
    pause_life_cycle(is_stop: boolean): void;
    /**
    * 设置警戒范围
    * @param range number 范围
    */
    set_alert_range(range: number): void;
    /**
    * 设置取消警戒范围
    * @param range number 取消警戒范围
    */
    set_cancel_alert_range(range: number): void;
    /**
    * 设置背包栏的槽位数
    * @param number integer 槽位数
    */
    set_pkg_cnt(number: number): void;
    /**
    * 设置物品栏的槽位数
    * @param number integer 槽位数
    */
    set_bar_cnt(number: number): void;
    /**
    * 设置默认单位行为
    * @param behavior py.UnitBehavior 单位行为
    */
    set_behavior(behavior: py.UnitBehavior): void;
    /**
    * ******************************************
    * 设置属性成长
    * @param unit_key py.UnitKey 单位id
    * @param attr_name string 属性名
    * @param value number 属性成长
    */
    set_attr_growth(unit_key: py.UnitKey, attr_name: string, value: number): void;
    /**
    * 设置被击杀的经验值奖励
    * @param exp number 经验
    */
    set_reward_exp(exp: number): void;
    /**
    * 设置被击杀的玩家属性奖励
    * @param player_attr_name py.RoleResKey 属性名
    * @param value number 属性奖励
    */
    set_reward_res(player_attr_name: py.RoleResKey, value: number): void;
    /**
    * 设置攻击类型
    * @param attack_type integer 攻击类型
    */
    set_attack_type(attack_type: number): void;
    /**
    * 设置护甲类型
    * @param armor_type integer 护甲类型
    */
    set_armor_type(armor_type: number): void;
    /**
    * ************************残影优化
    * 开启残影
    * @param red number 红
    * @param green number 绿
    * @param blue number 蓝
    * @param alpha number 透明度
    * @param interval number 间隔时间
    * @param duration number 显示时间
    * @param start_time number 开始时间
    * @param end_time number 结束时间
    * @param is_origin_martial boolean 使用原生材质
    */
    start_ghost(red: number, green: number, blue: number, alpha: number, interval: number, duration: number, start_time: number, end_time: number, is_origin_martial: boolean): void;
    /**
    * 关闭残影
    */
    stop_ghost(): void;
    /**
    * 设置残影颜色
    * @param red number 绿
    * @param green number 绿
    * @param blue number 蓝
    * @param alpha number 透明度
    */
    set_ghost_color(red: number, green: number, blue: number, alpha: number): void;
    /**
    * 设置残影时间
    * @param interval number 间隔时间
    * @param duration number 显示时间
    * @param start_time number 开始时间
    * @param end_time number 结束时间
    */
    set_afterimage_time(interval: number, duration: number, start_time: number, end_time: number): void;
    /**
    * 设置单位头像
    * @param img_id py.Texture 单位头像
    */
    set_icon(img_id: py.Texture): void;
    /**
    * 设置血条样式
    * @param bar_type integer 血条样式
    */
    set_blood_bar_type(bar_type: number): void;
    /**
    * 设置血条显示方式
    * @param bar_show_type integer 血条显示方式
    */
    set_health_bar_display(bar_show_type: number): void;
    /**
    * ***************敌我合并一条
    * 设置单位小地图头像
    * @param img_id py.Texture 单位小地图头像
    */
    set_minimap_icon(img_id: py.Texture): void;
    /**
    * 设置敌方单位小地图头像
    * @param img_id py.Texture 敌方单位小地图头像
    */
    set_enemy_minimap_icon(img_id: py.Texture): void;
    /**
    * 设置单位选择框的可见性
    * @param bool boolean # 布尔值
    */
    set_select_effect_visible(bool: boolean): void;
    /**
    * 设置模型缩放
    * @param scale number 模型缩放
    */
    set_scale(scale: number): void;
    /**
    * 设置转身速度
    * @param speed number 转身速度
    */
    set_turning_speed(speed: number): void;
    /**
    * 替换模型
    * @param model_id py.ModelKey 模型id
    */
    replace_model(model_id: py.ModelKey): void;
    /**
    * 取消模型替换
    * @param model_id py.ModelKey 模型id
    */
    cancel_replace_model(model_id: py.ModelKey): void;
    /**
    * **********************这是啥
    * 设置隐身可见时是否半透明
    * @param is_visible boolean 是否半透明
    */
    set_transparent_when_invisible(is_visible: boolean): void;
    /**
    * 设置尸体消失后是否回收
    * @param is_recycle boolean 是否回收
    */
    set_recycle_on_remove(is_recycle: boolean): void;
    /**
    * 设置透视状态
    * @param is_open boolean 是否透视
    */
    set_Xray_is_open(is_open: boolean): void;
    /**
    * 单位添加科技
    * @param tech_id py.TechKey 科技id
    */
    add_tech(tech_id: py.TechKey): void;
    /**
    * 单位删除科技
    * @param tech_id py.TechKey 科技id
    */
    remove_tech(tech_id: py.TechKey): void;
    /**
    * 研究科技
    * @param tech_id py.TechKey 科技id
    */
    research_tech(tech_id: py.TechKey): void;
    /**
    * 获取单位可研究的所有科技
    * @return py.TechKey[]
    */
    get_tech_list(): py.TechKey[];
    /**
    * 获取单位受到影响的所有科技
    * @return py.TechKey[]
    */
    get_affect_techs(): py.TechKey[];
    /**
    *  设置白天的视野范围
    * @param value number
    */
    set_day_vision(value: number): void;
    /**
    *  设置夜晚的视野范围
    * @param value number
    */
    set_night_value(value: number): void;
    /**
    * *******************播放动画全局统一
    * 播放动画
    * @param anim_name string 动画名
    * @param speed? number 速度
    * @param start_time? number 开始时间
    * @param end_time? number 结束时间
    * @param is_loop? boolean 是否循环
    * @param is_back_normal? boolean 是否返回默认状态
    */
    play_animation(anim_name: string, speed, start_time, end_time, is_loop, is_back_normal): void;
    /**
    * 停止动画
    * @param anim_name string 动画名
    */
    stop_animation(anim_name: string): void;
    /**
    * 替换动画
    * @param replace_anim_name string 动画名
    * @param bereplace_anim_name string 动画名
    */
    change_animation(replace_anim_name: string, bereplace_anim_name: string): void;
    /**
    * 取消动画替换
    * @param replace_anim_name string 动画名
    * @param bereplace_anim_name string 动画名
    */
    cancel_change_animation(replace_anim_name: string, bereplace_anim_name: string): void;
    /**
    * 重置动画替换
    * @param anim_name string 动画名
    */
    clear_change_animation(anim_name: string): void;
    /**
    * 停止当前正在播放的动画
    */
    stop_cur_animation(): void;
    /**
    * 设置动画播放速率
    * @param speed number 速度
    */
    set_animation_speed(speed: number): void;
    /**
    * 添加可贩卖的商品
    * @param tag_name py.TabName 标签名
    * @param item_key py.ItemKey 物品id
    */
    add_goods(tag_name: py.TabName, item_key: py.ItemKey): void;
    /**
    * 移除可贩卖的商品
    * @param item_name py.TabName 物品名
    * @param item_key py.ItemKey 物品id
    */
    remove_goods(item_name: py.TabName, item_key: py.ItemKey): void;
    /**
    * 设置商品库存
    * @param tag_name py.TabName 标签名
    * @param item_key py.ItemKey 物品id
    * @param number integer 物品库存
    */
    set_goods_stack(tag_name: py.TabName, item_key: py.ItemKey, number: number): void;
    /**
    * 单位向商店出售物品
    * @param unit Unit 单位
    * @param item Item 物品
    */
    sell(unit: Unit, item: Item): void;
    /**
    * 从商店购买商品
    * @param unit Unit 单位
    * @param tag_num py.TabIdx 页签id
    * @param item_key py.ItemKey 物品id
    */
    buy(unit: Unit, tag_num: py.TabIdx, item_key: py.ItemKey): void;
    /**
    * @class Buff.AddData
    * @field key py.ModifierKey 魔法效果id
    * @field source? Unit 来源单位
    * @field ability? Ability 关联技能
    * @field time? number 持续时间
    * @field pulse? number 心跳周期
    * @field stacks? integer 层数
    * 给单位添加魔法效果
    * @param data Buff.AddData
    * @return Buff?
    */
    add_buff(data: Buff.AddData): Buff?;
    /**
    * 单位移除所有指定id的魔法效果
    * @param buff_key py.ModifierKey 影响类型的魔法效果
    */
    remove_buffs_by_key(buff_key: py.ModifierKey): void;
    /**
    * 单位移除所有指定类型的魔法效果
    * @param effect_type y3.Const.EffectType 影响类型的魔法效果
    */
    remove_buffs_by_effect_type(effect_type: y3.Const.EffectType): void;
    /**
    * 获取单位指定id的魔法效果
    * @param buff_key py.ModifierKey 魔法效果id
    * @param index? integer 第几个
    * @return Buff? # 单位指定类型的魔法效果
    */
    find_buff(buff_key: py.ModifierKey, index): Buff?;
    /**
    * 获取商店商品的库存间隔
    * @param page py.TabIdx 页签id
    * @param index integer 序号
    * @return number cd 默认间隔时间
    */
    get_goods_cd(page: py.TabIdx, index: number): number;
    /**
    * 获取商店商品的剩余恢复时间
    * @param page py.TabIdx 页签id
    * @param index integer 序号
    * @return number recovery_time 剩余恢复时间
    */
    get_goods_remaining_cd(page: py.TabIdx, index: number): number;
    /**
    * 获取所有的商店物品
    * @param page py.TabIdx 页签
    * @return py.ItemKey[]
    */
    get_shop_item_list(page: py.TabIdx): py.ItemKey[];
    /**
    * 获取当前生命值
    * @return number current_unit_hp 当前生命值
    */
    get_hp(): number;
    /**
    * 获取当前魔法值
    * @return number current_mp 当前魔法值
    */
    get_mp(): number;
    /**
    * 获取最终属性
    * @param attr_name string 属性名
    * @return number
    */
    get_final_attr(attr_name: string): number;
    /**
    * 获取属性（额外）
    * @param attr_name string 属性名
    * @return number
    */
    get_attr_other(attr_name: string): number;
    /**
    * 获取单属性（基础）
    * @param attr_name string
    * @return number attr_base 单位基础属性类型的属性
    */
    get_attr_base(attr_name: string): number;
    /**
    * 获取属性（基础加成）
    * @param attr_name string
    * @return number
    */
    get_attr_base_ratio(attr_name: string): number;
    /**
    * 获取属性（增益）
    * @param attr_name string
    * @return number
    */
    get_attr_bonus(attr_name: string): number;
    /**
    * 获取属性（最终加成）
    * @param attr_name string
    * @return number
    */
    get_attr_all_ratio(attr_name: string): number;
    /**
    * 获取属性（增益加成）
    * @param attr_name string
    * @return number
    */
    get_attr_bonus_ratio(attr_name: string): number;
    /**
    * 获取单位属性成长
    * @param unit_key py.UnitKey
    * @param attr_name any
    * @return number unit_attribute_growth 单位属性成长
    */
    get_attr_growth_by_key(unit_key: py.UnitKey, attr_name: any): number;
    /**
    * 获取单位剩余生命周期
    * @return number
    */
    get_life_cycle(): number;
    /**
    * 获取单位飞行高度
    * @return number height 单位飞行高度
    */
    get_height(): number;
    /**
    * 获取单位转身速度
    * @return number turning_speed 单位转身速度
    */
    get_turning_speed(): number;
    /**
    * 获取单位警戒范围
    * @return number alert_range 单位警戒范围
    */
    get_alert_range(): number;
    /**
    * 获取单位取消警戒的范围
    * @return number cancel_alert_range 单位取消警戒的范围
    */
    get_cancel_alert_range(): number;
    /**
    * 获取单位碰撞半径
    * @return number collision_radius 单位碰撞半径
    */
    get_collision_radius(): number;
    /**
    * 获取单位所属玩家
    * @return Player player 单位所属玩家
    */
    get_owner(): Player;
    /**
    * 获取建造此单位消耗的资源（玩家属性）
    * @param unit_id py.UnitKey 单位类型
    * @param player_attr_name py.RoleResKey 玩家属性名
    * @return integer player_attr 单位被击杀玩家属性
    */
    get_unit_resource_cost(unit_id: py.UnitKey, player_attr_name: py.RoleResKey): number;
    /**
    * 获取击杀可获得的资源（玩家属性）
    * @param player_attr_name py.RoleResKey 玩家属性名
    * @return number player_attr 单位被击杀玩家属性
    */
    get_reward_res(player_attr_name: py.RoleResKey): number;
    /**
    * 获取单位缩放
    * @return number model_scale 单位缩放
    */
    get_scale(): number;
    /**
    * 获取单位选择圈缩放
    * @return number range_scale 选择圈缩放
    */
    get_unit_selection_range_scale(): number;
    /**
    * 获取单位的X轴缩放
    * @return number xaxis X轴缩放
    */
    get_x_scale(): number;
    /**
    * 获取单位的Z轴缩放
    * @return number zaxis  Z轴缩放
    */
    get_z_scale(): number;
    /**
    * 获取单位的Y轴缩放
    * @return number yaxis Y轴缩放
    */
    get_y_scale(): number;
    /**
    * 获取商店的购买范围
    * @return number purchase_range 购买范围
    */
    get_shop_range(): number;
    /**
    * 获取单位等级
    * @return number unit_level 单位等级
    */
    get_level(): number;
    /**
    * 获取单位的单位类型ID
    * @return py.UnitType unit_type 单位类型ID
    */
    get_type(): py.UnitType;
    /**
    * 获取单位类型的ID
    * @return py.UnitKey type_id 单位类型的ID
    */
    get_key(): py.UnitKey;
    /**
    * 获取单位当前的经验值
    * @return integer exp 单位当前的经验值
    */
    get_exp(): number;
    /**
    * 获取单位当前升级所需经验
    * @return number exp 单位当前升级所需经验
    */
    get_upgrade_exp(): number;
    /**
    * 获取英雄的技能点数量
    * @return integer hero_ability_point_number 英雄的技能点数量
    */
    get_ability_point(): number;
    /**
    * 获取单位背包栏的槽位数
    * @return integer slot_number 单位背包栏的槽位数
    */
    get_pkg_cnt(): number;
    /**
    * 获取单位物品栏的槽位数
    * @return integer slot_number 单位物品栏的槽位数
    */
    get_bar_cnt(): number;
    /**
    * 获取单位拥有的物品类型数量
    * @param item_key py.ItemKey 物品类型id
    * @return integer item_type_number 物品类型数量
    */
    get_item_type_number_of_unit(item_key: py.ItemKey): number;
    /**
    * 获取单位被击杀经验
    * @return integer exp 单位被击杀经验
    */
    get_exp_reward(): number;
    /**
    * 获取单位指定护盾类型的护盾值
    * @param shield_type integer 护盾类型
    * @return integer shield_value 护盾类型的护盾值
    */
    get_shield(shield_type: number): number;
    /**
    * 获取商店页签数量
    * @return number tab_number 页签数量
    */
    get_shop_tab_number(): number;
    /**
    * 获取商店的物品商品库存
    * @param tag_index py.TabIdx 页签
    * @param item_key py.ItemKey 物品类型
    * @return integer item_stock 商品库存
    */
    get_goods_stack(tag_index: py.TabIdx, item_key: py.ItemKey): number;
    /**
    * 获取单位名称
    * @return string unit_name  单位名称
    */
    get_name(): string;
    /**
    * 获取单位的描述
    * @return string unit_description 单位的描述
    */
    get_description(): string;
    /**
    * 获取单位类型名称
    * @param unit_key py.UnitKey
    * @return string type_name 单位类型名称
    */
    get_name_by_key(unit_key: py.UnitKey): string;
    /**
    * 获取单位类型的描述
    * @param unit_key py.UnitKey 单位类型
    * @return string des 单位类型的描述
    */
    get_description_by_key(unit_key: py.UnitKey): string;
    /**
    * 获取商店的页签名
    * @param tag_index py.TabIdx 页签
    * @return string tab_name 页签名
    */
    get_shop_tab_name(tag_index: py.TabIdx): string;
    /**
    * 获取单位分类
    * @return py.UnitType unit_subtype 单位分类
    */
    get_subtype(): py.UnitType;
    /**
    * 获取单位类型的头像
    * @param unit_key py.UnitKey 单位类型
    * @return integer image 单位类型的头像
    */
    get_icon_by_key(unit_key: py.UnitKey): number;
    /**
    * 最后创建的单位
    * @return Unit? unit 最后创建的单位
    */
    get_last_created_unit(): Unit?;
    /**
    * 获取单位的拥有者（单位）
    * @return Unit? unit 单位的拥有者
    */
    get_parent_unit(): Unit?;
    /**
    * 获取幻象的召唤者
    * @return Unit? unit 幻象的召唤者
    */
    get_illusion_owner(): Unit?;
    /**
    * 获取单位的朝向
    * @return number angle 单位的朝向
    */
    get_facing(): number;
    /**
    * 获得护甲类型
    * @return integer DAMAGE_ARMOR_TYPE 护甲类型
    */
    get_armor_type(): number;
    /**
    * 获得攻击类型
    * @return integer DAMAGE_ATTACK_TYPE 攻击类型
    */
    get_attack_type(): number;
    /**
    * 获取商店的物品id
    * @param tag_index py.TabIdx 页签
    * @param item_index integer 序号
    * @return py.ItemKey item 物品类型
    */
    get_goods_key(tag_index: py.TabIdx, item_index: number): py.ItemKey;
    /**
    * 获取单位的当前模型
    * @return py.ModelKey model 当前模型
    */
    get_model(): py.ModelKey;
    /**
    * 获取单位的原本模型
    * @return py.ModelKey model 原本模型
    */
    get_source_model(): py.ModelKey;
    /**
    * 获取单位所在点
    * @return Point unit_point 单位所在点
    */
    get_point(): Point;
    /**
    * 获取单位最近的可通行点
    * @return Point point 单位最近的可通行点
    */
    get_nearest_valid_point(): Point;
    /**
    * 获取单位的队伍
    * @return py.Camp team 获取单位的队伍
    */
    get_team(): py.Camp;
    /**
    * 是否具有标签
    * @param tag_name string 标签
    * @return boolean has_tag 具有标签
    */
    has_tag(tag_name: string): boolean;
    /**
    * 是否存活
    * @return boolean alive 是否存活
    */
    is_alive(): boolean;
    /**
    * 是否可见
    * @param target_unit Unit 目标单位
    * @return boolean visibility 目标是否可见
    */
    can_visible(target_unit: Unit): boolean;
    /**
    * 是否正在移动
    * @return boolean is_moving 正在移动
    */
    is_moving(): boolean;
    /**
    * 是否在另一个单位附近
    * @param other Unit 单位
    * @param range number 范围
    * @return boolean in_radius 在单位附近
    */
    is_in_radius(other: Unit, range: number): boolean;
    /**
    * 是否是商店
    * @return boolean is_shop 是商店
    */
    is_shop(): boolean;
    /**
    * 是否是幻象单位
    * @return boolean illusion 是幻象单位
    */
    is_illusion(): boolean;
    /**
    * 是否在单位组中
    * @param group UnitGroup 单位组
    * @return boolean in_group 在单位组中
    */
    is_in_group(group: UnitGroup): boolean;
    /**
    * 是否在战斗状态
    * @return boolean in_battle 在战斗状态
    */
    is_in_battle(): boolean;
    /**
    * 是否有指定状态
    * @param state_name integer 状态
    * @return boolean has_buff_status 有指定状态
    */
    has_buff_status(state_name: number): boolean;
    /**
    * 是否有指定id的技能
    * @param ability_key py.AbilityKey 技能类型
    * @return boolean has_ability_type 有指定类型的技能
    */
    has_ability_by_key(ability_key: py.AbilityKey): boolean;
    /**
    * 是否有指定物品
    * @param item Item 物品
    * @return boolean has_item 有物品
    */
    has_item(item: Item): boolean;
    /**
    * 是否有指定类型的物品
    * @param item_key py.ItemKey 物品类型
    * @return boolean has_item_name 有指定类型的物品
    */
    has_item_by_key(item_key: py.ItemKey): boolean;
    /**
    * 是否有指定id的魔法效果
    * @param buff_key py.ModifierKey 魔法效果id
    * @return boolean has_modifier 有魔法效果
    */
    has_buff_by_key(buff_key: py.ModifierKey): boolean;
    /**
    * 是否有指定类型的魔法效果
    * @param effect_type y3.Const.EffectType 魔法效果类型
    * @return boolean has_modifier_style 有指定类型的魔法效果
    */
    has_buff_by_effect_type(effect_type: y3.Const.EffectType): boolean;
    /**
    * 是否有指定标签的魔法效果
    * @param tag_name string 标签
    * @return boolean has_modifier_tag 有指定标签的魔法效果
    */
    unit_has_modifier_tag(tag_name: string): boolean;
    /**
    * 单位类型前置条件是否通过
    * @param player Player 玩家
    * @param unit_key py.UnitKey 单位类型
    * @return boolean unit_precondition 单位类型前置条件是否通过
    */
    check_precondition_by_key(player: Player, unit_key: py.UnitKey): boolean;
    /**
    * 是否是友方
    * @param target_unit Unit 目标单位
    * @return boolean is_enemy  是敌对关系
    */
    is_ally(target_unit: Unit): boolean;
    /**
    * 是否是敌人
    * @param target_unit Unit 目标单位
    * @return boolean is_enemy  是敌对关系
    */
    is_enemy(target_unit: Unit): boolean;
    /**
    * 能否传送到点
    * @param point Point 点
    * @return boolean can_teleport 能否传送到点
    */
    can_blink_to(point: Point): boolean;
    /**
    * 是否与点碰撞
    * @param point Point 点
    * @param range number 范围
    * @return boolean can_collide 是否与点碰撞
    */
    is_collided_with_point(point: Point, range: number): boolean;
    /**
    * 是否寻路可达
    * @param start_point Point 起始点
    * @param end_point Point 终点
    * @return boolean is_reach 是否寻路可达
    */
    can_walk_to(start_point: Point, end_point: Point): boolean;
    /**
    * 是否拥有指定碰撞类型
    * @param collision_type integer 碰撞类型
    * @return boolean # 是否拥有指定碰撞类型
    */
    has_move_collision(collision_type: number): boolean;
    /**
    *  获取所属玩家
    * @return Player
    */
    get_owner_player(): Player;
    /**
    * 玩家是否可以购买商店的物品
    * @param player Player
    * @return boolean
    */
    player_shop_check(player: Player): boolean;
    /**
    * 获取单位类型的模型
    * @param unit_key py.UnitKey 单位id
    * @return py.ModelKey model 模型
    */
    get_model_by_key(unit_key: py.UnitKey): py.ModelKey;
    /**
    * 获取单位类型的分类
    * @param unit_key py.UnitKey 单位id
    * @return integer
    */
    get_type_by_id(unit_key: py.UnitKey): number;
    /**
    * @class Unit.DamageData
    * @field target Unit|Item|Destructible
    * @field type y3.Const.DamageType
    * @field damage number
    * @field ability? Ability # 关联技能
    * @field text_type? y3.Const.DamageTextType # 跳字类型
    * @field common_attack? boolean # 视为普攻
    * @field critical? boolean # 必定暴击
    * @field no_miss? boolean # 必定命中
    * @field particle? py.SfxKey # 特效
    * @field socket? string # 特效挂点
    * @param data Unit.DamageData
    */
    damage(data: Unit.DamageData): void;
    /**
    * 获取单位主属性(需要开启复合属性)
    * @return string
    */
    get_main_attr(): string;
}
