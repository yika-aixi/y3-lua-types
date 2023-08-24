//@ts-nocheck
declare interface Player {
    /**
    * @param py_player py.Role
    * @return self
    */
    __init(py_player: py.Role): this;
    /**
    
    */
    __tostring(): void;
    /**
    * 转换玩家ID为玩家
    * @param id integer 玩家ID
    * @return Player player 玩家
    */
    __alloc(id: number): Player;
    /**
    * 转换玩家ID为玩家
    * @param id integer 玩家ID
    * @return Player player 玩家
    */
    get_by_id(id: number): Player;
    /**
    * @param py_player py.Role
    * @return Player
    */
    get_by_handle(py_player: py.Role): Player;
    /**
    
    */
    get_camp(): void;
    /**
    * 布尔型玩家存档数据
    * @param index  integer 存档key
    * @return boolean bool_value 布尔型玩家存档数据
    */
    get_save_data_bool_value(index: ): boolean;
    /**
    * 玩家是否中途加入
    * @return boolean is_middle_join 是否中途加入
    */
    is_middle_join(): boolean;
    /**
    * 玩家间是否是敌对关系
    * @param player Player 玩家
    * @return boolean is_enemy 是否是敌对关系
    */
    is_enemy(player: Player): boolean;
    /**
    * 设置名字
    * @param name string 名字
    */
    set_name(name: string): void;
    /**
    * 设置队伍ID
    * @param id py.Camp
    */
    set_team(id: py.Camp): void;
    /**
    * 设置属性值
    * @param key py.RoleResKey 属性名
    * @param value number 值
    */
    set(key: py.RoleResKey, value: number): void;
    /**
    * 增加属性值
    * @param key py.RoleResKey 属性名
    * @param value number 值
    */
    add(key: py.RoleResKey, value: number): void;
    /**
    * 设置经验获得率
    * @param rate number 经验获得率
    */
    set_exp_rate(rate: number): void;
    /**
    * 设置敌对关系
    * @param player Player 玩家
    * @param is_hostile boolean 是否敌视
    */
    set_hostility(player: Player, is_hostile: boolean): void;
    /**
    * 设置群体寻路严格模式
    * @param is_strict boolean 是否严格
    */
    set_strict_group_navigation(is_strict: boolean): void;
    /**
    * 选中单位/单位组
    * @param unit_or_group Unit|UnitGroup 单位/单位组
    */
    select_unit(unit_or_group: Unit | UnitGroup): void;
    /**
    * 设置跟随距离
    * @param distance number 距离
    */
    set_follow_distance(distance: number): void;
    /**
    * 为玩家开/关鼠标点选
    * @param is_enable boolean 是否开鼠标点选
    */
    set_mouse_click_selection(is_enable: boolean): void;
    /**
    * 为玩家开/关鼠标框选
    * @param is_enable boolean 是否开鼠标框选
    */
    set_mouse_drag_selection(is_enable: boolean): void;
    /**
    * 为玩家开/关鼠标滚轮
    * @param is_enable boolean 是否开鼠标滚轮
    */
    set_mouse_wheel(is_enable: boolean): void;
    /**
    * 玩家基础操作快捷键是否被占用
    * TODO:功能键lua层表示需要处理
    * @param key py.NormalKey 键名
    * @param assist_key py.RecordKey 辅助键名
    * @return boolean is_conf 是否被占用
    */
    is_operation_key_occupied(key: py.NormalKey, assist_key: py.RecordKey): boolean;
    /**
    * 设置玩家的基础操作快捷键（过滤掉禁止设置的）
    * TODO:operation在lua层的表示方式待整理 方法名英文待确认
    * @param operation py.EditableGameFunc 可编辑操作
    * @param key py.NormalKey 功能按键
    * @param assist_key py.RecordKey 辅助按键
    */
    set_operation_key(operation: py.EditableGameFunc, key: py.NormalKey, assist_key: py.RecordKey): void;
    /**
    * 设置玩家的基础操作开关（包含所有基础操作）
    * TODO:operation在lua层的表示方式待整理 方法名英文待确认
    * @param operation py.AllGameFunc 可编辑操作
    * @param is_enable boolean 是否开
    */
    set_all_operation_key(operation: py.AllGameFunc, is_enable: boolean): void;
    /**
    * 获取玩家响应键盘按键的基础操作（过滤掉禁止设置的）
    * @param key py.NormalKey 键名
    * @param assist_key py.RecordKey 键盘按键
    * @return py.EditableGameFunc shortcut 基础操作
    */
    get_operation_key(key: py.NormalKey, assist_key: py.RecordKey): py.EditableGameFunc;
    /**
    * 设置科技等级
    * @param tech_type py.TechKey 科技等级
    * @param level integer 等级
    */
    set_tech_level(tech_type: py.TechKey, level: number): void;
    /**
    * 增加科技等级
    * @param tech_type py.TechKey 科技等级
    * @param level integer 等级
    */
    add_tech_level(tech_type: py.TechKey, level: number): void;
    /**
    * 对玩家开放视野
    * @param target_player Player 玩家
    * @param share boolean
    */
    share_vision_with_player(target_player: Player, share: boolean): void;
    /**
    * 获取单位的视野
    * @param unit Unit 单位
    * @param share boolean
    */
    share_vision_of_unit(unit: Unit, share: boolean): void;
    /**
    * 上传存档
    */
    upload_save_data(): void;
    /**
    * 增加全局存档
    * @param key string 键
    * @param value integer 值
    */
    add_global_save_data(key: string, value: number): void;
    /**
    * 消耗玩家平台道具
    * @param count integer 个数
    * @param item_id py.StoreKey 平台道具id
    */
    use_store_item(count: number, item_id: py.StoreKey): void;
    /**
    * 玩家是否可以看到某个位置
    * @param point Point 点
    * @return boolean visible 点对于玩家可见
    */
    is_visible(point: Point): boolean;
    /**
    * 某个位置是否处于玩家的迷雾中
    * @param point Point 点
    * @return boolean is_point_in_fog 点在迷雾中
    */
    is_in_fog(point: Point): boolean;
    /**
    * 某个位置是否处于玩家的黑色阴影中
    * @param point Point 点
    * @return boolean is_point_in_shadow 点在黑色阴影中
    */
    is_in_shadow(point: Point): boolean;
    /**
    * 获取玩家属性
    * @param key py.RoleResKey 属性名
    * @return number role_res 玩家属性
    */
    get_attr(key: py.RoleResKey): number;
    /**
    * 获取玩家ID
    * @return integer role_id_num 玩家ID
    */
    get_id(): number;
    /**
    * 获取玩家游戏状态
    * @return y3.Const.RoleStatus role_status 玩家游戏状态
    */
    get_state(): y3.Const.RoleStatus;
    /**
    * 获取玩家控制者类型
    * @return y3.Const.RoleType role_type 玩家控制者类型
    */
    get_controller(): y3.Const.RoleType;
    /**
    * 获取玩家名字
    * @return string role_name 玩家名字
    */
    get_name(): string;
    /**
    * 获取经验获得率
    * @return number exp_rate 经验获得率
    */
    get_exp_rate(): number;
    /**
    * 获取队伍ID
    * @return integer camp_id 队伍ID
    */
    get_team_id(): number;
    /**
    * 表格型玩家存档数据
    * @param key integer 存档key
    * @return table table_value 表格型玩家存档数据
    */
    get_save_data_table(key: number): object;
    /**
    * 字符串型玩家存档数据
    * @param key integer 存档key
    * @return string str_value 字符串玩家存档数据
    */
    get_save_data_string(key: number): string;
    /**
    * 实数型存档数据
    * @param key integer 存档key
    * @return number int_value 实数型存档数据
    */
    get_save_data_float(key: number): number;
    /**
    * 获取整数型存档数据
    * @param key integer 存档key
    * @return integer int_value 整数型存档数据
    */
    get_save_data_int(key: number): number;
    /**
    * 获取整数存档玩家排名
    * @param key integer 存档key
    * @return integer rank_num 整数存档玩家排名
    */
    get_rank_num(key: number): number;
    /**
    * 获取科技等级
    * @param tech_id py.TechKey 科技id
    * @return integer tech_level 科技等级
    */
    get_tech_level(tech_id: py.TechKey): number;
    /**
    * 获取玩家平台头像
    * @return integer icon 平台头像
    */
    get_platform_icon(): number;
    /**
    * 玩家平台道具数量
    * @param id py.StoreKey 平台道具id
    * @return integer store_item_cnt 平台道具数量
    */
    get_store_item_number(id: py.StoreKey): number;
    /**
    * 获取玩家平台等级
    * @return integer map_level 平台等级
    */
    get_platform_level(): number;
    /**
    * 玩家在玩家组中
    * @param player_group PlayerGroup 玩家组
    * @return boolean is_in_group 玩家在玩家组中
    */
    is_in_group(player_group: PlayerGroup): boolean;
    /**
    * 属于某玩家的所有单位
    * @return UnitGroup unit_group 单位组
    */
    get_all_units(): UnitGroup;
    /**
    * 创建单位
    * @param unit_id py.UnitKey 单位类型
    * @param point Point 单位
    * @param direction number 单位
    * @return Unit
    */
    create_unit(unit_id: py.UnitKey, point: Point, direction: number): Unit;
    /**
    * 强制踢出
    * @param reason string 踢出原因
    */
    kick(reason: string): void;
    /**
    * 获取玩家平台外观模型
    * @return py.ModelKey model 模型id
    */
    get_platform_model(): py.ModelKey;
    /**
    *  获取鼠标在游戏内的所在点。
    *  必须先设置 `y3.config.sync.mouse = true`。
    * @return Point point 点
    */
    get_mouse_pos(): Point;
    /**
    * 获取玩家鼠标屏幕坐标X的占比。
    *  必须先设置 `y3.config.sync.mouse = true`。
    * @return number x_per X的占比
    */
    get_mouse_ui_x_percent(): number;
    /**
    * 获取玩家鼠标屏幕坐标y的占比。
    *  必须先设置 `y3.config.sync.mouse = true`。
    * @return number y_per Y的占比
    */
    get_mouse_ui_y_percent(): number;
    /**
    * 获取鼠标在屏幕上的X坐标
    * @return number pos_x X坐标
    */
    get_mouse_pos_x(): number;
    /**
    * 获取鼠标在屏幕上的y坐标
    * @return number pos_y Y坐标
    */
    get_mouse_pos_y(): number;
    /**
    * 玩家的按键是否被按下
    * @param key y3.Const.KeyboardKey | y3.Const.MouseKey 按键
    * @return boolean 是否被按下
    */
    is_key_pressed(key: y3.Const.KeyboardKey): boolean;
    /**
    * 获取玩家唯一名称
    * @return string name 属性名称
    */
    get_platform_name(): string;
    /**
    * 向玩家发送提示
    * @param msg string 消息
    * @param localize? boolean 是否支持语言环境
    */
    display_info(msg: string, localize): void;
    /**
    * 获取玩家属性的货币图标
    * @param key py.RoleResKey 属性名
    * @return integer icon 图标id
    */
    get_res_icon(key: py.RoleResKey): number;
    /**
    * 获取玩家属性名称
    * @param key py.RoleResKey 属性名
    * @return string name 属性名称
    */
    get_res_name(key: py.RoleResKey): string;
    /**
    *  设置滤镜
    * @param value integer 滤镜
    */
    set_color_grading(value: number): void;
    /**
    * 显示/隐藏玩家地表纹理
    * @param is_visible boolean 显示/隐藏
    */
    set_local_terrain_visible(is_visible: boolean): void;
    /**
    * @param player Player 玩家
    * @param is_enable boolean 开关
    * 设置暗角开关
    */
    enable_vignetting(player: Player, is_enable: boolean): void;
    /**
    * 设置暗角大小
    * @param size number 大小
    */
    set_vignetting_size(size: number): void;
    /**
    * 设置暗角呼吸周期
    * @param circle_time number 呼吸周期
    */
    set_role_vignetting_breath_rate(circle_time: number): void;
    /**
    * 设置暗角变化幅度
    * @param range number 幅度
    */
    set_vignetting_change_range(range: number): void;
    /**
    * 设置暗角颜色
    * @param red number 颜色r
    * @param green number 颜色g
    * @param blue number 颜色b
    * @param time number 过渡时间
    */
    set_vignetting_color(red: number, green: number, blue: number, time: number): void;
    /**
    *  获取本地玩家，注意这可能会导致不同步！
    * @return Player
    */
    get_local(): Player;
}
