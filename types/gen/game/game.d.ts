//@ts-nocheck
declare interface Game {
    /**
    * 设置物体的材质
    * @param obj Unit
    * @param mat integer 材质
    * @param r number 红
    * @param g number 绿
    * @param b number 蓝
    * @param intensity number 强度
    * @param alpha number 透明度
    */
    set_material_param(obj: Unit, mat: number, r: number, g: number, b: number, intensity: number, alpha: number): void;
    /**
    * 清除单位类型键值
    * @param unit_key py.UnitKey 单位id
    * @param key string 键
    */
    remove_unit_kv(unit_key: py.UnitKey, key: string): void;
    /**
    * 清除物品类型键值
    * @param item_key py.ItemKey 物品id
    * @param key string 键
    */
    remove_item_kv(item_key: py.ItemKey, key: string): void;
    /**
    * 清除技能类型键值
    * @param ability_key py.AbilityKey 技能id
    * @param key string 键
    */
    remove_ability_kv(ability_key: py.AbilityKey, key: string): void;
    /**
    * 获得阵营
    * @param id py.CampID 阵营id
    * @return py.Camp
    */
    get_camp_by_id(id: py.CampID): py.Camp;
    /**
    * 设置阴影距离
    * @param dis number 距离
    */
    set_cascaded_shadow_distance(dis: number): void;
    /**
    * 字符串转单位命令类型
    * @param str string 字符串
    * @return py.UnitCommandType # 单位命令类型
    */
    str_to_unit_command_type(str: string): py.UnitCommandType;
    /**
    * 字符串转技能释放类型
    * @param str string 字符串
    * @return py.AbilityCastType # 技能释放类型
    */
    str_to_ability_cast_type(str: string): py.AbilityCastType;
    /**
    * 字符串转链接特效
    * @param str string 字符串
    * @return py.SfxKey # 链接特效
    */
    str_to_link_sfx_key(str: string): py.SfxKey;
    /**
    * 字符串转玩家关系
    * @param str string 字符串
    * @return py.RoleRelation # 玩家关系
    */
    str_to_role_relation(str: string): py.RoleRelation;
    /**
    * 字符串转单位分类
    * @param str string 字符串
    * @return py.UnitType # 单位分类
    */
    str_to_unit_type(str: string): py.UnitType;
    /**
    * 字符串转单位类型
    * @param str string 字符串
    * @return py.UnitKey # 单位类型
    */
    str_to_unit_key(str: string): py.UnitKey;
    /**
    * 字符串转单位属性
    * @param str string 字符串
    * @return string # 单位属性
    */
    str_to_unit_name(str: string): string;
    /**
    * 字符串转物品类型
    * @param str string 字符串
    * @return py.ItemKey # 物品类型
    */
    str_to_item_key(str: string): py.ItemKey;
    /**
    * 字符串转玩家属性
    * @param str string 字符串
    * @return py.RoleResKey 3 玩家属性
    */
    str_to_role_res(str: string): py.RoleResKey;
    /**
    * 字玩家状态转字符串
    * @param status py.RoleStatus
    * @return string
    */
    str_to_role_status(status: py.RoleStatus): string;
    /**
    * 字符串转玩家控制状态
    * @param str string 字符串
    * @return py.RoleType # 玩家控制状态
    */
    str_to_role_type(str: string): py.RoleType;
    /**
    * 字符串转技能类型
    * @param str string 字符串
    * @return py.AbilityKey # 技能类型
    */
    str_to_ability_key(str: string): py.AbilityKey;
    /**
    * 字符串转技能槽位类型
    * @param str string 字符串
    * @return py.AbilityType # 技能槽位类型
    */
    str_to_ability_type(str: string): py.AbilityType;
    /**
    * 字符串转可破坏物类型
    * @param str string 字符串
    * @return py.DestructibleKey # 可破坏物类型
    */
    str_to_dest_key(str: string): py.DestructibleKey;
    /**
    * 字符串转投射物类型
    * @param str string 字符串
    * @return py.ProjectileKey # 投射物类型
    */
    str_to_project_key(str: string): py.ProjectileKey;
    /**
    * 字符串转特效
    * @param str string 字符串
    * @return py.SfxKey # 特效
    */
    str_to_particle_sfx_key(str: string): py.SfxKey;
    /**
    * 字符串转科技类型
    * @param str string 字符串
    * @return py.TechKey # 科技类型
    */
    str_to_tech_key(str: string): py.TechKey;
    /**
    * 字符串转模型类型
    * @param str string 字符串
    * @return py.ModelKey # 模型类型
    */
    str_to_model_key(str: string): py.ModelKey;
    /**
    * 字符串转魔法效果类型
    * @param str string 字符串
    * @return py.ModifierKey # 魔法效果类型
    */
    str_to_modifier_key(str: string): py.ModifierKey;
    /**
    * 字符串转魔法效果影响类型
    * @param str string 字符串
    * @return py.ModifierEffectType # 魔法效果影响类型
    */
    str_to_modifier_effect_type(str: string): py.ModifierEffectType;
    /**
    * 字符串转魔法效果类别
    * @param str string 字符串
    * @return py.ModifierType # 魔法效果类别
    */
    str_to_modifier_type(str: string): py.ModifierType;
    /**
    * 字符串转阵营
    * @param str string 字符串
    * @return py.Camp # 阵营
    */
    str_to_camp(str: string): py.Camp;
    /**
    * 字符串转键盘按键
    * @param str string 字符串
    * @return py.KeyboardKey # 键盘按键
    */
    str_to_keyboard_key(str: string): py.KeyboardKey;
    /**
    * 字符串转鼠标按键
    * @param str string 字符串
    * @return py.MouseKey # 鼠标按键
    */
    str_to_mouse_key(str: string): py.MouseKey;
    /**
    * 字符串转鼠标滚轮
    * @param str string 字符串
    * @return py.MouseWheel # 鼠标滚轮
    */
    str_to_mouse_wheel(str: string): py.MouseWheel;
    /**
    * 字符串转平台道具类型
    * @param str string 字符串
    * @return py.StoreKey store_key 平台道具类型
    */
    str_to_store_key(str: string): py.StoreKey;
    /**
    * 字符串转伤害类型
    * @param str string 字符串
    * @return integer # 伤害类型
    */
    str_to_damage_type(str: string): number;
    /**
    * 字符串转单位属性类型
    * @param str string 字符串
    * @return string # 单位属性类型
    */
    str_to_unit_attr_type(str: string): string;
    /**
    * 字符串转声音类型
    * @param str string 字符串
    * @return py.AudioKey # 声音类型
    */
    str_to_audio_key(str: string): py.AudioKey;
    /**
    * 根据图片ID获取图片
    * @param id integer
    * @return py.Texture texture
    */
    get_icon_id(id: number): py.Texture;
    /**
    * 设置某点的地形纹理
    * @param point Point 点
    * @param terrain_type integer 纹理类型
    * @param range integer 范围
    * @param area_type integer 形状
    */
    modify_point_texture(point: Point, terrain_type: number, range: number, area_type: number): void;
    /**
    * 获取地形纹理
    * @param point Point 点
    * @return integer
    */
    get_point_texture(point: Point): number;
    /**
    * 替换地形纹理
    * @param area Area 区域
    * @param old_texture integer 纹理类型
    * @param new_texture integer 纹理类型
    */
    replace_area_texture(area: Area, old_texture: number, new_texture: number): void;
    /**
    * 设置区域天气
    * @param area Area 区域
    * @param weather integer 天气
    */
    set_area_weather(area: Area, weather: number): void;
    /**
    * 设置全局天气
    * @param weather integer 天气
    */
    set_global_weather(weather: number): void;
    /**
    * 设置雾效属性
    * @param fog table 局部雾
    * @param direction number 朝向
    * @param pos_x number 位置x
    * @param pos_y number 位置y
    * @param pos_z number 位置z
    * @param scale_x number 缩放x
    * @param scale_y number 缩放y
    * @param scale_z number 缩放z
    * @param red number 颜色r
    * @param green number 颜色g
    * @param blue number 颜色b
    * @param concentration number 浓度
    * @param speed number 流速
    */
    set_fog_attribute(fog: object, direction: number, pos_x: number, pos_y: number, pos_z: number, scale_x: number, scale_y: number, scale_z: number, red: number, green: number, blue: number, concentration: number, speed: number): void;
    /**
    * 设置雾效属性(新)
    * @param fog table 局部雾
    * @param attr string 朝向
    * @param value number 位置x
    */
    set_fog_attr(fog: object, attr: string, value: number): void;
    /**
    * 设置阴影距离
    * @param distance number 距离
    */
    set_cascaded_shadow_distanc(distance: number): void;
    /**
    * 开关级联阴影
    * @param is_enable boolean 开关
    */
    set_cascaded_shadow_enable(is_enable: boolean): void;
    /**
    * 为玩家切换画风
    * @param player Player 玩家
    * @param processing py.PostEffect 画风
    */
    set_post_effect(player: Player, processing: py.PostEffect): void;
    /**
    * 获取科技最大等级
    * @param tech_id py.TechKey 科技id
    * @return integer level 最大等级
    */
    get_tech_max_level(tech_id: py.TechKey): number;
    /**
    * 获取科技图标
    * @param tech_id py.TechKey 科技
    * @param index integer 等级
    * @return py.Texture texture 图标id
    */
    get_tech_icon(tech_id: py.TechKey, index: number): py.Texture;
    /**
    * 获取科技类型的描述
    * @param tech_id py.TechKey 科技类型
    * @return string description 描述
    */
    get_tech_description(tech_id: py.TechKey): string;
    /**
    * 获取科技类型的名称
    * @param tech_id py.TechKey 科技类型
    * @return string name 名称
    */
    get_tech_name(tech_id: py.TechKey): string;
    /**
    * 结束玩家游戏
    * @param player Player 玩家
    * @param result string 结果
    * @param is_show boolean 是否展示界面
    */
    end_player_game(player: Player, result: string, is_show: boolean): void;
    /**
    * 暂停游戏
    */
    pause_game(): void;
    /**
    * 开始新一轮游戏
    * @param fast_restart boolean 快速重置
    */
    restart_game(fast_restart: boolean): void;
    /**
    * 开启软暂停
    */
    enable_soft_pause(): void;
    /**
    * 恢复软暂停
    */
    resume_soft_pause(): void;
    /**
    * 设置伤害系数
    * @param attack_type integer 攻击类型
    * @param armor_type integer 护甲类型
    * @param ratio number 系数
    */
    set_damage_factor(attack_type: number, armor_type: number, ratio: number): void;
    /**
    * 设置复合属性
    * @param primary_attribute string 一级属性
    * @param secondary_attr string 二级属性
    * @param value number 属性值
    */
    set_compound_attributes(primary_attribute: string, secondary_attr: string, value: number): void;
    /**
    * 获取三维属性的影响系数
    * @param primary_attribute string 一级属性
    * @param secondary_attr string 二级属性
    * @return number coefficient 系数
    */
    get_compound_attributes(primary_attribute: string, secondary_attr: string): number;
    /**
    * 是否开启三维属性
    * @return boolean is_open 是否开启
    */
    is_compound_attributes_enabled(): boolean;
    /**
    * 设置游戏时间的流逝速度
    * @param speed number 速度
    */
    set_day_night_speed(speed: number): void;
    /**
    * 设置游戏时间
    * @param time number 时间
    */
    set_day_night_time(time: number): void;
    /**
    * 创建人造时间
    * @param time number 时间
    * @param dur number 持续时间
    */
    create_day_night_human_time(time: number, dur: number): void;
    /**
    * 设置随机数种子
    * @param seed integer 随机种子
    */
    set_random_seed(seed: number): void;
    /**
    * 开关时间流逝
    * @param is_on boolean 开关
    */
    toggle_day_night_time(is_on: boolean): void;
    /**
    * 开关目标点的草丛
    * @param is_on boolean 开关
    * @param point Point 点
    */
    enable_grass_by_pos(is_on: boolean, point: Point): void;
    /**
    * 获取当前游戏模式
    * @return py.GameMode game_mode 游戏模式
    */
    get_current_game_mode(): py.GameMode;
    /**
    * 游戏已运行的时间
    * @return number time  时间
    */
    current_game_run_time(): number;
    /**
    * 获取游戏当前时间
    * @return number time 时间
    */
    get_day_night_time(): number;
    /**
    * 获取伤害系数
    * @param attack_type integer 攻击类型
    * @param area_type integer 护甲类型
    * @return number factor 伤害系数
    */
    get_damage_ratio(attack_type: number, area_type: number): number;
    /**
    * 获取本局游戏环境
    * @return integer game_mode 游戏环境，1是编辑器，2是平台
    */
    get_start_mode(): number;
    /**
    *  是否是调试模式
    */
    is_debug_mode(): void;
    /**
    * 获取全局存档
    * @param name string 存档名
    * @return integer archive 存档
    */
    get_global_archive(name: string): number;
    /**
    * 获取整数存档排行榜玩家存档值
    * @param file integer 存档
    * @param index integer 序号
    * @return integer value 存档值
    */
    get_archive_rank_player_archive_value(file: number, index: number): number;
    /**
    * 获取全局天气
    * @return integer weather 天气
    */
    get_global_weather(): number;
    /**
    * 获取多语言内容
    * @param key string 多语言key
    * @return string 多语言内容
    */
    locale(key: string): string;
    /**
    * @return number time_stamp 时间戳
    * 获取游戏开始时间戳
    */
    get_game_init_time_stamp(): number;
    /**
    * @return number x_resolution 横向分辨率
    * 获取初始化横向分辨率
    */
    get_game_x_resolution(): number;
    /**
    * @return number y_resolution 纵向分辨率
    * 获取初始化纵向分辨率
    */
    get_game_y_resolution(): number;
    /**
    * @return number quality 画质
    * 获取初始化游戏画质
    */
    get_graphics_quality(): number;
    /**
    * @return number mode 窗口类别
    * 获取初始化窗口类别
    */
    get_window_mode(): number;
    /**
    * @param value number 数字
    * @return string str 字符串
    * 数字转字符串
    */
    number_to_str(value: number): string;
    /**
    * @param list userdata 数组变量
    * 遍历数组变量
    */
    list_loop(list: userdata): void;
    /**
    * @param is_only_gold boolean 是否只遍历货币
    * 遍历玩家属性
    */
    iter_role_res(is_only_gold: boolean): void;
    /**
    * @param func_name string 方法枚举
    * @param actor userdata 数组变量
    * @param key string 变量名
    * @param index integer 索引
    * @param var userdata 变量
    * 设置变量
    */
    set_lua_var(func_name: string, actor: userdata, key: string, index: number);
    /**
    * @param func_name string 方法枚举
    * @param key string 变量名
    * @param index integer 索引
    * 获取变量
    */
    get_lua_var(func_name: string, key: string, index: number): void;
    /**
    * @param key string 变量名
    * @param value userdata 值
    * @param boolean if_list 是否数组
    * LUA层初始化参数
    */
    init_lua_var(key: string, value: userdata, if_list): void;
    /**
    * 退出游戏
    */
    exit_game(player): void;
    /**
    * @param player Player 玩家
    * @param signal_enum number 信号枚举值
    * @param point Point 点
    * @param visible_enum Point 可见性枚举值
    * 发送信号
    */
    send_signal(player: Player, signal_enum: number, point: Point, visible_enum: Point): void;
    /**
    * 发送自定义事件
    */
    send_custom_event(id, table): void;
    /**
    * @param point_or_unit Point|Unit 点或单位
    * @param range number 范围
    * @return boolean in_radius 在单位附近
    * 在附近
    */
    is_in_radius(point_or_unit: Point | Unit, range: number): boolean;
    /**
    * @param value number 治疗值
    * 设置当前治疗值
    */
    set_cure_value(value: number): void;
    /**
    * @param str string 字符串
    * 字符串转界面事件
    */
    str_to_ui_event(str: string): void;
    /**
    * 任意变量转字符串
    */
    any_var_to_str(p1, p2): void;
    /**
    * @param name string 表名
    * @return table tb 表
    * 获得表
    */
    get_table(name: string): object;
    /**
    * 表是否存在字段
    */
    is_exist_key(table, key): void;
    /**
    
    */
    set_globale_view(enable): void;
    /**
    
    */
    request_server_time(func, context): void;
    /**
    * @param obj Unit|Item|Point|Area 各种对象
    * @param key string 字段
    * @return Point command 点
    * 是否存在字段
    */
    api_has_kv_any(obj: Unit | Item | Point | Area, key: string): Point;
    /**
    * 获取本地玩家
    */
    get_client_player(): void;
    /**
    * 设置对象基础材质颜色
    */
    set_object_color(obj, r, g, b, a): void;
    /**
    * 清空表
    */
    clear_table(table): void;
    /**
    * 物品类型合成所需的物品类型数量
    */
    get_num_of_item_mat(item_key, comp_item_key): void;
    /**
    * 物品类型合成所需的玩家属性数量
    */
    get_num_of_player_attr(item_key, role_res_key): void;
    /**
    * 获取返回的服务器时间(年)
    */
    get_server_year(v): void;
    /**
    * 获取返回的服务器时间(月)
    */
    get_server_month(v): void;
    /**
    * 获取返回的服务器时间(日)
    */
    get_server_day(v): void;
    /**
    * 获取返回的服务器时间(小时)
    */
    get_server_hour(v): void;
    /**
    * @param mainString string 母字符串
    * @param findString string 被替换的字符串
    * @param replaceString string 替换目标字符串
    * @param num integer 最大替换次数
    * @return string str 字符串
    * 字符串替换
    */
    string_gsub(mainString: string, findString: string, replaceString: string, num: number): string;
    /**
    * @param fps integer 帧率
    * 设置逻辑帧率
    */
    set_logic_fps(fps: number): void;
    /**
    * @param tab table 表
    * 加密表
    */
    encrypt_table(tab: object): void;
    /**
    * @param enable boolean 是否关闭
    * 关闭localplayer的表现层跳字
    */
    set_jump_word(enable: boolean): void;
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 特效播放开关
    */
    sfx_switch(player: Player);
    /**
    * @param area Area 区域
    * 注册区域的附近语音频道
    */
    reg_sound_area(area: Area): void;
    /**
    * @param area Area 区域
    * 注销区域的附近语音频道
    */
    unreg_sound_area(area: Area): void;
    /**
    * @param switch boolean 是否关闭
    * 设置附近语音的区域模式开关
    */
    set_nearby_voice_mode();
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的附近语音聊天收听开关
    */
    set_nearby_sound_switch(player: Player);
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的附近语音聊天发言开关
    */
    set_nearby_micro_switch(player: Player);
    /**
    * @param player Player 玩家
    * @param unit Unit 是否关闭
    * 设置玩家的声音主单位
    */
    set_role_micro_unit(player: Player, unit: Unit): void;
    /**
    * @param player Player 玩家
    * 关闭玩家的附近语音聊天
    */
    close_role_micro_unit(player: Player): void;
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的同阵营语音聊天收听开关
    */
    set_role_camp_sound_switch(player: Player);
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的同阵营语音聊天发言开关
    */
    set_role_camp_micro_switch(player: Player);
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的所有人语音聊天收听开关
    */
    set_role_all_sound_switch(player: Player);
    /**
    * @param player Player 玩家
    * @param switch boolean 是否关闭
    * 设置玩家的所有人语音聊天发言开关
    */
    set_role_all_micro_switch(player: Player);
}
