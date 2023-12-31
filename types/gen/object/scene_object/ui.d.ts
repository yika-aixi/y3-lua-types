//@ts-nocheck
declare interface UI {
    /**
    * @param player Player
    * @param handle string
    * @return self
    */
    __init(player: Player, handle: string): this;
    /**
    
    */
    __del(): void;
    /**
    
    */
    __tostring(): void;
    /**
    * 通过py层的界面实例获取lua层的界面实例
    * @param player Player
    * @param handle string
    * @return UI
    */
    get_by_handle(player: Player, handle: string): UI;
    /**
    * 创建界面控件
    * @param player Player 玩家
    * @param parent_ui UI ui控件
    * @param comp_type y3.Const.UIComponentType ui控件
    * @return UI 返回在lua层初始化后的lua层技能实例
    */
    create_ui(player: Player, parent_ui: UI, comp_type: y3.Const.UIComponentType): UI;
    /**
    * @param player Player 玩家
    * @param ui_path string ui对象路径，自画板一级开始，父节点与子节点使用“.”链接
    * @return UI
    */
    get_ui(player: Player, ui_path: string): UI;
    /**
    * @param comp_type y3.Const.UIComponentType ui控件
    * @return UI 返回在lua层初始化后的lua层技能实例
    */
    create_child(comp_type: y3.Const.UIComponentType): UI;
    /**
    * 创建界面事件
    * @param event y3.Const.UIEvent 界面事件类型
    * @param name string 事件名
    * @return string
    */
    add_event(event: y3.Const.UIEvent, name: string): string;
    /**
    *  设置相对父级位置. 目前不建议使用, 引擎层存在 bug, 建议手动计算位置赋值.
    * @param direction y3.Const.UIRelativeParentPosType
    * @param offset number # 相对父级位置
    * @return UI
    */
    set_relative_parent_pos(direction: y3.Const.UIRelativeParentPosType, offset: number): UI;
    /**
    *  对玩家触发UI事件
    * @param event_name string
    */
    send_event(event_name: string): void;
    /**
    * 设置UI控件显隐
    * @param visible boolean 显示/隐藏
    * @return self
    */
    set_visible(visible: boolean): this;
    /**
    * 设置图片
    * @param img py.Texture 图片id
    * @return self
    */
    set_image(img: py.Texture): this;
    /**
    * 设置文本
    * @param str string 文本
    * @return self
    */
    set_text(str: string): this;
    /**
    * 设置控件透明度
    * @param value number 透明度
    * @return self
    */
    set_alpha(value: number): this;
    /**
    * 设置控件是否可拖动
    * @param isdrag boolean 是否可拖动
    * @return self
    */
    set_is_draggable(isdrag: boolean): this;
    /**
    * 设置控件是否拦截操作
    * @param intercepts boolean 是否拦截操作
    * @return self
    */
    set_intercepts_operations(intercepts: boolean): this;
    /**
    * 设置控件深度
    * @param deep integer 深度
    * @return self
    */
    set_z_order(deep: number): this;
    /**
    * 设置进度条最大值
    * @param progress number 进度条最大值
    * @return self
    */
    set_max_progress_bar_value(progress: number): this;
    /**
    * 设置进度条当前值
    * @param progress number 进度条当前值
    * @param time number? 渐变时间
    * @return self
    */
    set_current_progress_bar_value(progress: number, time: number?): this;
    /**
    * 启用/禁用按钮
    * @param enable boolean 启用/禁用按钮
    * @return self
    */
    set_button_enable(enable: boolean): this;
    /**
    * 设置控件尺寸
    * @param width number 宽度
    * @param height number 高度
    * @return self
    */
    set_ui_size(width: number, height: number): this;
    /**
    * 设置控件9宫格
    * @param x_left integer # x
    * @param x_right integer # y
    * @param y_top integer # width
    * @param y_bottom integer # height
    * @return self
    */
    set_ui_9(x_left: number, x_right: number, y_top: number, y_bottom: number): this;
    /**
    * 设置文本字体大小
    * @param size integer 字体大小
    * @return self
    */
    set_font_size(size: number): this;
    /**
    * 让输入框获取焦点
    * @return self
    */
    set_input_field_focus(): this;
    /**
    * 绑定技能对象到控件
    * @param skill Ability 技能对象
    * @return self
    */
    set_skill_on_ui_comp(skill: Ability): this;
    /**
    * 绑定单位到魔法效果显示栏组件
    * @param unit Unit 单位
    * @return self
    */
    set_buff_on_ui(unit: Unit): this;
    /**
    *  绑定物品对象到物品组件
    * @param item Item 物品对象
    * @return self
    */
    set_item_on_ui(item: Item): this;
    /**
    * 设置默认游戏界面的开关
    * @param player Player 玩家
    * @param visible boolean 游戏界面的开关
    */
    set_prefab_ui_visible(player: Player, visible: boolean): void;
    /**
    * 设置模型控件的模型
    * @param modelid py.Model 模型id
    * @return self
    */
    set_ui_model_id(modelid: py.Model): this;
    /**
    * 改变小地图图片
    * @param player Player 玩家
    * @param img py.Texture 图片id
    */
    change_mini_map_img(player: Player, img: py.Texture): void;
    /**
    * 设置物品组件绑定单位
    * @param unit Unit
    * @param field y3.Const.SlotType 背包槽位类型名
    * @param index integer 格子位置
    * @return self
    */
    set_ui_unit_slot(unit: Unit, field: y3.Const.SlotType, index: number): this;
    /**
    * 设置按钮快捷键
    * @param key integer 快捷键
    * @return self
    */
    set_button_shortcut(key: number): this;
    /**
    * 设置按钮组合快捷键
    * @param key integer 辅助按键
    * @return self
    */
    set_btn_meta_key(key: number): this;
    /**
    * 设置智能施法快捷键
    * @param key integer 快捷键
    * @return self
    */
    set_skill_btn_smart_cast_key(key: number): this;
    /**
    * 设置智能施法组合快捷键
    * @param key integer 辅助按键
    * @return self
    */
    set_skill_btn_func_meta_key(key: number): this;
    /**
    * 播放/停止技能按钮激活动效
    * @param isopen boolean 播放/停止技能按钮激活动效
    * @return self
    */
    set_skill_btn_action_effect(isopen: boolean): this;
    /**
    * 设置文本颜色
    * @param r number 红色
    * @param g number 红色
    * @param b number 红色
    * @param a number 红色
    * @return self
    */
    set_text_color(r: number, g: number, b: number, a: number): this;
    /**
    * 设置模型控件的镜头视野
    * @param fov number 视野范围
    * @return self
    */
    change_showroom_fov(fov: number): this;
    /**
    * 设置模型控件的镜头坐标
    * @param x number x轴
    * @param y number y轴
    * @param z number z轴
    * @return self
    */
    change_showroom_cposition(x: number, y: number, z: number): this;
    /**
    * 设置模型控件的镜头旋转
    * @param x number x轴
    * @param y number y轴
    * @param z number z轴
    * @return self
    */
    change_showroom_crotation(x: number, y: number, z: number): this;
    /**
    * 系统消息提示
    * @param player Player 玩家
    * @param msg string 消息
    * @param time number 持续时间
    * @param isSupportLanguage? boolean 是否支持语言环境
    */
    display_message(player: Player, msg: string, time: number, isSupportLanguage): void;
    /**
    * 设置界面模型控件背景色
    * @param r number 红色
    * @param g number 绿色
    * @param b number 蓝色
    * @param a number 透明度
    * @return self
    */
    set_show_room_background_color(r: number, g: number, b: number, a: number): this;
    /**
    * 设置控件相对旋转
    * @param rot number 角度
    * @return self
    */
    set_widget_relative_rotation(rot: number): this;
    /**
    * 设置控件绝对坐标
    * @param x number x轴
    * @param y number y轴
    * @return self
    */
    set_widget_absolute_coordinates(x: number, y: number): this;
    /**
    * 设置控件绝对旋转
    * @param rot number 角度
    * @return self
    */
    set_widget_absolute_rotation(rot: number): this;
    /**
    * 设置控件绝对缩放
    * @param x number x轴
    * @param y number y轴
    * @return self
    */
    set_widget_absolute_scale(x: number, y: number): this;
    /**
    * 设置控件相对缩放
    * @param x number x轴
    * @param y number y轴
    * @return self
    */
    set_widget_relative_scale(x: number, y: number): this;
    /**
    * 设置小地图显示模式
    * @param player Player 玩家
    * @param type integer 小地图显示模式
    */
    change_minimap_display_mode(player: Player, type: number): void;
    /**
    * 设置滑动条的进度
    * @param percent number 滑动条的进度
    * @return self
    */
    set_slider_value(percent: number): this;
    /**
    * 解绑控件
    * @return self
    */
    unbind_widget(): this;
    /**
    * 遍历某个界面控件的子节点
    * @return UI[]
    */
    get_ui_comp_children(): UI[];
    /**
    * 播放时间轴动画
    * @param player Player 玩家
    * @param anim string 动画
    * @param speed number 播放速度
    * @param isloop boolean 是否循环
    */
    play_timeline_animation(player: Player, anim: string, speed: number, isloop: boolean): void;
    /**
    * 设置模型控件观察点
    * @param x number x轴
    * @param y number y轴
    * @param z number z轴
    * @return self
    */
    set_ui_model_focus_pos(x: number, y: number, z: number): this;
    /**
    * 绑定单位属性到玩家界面控件的属性
    * @param uiAttr string 界面控件属性
    * @param attr string 单位属性
    * @param accuracy integer 小数精度
    * @return self
    */
    bind_player_attribute(uiAttr: string, attr: string, accuracy: number): this;
    /**
    * 绑定玩家属性到玩家界面控件的属性
    * @param uiAttr string 界面控件属性
    * @param player Player # 玩家
    * @param attr_or_var string # 玩家属性key
    * @param accuracy integer 小数精度
    * @return self
    */
    bind_player_prop(uiAttr: string, player: Player, attr_or_var: string, accuracy: number): this;
    /**
    * 绑定全局变量到玩家界面控件的属性
    * @param uiAttr string 界面控件属性
    * @param globalVar string 全局属性
    * @param accuracy integer 小数精度
    * @return self
    */
    bind_global_variable(uiAttr: string, globalVar: string, accuracy: number): this;
    /**
    * 解绑界面控件属性绑定
    * @param uiAttr string 界面控件属性
    * @return self
    */
    unbind(uiAttr: string): this;
    /**
    * 界面控件属性绑定指定单位
    * @param unit Unit 单位
    * @return self
    */
    bind_unit(unit: Unit): this;
    /**
    * 设置禁用图片(图片类型)
    * @param img integer 图片id
    * @return self
    */
    set_disable_image_type(img: number): this;
    /**
    * 设置悬浮图片(图片类型)
    * @param img integer 图片id
    * @return self
    */
    set_hover_image_type(img: number): this;
    /**
    * 设置按下图片(图片类型)
    * @param img integer 图片id
    * @return self
    */
    set_press_image_type(img: number): this;
    /**
    * 设置文本的对齐方式
    * @param h? y3.Const.UIHAlignmentType # 横向对齐方式
    * @param v? y3.Const.UIVAlignmentType # 纵向对齐方式
    * @return self
    */
    set_text_alignment(h, v): this;
    /**
    * 开启绘制单位路径线
    * @param player Player 玩家
    * @param unit Unit 单位
    */
    enable_drawing_unit_path(player: Player, unit: Unit): void;
    /**
    * 关闭绘制单位路径线
    * @param player Player 玩家
    * @param unit Unit 单位
    */
    disable_drawing_unit_path(player: Player, unit: Unit): void;
    /**
    * 删除界面控件
    */
    remove(): void;
    /**
    *  是否被删除
    */
    is_removed(): void;
    /**
    * 绑定技能冷却时间到玩家界面控件的属性
    * @param uiAttr string 界面控件属性
    * @param skill Ability 技能
    * @return self
    */
    bind_ability_cd(uiAttr: string, skill: Ability): this;
    /**
    * 绑定魔法效果剩余时间到玩家界面控件的属性
    * @param uiAttr string 界面控件属性
    * @param buff Buff 魔法效果
    * @return self
    */
    bind_buff_time(uiAttr: string, buff: Buff): this;
    /**
    * 开启/禁用发送聊天功能
    * @param enable boolean 开启/禁用发送聊天功能
    * @return self
    */
    enable_chat(enable: boolean): this;
    /**
    * 显示/隐藏聊天框
    * @param enable boolean 显示/隐藏聊天框
    * @param player Player 目标玩家
    * @return self
    */
    show_chat(player: Player, enable: boolean): this;
    /**
    * 清空聊天信息
    * @return self
    */
    clear_chat(): this;
    /**
    * 发送私聊信息
    * @param player Player 玩家
    * @param msg string 信息
    * @return self
    */
    send_chat(player: Player, msg: string): this;
    /**
    * 创建悬浮文字
    * @param point Point 点
    * @param text_type y3.Const.HarmTextType 跳字类型
    * @param str string 文字
    * @param player_group PlayerGroup 玩家组
    */
    create_floating_text(point: Point, text_type: y3.Const.HarmTextType, str: string, player_group: PlayerGroup): void;
    /**
    * 设置窗口
    * @param player Player 玩家
    * @param window_mode string 窗口类型
    */
    set_window_mode(player: Player, window_mode: string): void;
    /**
    * 设置画质
    * @param player Player 玩家
    * @param quality string 画质
    */
    set_graphics_quality(player: Player, quality: string): void;
    /**
    * 屏幕分辨率
    * @param player Player 玩家
    * @param x number x轴
    * @param y number y轴
    */
    set_screen_resolution(player: Player, x: number, y: number): void;
    /**
    * 获取本地控件相对坐标的X
    * @return number x x相对坐标
    */
    get_relative_x(): number;
    /**
    * 获取本地控件相对坐标的Y
    * @return number y y坐标
    */
    get_relative_y(): number;
    /**
    * 获取本地控件绝对坐标的X
    * @return number x x绝对坐标
    */
    get_absolute_x(): number;
    /**
    * 获取本地控件绝对坐标的Y
    * @return number y y绝对坐标
    */
    get_absolute_y(): number;
    /**
    * 获取本地控件相对旋转
    * @return number rot 相对旋转
    */
    get_relative_rotation(): number;
    /**
    * 获取本地控件绝对旋转
    * @return number rot 绝对旋转
    */
    get_absolute_rotation(): number;
    /**
    * 获取本地控件相对缩放的X
    * @return number x x相对缩放
    */
    get_relative_scale_x(): number;
    /**
    * 获取本地控件相对缩放的Y
    * @return number y y绝对缩放
    */
    get_relative_scale_y(): number;
    /**
    * 获取本地控件绝对缩放的X
    * @return number x x绝对缩放
    */
    get_absolute_scale_x(): number;
    /**
    * 获取本地控件绝对缩放的Y
    * @return number y y绝对缩放
    */
    get_absolute_scale_y(): number;
    /**
    * 界面控件转化为字符串
    * @return string str 字符串
    */
    to_string(): string;
    /**
    * 获取滑动条当前值
    * @return number slider_value 滑动条当前值
    */
    get_slider_current_value(): number;
    /**
    * 获得界面控件名
    * @return string  uiname 控件名
    */
    get_name(): string;
    /**
    * 获取指定命名的子控件
    * @param name string
    * @return UI? ui_comp ui控件
    */
    get_child(name: string): UI?;
    /**
    * 获得控件宽度
    * @return number width 控件宽度
    */
    get_width(): number;
    /**
    * 获得控件高度
    * @return number height 控件高度
    */
    get_height(): number;
    /**
    * 获得界面控件的父控件
    * @return UI ui_comp ui控件
    */
    get_parent(): UI;
    /**
    * 获得玩家输入框文本内容
    * @return string msg 文本内容
    */
    get_input_field_content(): string;
    /**
    * 获得控件可见性
    * @return boolean ui_visible 控件可见性
    */
    is_visible(): boolean;
    /**
    * 设置控件相对坐标
    * @param x number x轴
    * @param y number y轴
    * @return self
    */
    set_pos(x: number, y: number): this;
    /**
    * 设置界面控件的锚点
    * @param x number x轴
    * @param y number y轴
    * @return self
    */
    set_anchor(x: number, y: number): this;
    /**
    * 设置聊天频道
    * @param switch boolean 开关
    * @return self
    */
    set_nearby_micro_switch();
    /**
    * 获取屏幕横向分辨率
    * @return integer horizontal_res 横向分辨率
    */
    get_screen_width(): number;
    /**
    * 获取屏幕纵向分辨率
    * @return integer vertical_res 纵向分辨率
    */
    get_screen_height(): number;
    /**
    *  获取窗口宽度
    * @return integer
    */
    get_window_width(): number;
    /**
    *  获取窗口高度
    * @return integer
    */
    get_window_height(): number;
    /**
    *  设置控件跟随鼠标
    * @param follow_mouse boolean
    * @return self
    */
    set_follow_mouse(follow_mouse: boolean): this;
    /**
    *  设置鼠标样式
    * @param player Player
    * @param state y3.Const.CursorState
    * @param key py.CursorKey
    * @return self
    */
    set_cursor(player: Player, state: y3.Const.CursorState, key: py.CursorKey): this;
}
