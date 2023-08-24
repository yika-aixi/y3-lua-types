//@ts-nocheck
declare interface Destructible {
    /**
    * @param py_destructible py.Destructible
    * @return self
    */
    __init(py_destructible: py.Destructible): this;
    /**
    
    */
    __del(): void;
    /**
    * 通过py层的可破坏物实例获取lua层的可破坏物对象
    * @param  py_destructible py.Destructible
    * @return Destructible
    */
    get_by_handle(py_destructible): Destructible;
    /**
    *  通过可破坏物的唯一ID获取lua的可破坏物对象
    * @param id py.DestructibleID
    * @return Destructible
    */
    get_by_id(id: py.DestructibleID): Destructible;
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
    * 可破坏物能否被技能指示器选中
    * @return boolean is_lockable 能否被选中
    */
    can_be_ability_target(): boolean;
    /**
    * 可破坏物能否被攻击
    * @return boolean is_attackable 能否被攻击
    */
    can_be_attacked(): boolean;
    /**
    * 可破坏物能否被选中
    * @return boolean is_selectable 能否被选中
    */
    can_be_selected(): boolean;
    /**
    * 可破坏物能否被采集
    * @return boolean is_collectable 能否被选中
    */
    can_be_collected(): boolean;
    /**
    * 可破坏物是否可见
    * @return boolean is_visible 是否可见
    */
    is_visible(): boolean;
    /**
    * 可破坏物是否存活
    * @return boolean is_alive 是否存活
    */
    is_alive(): boolean;
    /**
    * @param killer_unit Unit 凶手
    * 杀死可破坏物
    */
    kill(killer_unit: Unit): void;
    /**
    * 删除可破坏物
    */
    remove(): void;
    /**
    * 复活可破坏物
    */
    reborn(): void;
    /**
    * 移动到点
    * @param point Point 目标点
    */
    set_point(point: Point): void;
    /**
    * 设置生命值
    * @param value number 生命值
    */
    set_hp(value: number): void;
    /**
    * @param value number 生命值
    * 增加当前生命值
    */
    add_hp(value: number): void;
    /**
    * @param value number 生命值
    * 设置最大生命值
    */
    set_max_hp(value: number): void;
    /**
    * @param value number 生命值
    * 增加最大生命值
    */
    add_max_hp(value: number): void;
    /**
    * @param value number 资源数
    * 设置当前资源数
    */
    set_resource(value: number): void;
    /**
    * @param value number 资源数
    * 增加当前资源数
    */
    add_resource(value: number): void;
    /**
    * @param value number 资源数
    * 设置最大资源数
    */
    set_max_resource(value: number): void;
    /**
    * @param value number 资源数
    * 增加最大资源数
    */
    add_max_resource(value: number): void;
    /**
    * @param name string 名字
    * 设置名称
    */
    set_name(name: string): void;
    /**
    * @param description string 描述
    * 设置描述
    */
    set_description(description: string): void;
    /**
    * 设置缩放
    * @param x number x轴缩放
    * @param y number y轴缩放
    * @param z number z轴缩放
    */
    set_scale(x: number, y: number, z: number): void;
    /**
    * 设置朝向
    * @param angle number 朝向角度
    */
    set_facing(angle: number): void;
    /**
    * 设置高度
    * @param height number 高度
    */
    set_height(height: number): void;
    /**
    * 增加高度
    * @param height number 高度
    */
    add_height(height: number): void;
    /**
    * 设置能否被技能指示器锁定
    * @param can_be_ability_target boolean 能否被技能指示器锁定
    */
    set_can_be_ability_target(can_be_ability_target: boolean): void;
    /**
    * 设置能否被攻击
    * @param is_attackable boolean 能否被攻击
    */
    set_can_be_attacked(is_attackable: boolean): void;
    /**
    * 设置能否被选中
    * @param is_selectable boolean 能否被选中
    */
    set_can_be_selected(is_selectable: boolean): void;
    /**
    * 设置能否被采集
    * @param is_collectable boolean 能否被采集
    */
    set_can_be_collected(is_collectable: boolean): void;
    /**
    * 增加标签
    * @param tag string 标签
    */
    add_tag(tag: string): void;
    /**
    * 移除标签
    * @param tag string 标签
    */
    remove_tag(tag: string): void;
    /**
    * 播放动画
    * @param anim_name string 动画名字
    * @param start_time number 开始时间
    * @param end_time number 结束时间
    * @param is_loop boolean 是否循环
    * @param speed number 速度
    */
    play_animation(anim_name: string, start_time: number, end_time: number, is_loop: boolean, speed: number): void;
    /**
    * 停止动画
    * @param anim_name string 动画名字
    */
    stop_animation(anim_name: string): void;
    /**
    * 替换模型
    * @param model_id py.ModelKey 模型id
    */
    replace_model(model_id: py.ModelKey): void;
    /**
    * 取消替换模型
    * @param model_id py.ModelKey 模型id
    */
    cancel_replace_model(model_id: py.ModelKey): void;
    /**
    * 显示/隐藏
    * @param is_visible boolean 是否显示
    */
    set_visible(is_visible: boolean): void;
    /**
    * 获取可破坏物类型
    * @return py.DestructibleKey type 可破坏物类型
    */
    get_key(): py.DestructibleKey;
    /**
    * 获取可破坏物的名称
    * @return string name 可破坏物的名称
    */
    get_name(): string;
    /**
    * 获取可破坏物描述
    * @return string description 描述
    */
    get_description(): string;
    /**
    * 获取可破坏物的生命值
    * @return number cur_hp 生命值
    */
    get_hp(): number;
    /**
    * 获取可破坏物的资源名称
    * @return string source_name 资源名称
    */
    get_resource_name(): string;
    /**
    * 获取可破坏物的生命值
    * @return number hp 可破坏物的生命值
    */
    get_max_hp(): number;
    /**
    * 获取可破坏物的当前资源数
    * @return number source_number 当前资源数
    */
    get_resource(): number;
    /**
    * 获取可破坏物的最大资源数
    * @return number max_number 最大资源数
    */
    get_max_resource(): number;
    /**
    * 获取可破坏物的玩家属性名
    * @return py.RoleResKey player_res_key 玩家属性
    */
    get_resource_type(): py.RoleResKey;
    /**
    * 获取可破坏物的物品类型ID
    * @return py.ItemKey item_key 物品类型ID
    */
    get_item_type(): py.ItemKey;
    /**
    * 获取可破坏物的模型
    * @return py.ModelKey model_key 模型id
    */
    get_model(): py.ModelKey;
    /**
    * 获取可破坏物的高度
    * @return number height 高度
    */
    get_height(): number;
    /**
    * 获取可破坏物的面向角度
    * @return number rotation 面向角度
    */
    get_facing(): number;
    /**
    * 获取可破坏物对象的位置
    * @return Point point 可破坏物的位置
    */
    get_position(): Point;
    /**
    * 类的方法
    * 创建可破坏物
    * @param type_id py.DestructibleKey 可破坏物类型id
    * @param point Point 创建到点
    * @param angle number 面向角度
    * @param scale_x? number 缩放x
    * @param scale_y? number 缩放y
    * @param scale_z? number 缩放z
    * @param height? number 高度
    * @return Destructible destructible 可破坏物
    */
    create_destructible(type_id: py.DestructibleKey, point: Point, angle: number, scale_x, scale_y, scale_z, height): Destructible;
    /**
    * 获取可破坏物类型的名称
    * @param key py.DestructibleKey 类型id
    * @return string name 名称
    */
    get_name_by_key(key: py.DestructibleKey): string;
    /**
    * 获取可破坏物类型的描述
    * @param key py.DestructibleKey 类型id
    * @return string description 描述
    */
    get_description_by_key(key: py.DestructibleKey): string;
    /**
    * 获取可破坏物类型的模型
    * @param key py.DestructibleKey 类型id
    * @return py.ModelKey model 模型id
    */
    get_model_by_type(key: py.DestructibleKey): py.ModelKey;
    /**
    * 遍历区域中的所有可破坏物
    * @param area Area 区域对象
    * @return Destructible[]
    */
    pick(area: Area): Destructible[];
    /**
    * @param point Point 点
    * @param shape Shape 区域
    * @return table destructible_list 可破坏物列表
    * 获取不同形状范围内的可破坏物列表
    */
    pick_in_shape(point: Point, shape: Shape): object;
}
