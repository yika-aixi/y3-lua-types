//@ts-nocheck
declare interface Item {
    /**
    * @param id py.ItemID
    * @param py_item py.Item # py层的道具实例
    * @return Item # 返回在lua层初始化后的lua层道具实例
    */
    __init(id: py.ItemID, py_item: py.Item): Item;
    /**
    
    */
    __del(): void;
    /**
    * 通过py层的技能实例获取lua层的道具实例
    * @param  py_item py.Item py层的道具实例
    * @return Item # 返回在lua层初始化后的lua层道具实例
    */
    get_by_handle(py_item): Item;
    /**
    *  通过id获取lua层的道具实例
    * @param id py.ItemID
    * @return Item # 返回在lua层初始化后的lua层道具实例
    */
    get_by_id(id: py.ItemID): Item;
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
    * 存在标签
    * @param tag string 删除标签
    * @return boolean is_has_tag 是否有标签
    */
    has_tag(tag: string): boolean;
    /**
    * 是否在场景中
    * @return boolean is_in_scene 是否在场景中
    */
    is_in_scene(): boolean;
    /**
    * 物品在物品栏
    * @return boolean is_in_bar 是否在物品栏
    */
    is_in_bar(): boolean;
    /**
    * 物品在背包栏
    * @return boolean is_in_bag 是否在背包栏
    */
    is_in_bag(): boolean;
    /**
    * 删除物品
    */
    remove(): void;
    /**
    * 丢弃物品到点
    * @param point Point 目标点
    * @param count integer 丢弃数量
    */
    drop(point: Point, count: number): void;
    /**
    * 移动到点
    * @param point Point 点
    */
    set_point(point: Point): void;
    /**
    * 设置物品的名称
    * @param name string 名字
    */
    set_name(name: string): void;
    /**
    * 设置物品的描述
    * @param description string 描述
    */
    set_description(description: string): void;
    /**
    * 设置物品的图标
    * @param picture_id py.Texture 图片id
    */
    set_icon(picture_id: py.Texture): void;
    /**
    * 设置所属玩家
    * @param player Player 所属玩家
    */
    set_owner_player(player: Player): void;
    /**
    * 设置等级
    * @param level integer 等级
    */
    set_level(level: number): void;
    /**
    * 设置充能数
    * @param charge integer 充能数
    */
    set_charge(charge: number): void;
    /**
    * 增加充能数
    * @param charge integer 充能数
    */
    add_charge(charge: number): void;
    /**
    * 设置最大充能数
    * @param charge integer 最大充能数
    */
    set_max_charge(charge: number): void;
    /**
    * 设置堆叠数
    * @param stack integer 堆叠数
    */
    set_stack(stack: number): void;
    /**
    * 增加堆叠数
    * @param stack integer 堆叠数
    */
    add_stack(stack: number): void;
    /**
    * 设置基础属性
    * @param key string 属性key
    * @param value number 属性值
    */
    set_attribute(key: string, value: number): void;
    /**
    * 增加基础属性
    * @param key string 属性key
    * @param value number 属性值
    */
    add_attribute(key: string, value: number): void;
    /**
    * 获取物品的基础属性
    * @param key string 属性key
    * @return number
    */
    get_attribute(key: string): number;
    /**
    * 设置生命值
    * @param value number 生命值
    */
    set_hp(value: number): void;
    /**
    * 给物品添加被动技能
    * @param ability_id py.AbilityKey 技能id
    * @param level integer 等级
    */
    add_passive_ability(ability_id: py.AbilityKey, level: number): void;
    /**
    * 设置丢弃状态
    * @param dropable boolean 状态
    */
    set_droppable(dropable: boolean): void;
    /**
    * 添加标签
    * @param tag string 标签
    */
    add_tag(tag: string): void;
    /**
    * @param tag string 标签
    */
    remove_tag(tag: string): void;
    /**
    * 设置物品可否出售
    * @param state boolean 是否可出售
    */
    set_sale_state(state: boolean): void;
    /**
    * 设置物品缩放
    * @param scale number 缩放
    */
    set_scale(scale: number): void;
    /**
    * 设置物品朝向
    * @param facing number 朝向
    */
    set_facing(facing: number): void;
    /**
    * 获取物品类型id
    * @return py.ItemKey key 类型
    */
    get_key(): py.ItemKey;
    /**
    * 设置物品商品售价
    * @param id py.ItemKey 物品id
    * @param player_attr_name py.RoleResKey 玩家属性
    * @param price number 价格
    */
    set_shop_price(id: py.ItemKey, player_attr_name: py.RoleResKey, price: number): void;
    /**
    * 物品持有者
    * @return Unit? owner 持有者
    */
    get_owner(): Unit?;
    /**
    * 物品所在点
    * @return Point position 物品所在点
    */
    get_point(): Point;
    /**
    * 物品堆叠数
    * @return integer stacks 堆叠数
    */
    get_stack(): number;
    /**
    * 物品充能数
    * @return integer charges 充能数
    */
    get_charge(): number;
    /**
    * 获取最大充能数
    * @return integer max_charge 最大充能数
    */
    get_max_charge(): number;
    /**
    * 获取物品等级
    * @return integer level 物品等级
    */
    get_level(): number;
    /**
    * 获取物品的生命值
    * @return number hp 物品的生命值
    */
    get_hp(): number;
    /**
    * 获取物品名
    * @return string name 物品名字
    */
    get_name(): string;
    /**
    * 获取物品描述
    * @return string description 物品描述
    */
    get_description(): string;
    /**
    * 获取物品缩放
    * @return number scale 物品缩放
    */
    get_scale(): number;
    /**
    * 获取物品的朝向
    * @return number angel 朝向
    */
    get_facing(): number;
    /**
    * 获取物品的主动技能
    * @return Ability? ability 主动技能
    */
    get_ability(): Ability?;
    /**
    * 获取物品的被动技能
    * @param index integer
    * @return Ability? ability 被动技能
    */
    get_passive_ability(index: number): Ability?;
    /**
    * 获取物品在单位身上的格子位置
    * @return integer index 格子位置
    */
    get_slot(): number;
    /**
    * 获取物品的拥有玩家
    * @return Player player 玩家
    */
    get_owner_player(): Player;
    /**
    * 获取物品在单位身上的背包槽类型
    * @return py.SlotType 背包槽类型
    */
    get_slot_type(): py.SlotType;
    /**
    * 类的方法
    * 检查物品类型前置条件
    * @param player Player 玩家
    * @param item_key py.ItemKey 物品类型ID
    * @return boolean
    */
    check_precondition_by_key(player: Player, item_key: py.ItemKey): boolean;
    /**
    * 创建物品到点
    * @param point Point 点
    * @param item_key py.ItemKey 道具类型
    * @param player? Player 玩家
    * @return Item
    */
    create_item(point: Point, item_key: py.ItemKey, player): Item;
    /**
    * 获取物品购买售价
    * @param item_key py.ItemKey 类型
    * @param key py.RoleResKey 玩家属性
    * @return number price 价格
    */
    get_item_buy_price_by_key(item_key: py.ItemKey, key: py.RoleResKey): number;
    /**
    * 获取物品出售售价
    * @param item_key py.ItemKey 类型
    * @param key py.RoleResKey 玩家属性
    * @return number price 价格
    */
    get_item_sell_price_by_key(item_key: py.ItemKey, key: py.RoleResKey): number;
    /**
    * 获得区域内所有物品
    * @param area Area 区域
    * @return ItemGroup
    */
    get_item_group_in_area(area: Area): ItemGroup;
    /**
    * 获取物品类型名
    * @param item_key py.ItemKey 物品类型
    * @return string
    */
    get_name_by_key(item_key: py.ItemKey): string;
    /**
    * 获取物品类型的icon的图片id
    * @param item_key py.ItemKey 物品类型
    * @return integer
    */
    get_icon_id_by_key(item_key: py.ItemKey): number;
    /**
    * 获取物品类型的描述
    * @param item_key py.ItemKey 物品类型
    * @return string
    */
    get_description_by_key(item_key: py.ItemKey): string;
    /**
    * 获取物品模型
    * @return py.ModelKey model_key 模型类型
    */
    get_model(): py.ModelKey;
    /**
    * 获取物品类型的模型
    * @param item_key py.ItemKey 物品类型
    * @return py.ModelKey model_key 模型类型
    */
    get_model_by_key(item_key: py.ItemKey): py.ModelKey;
}
