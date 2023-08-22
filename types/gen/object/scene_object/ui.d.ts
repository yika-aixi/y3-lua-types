//@ts-nocheck
declare interface UI {
    /**
    
    */
    destructor(): void;
    /**
    
    */
    __tostring(): void;
    /**
    * 通过py层的界面实例获取lua层的界面实例
    * @param player Player
    * @param  handle string
    * @return UI
    */
    get_by_handle(player: Player, handle): UI;
    /**
    * 创建界面控件
    * @param  player Player 玩家
    * @param  parent_ui UI ui控件
    * @param  comp_type y3.Const.UIComponentType ui控件
    * @return UI 返回在lua层初始化后的lua层技能实例
    */
    create_ui(player, parent_ui, comp_type): UI;
    /**
    * @param  player Player 玩家
    * @param  ui_path string ui对象路径，自画板一级开始，父节点与子节点使用“.”链接
    * @return UI
    */
    get_ui(player, ui_path): UI;
    /**
    * @param  comp_type y3.Const.UIComponentType ui控件
    * @return UI 返回在lua层初始化后的lua层技能实例
    */
    create_child(comp_type): UI;
    /**
    * 创建界面事件
    * @param  event y3.Const.UIEvent 界面事件类型
    * @param  name string 事件名
    * @return string
    */
    add_event(event, name): string;
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
    * @param  visible boolean 显示/隐藏
    * @return self
    */
    set_visible(visible): self;
    /**
    * 设置图片
    * @param  img py.Texture 图片id
    * @return self
    */
    set_image(img): self;
    /**
    * 设置文本
    * @param  str string 文本
    * @return self
    */
    set_text(str): self;
    /**
    * 设置控件透明度
    * @param  value number 透明度
    * @return self
    */
    set_alpha(value): self;
    /**
    * 设置控件是否可拖动
    * @param  isdrag boolean 是否可拖动
    * @return self
    */
    set_is_draggable(isdrag): self;
    /**
    * 设置控件是否拦截操作
    * @param  intercepts boolean 是否拦截操作
    * @return self
    */
    set_intercepts_operations(intercepts): self;
    /**
    * 设置控件深度
    * @param  deep integer 深度
    * @return self
    */
    set_z_order(deep): self;
    /**
    * 设置进度条最大值
    * @param  progress number 进度条最大值
    * @return self
    */
    set_max_progress_bar_value(progress): self;
    /**
    * 设置进度条当前值
    * @param  progress number 进度条当前值
    * @param  time number? 渐变时间
    * @return self
    */
    set_current_progress_bar_value(progress, time): self;
    /**
    * 启用/禁用按钮
    * @param  enable boolean 启用/禁用按钮
    * @return self
    */
    set_button_enable(enable): self;
    /**
    * 设置控件尺寸
    * @param  width number 宽度
    * @param  height number 高度
    * @return self
    */
    set_ui_size(width, height): self;
    /**
    * 设置文本字体大小
    * @param  size integer 字体大小
    * @return self
    */
    set_font_size(size): self;
    /**
    * 让输入框获取焦点
    * @return self
    */
    set_input_field_focus(): self;
    /**
    * 绑定技能对象到控件
    * @param  skill Ability 技能对象
    * @return self
    */
    set_skill_on_ui_comp(skill): self;
    /**
    * 绑定单位到魔法效果显示栏组件
    * @param  unit Unit 单位
    * @return self
    */
    set_buff_on_ui(unit): self;
    /**
    *  绑定物品对象到物品组件
    * @param  item Item 物品对象
    * @return self
    */
    set_item_on_ui(item): self;
    /**
    * 设置默认游戏界面的开关
    * @param  player Player 玩家
    * @param  visible boolean 游戏界面的开关
    */
    set_prefab_ui_visible(player, visible): void;
    /**
    * 设置模型控件的模型
    * @param  modelid py.Model 模型id
    * @return self
    */
    set_ui_model_id(modelid): self;
    /**
    * 改变小地图图片
    * @param  player Player 玩家
    * @param  img py.Texture 图片id
    */
    change_mini_map_img(player, img): void;
    /**
    * 设置物品组件绑定单位
    * @param  unit Unit
    * @param  field y3.Const.SlotType 背包槽位类型名
    * @param  index integer 格子位置
    * @return self
    */
    set_ui_unit_slot(unit, field, index): self;
    /**
    * 设置按钮快捷键
    * @param  key integer 快捷键
    * @return self
    */
    set_button_shortcut(key): self;
    /**
    * 设置按钮组合快捷键
    * @param  key integer 辅助按键
    * @return self
    */
    set_btn_meta_key(key): self;
    /**
    * 设置智能施法快捷键
    * @param  key integer 快捷键
    * @return self
    */
    set_skill_btn_smart_cast_key(key): self;
    /**
    * 设置智能施法组合快捷键
    * @param  key integer 辅助按键
    * @return self
    */
    set_skill_btn_func_meta_key(key): self;
    /**
    * 播放/停止技能按钮激活动效
    * @param  isopen boolean 播放/停止技能按钮激活动效
    * @return self
    */
    set_skill_btn_action_effect(isopen): self;
    /**
    * 设置文本颜色
    * @param  r number 红色
    * @param  g number 红色
    * @param  b number 红色
    * @param  a number 红色
    * @return self
    */
    set_text_color(r, g, b, a): self;
    /**
    * 设置模型控件的镜头视野
    * @param  fov number 视野范围
    * @return self
    */
    change_showroom_fov(fov): self;
    /**
    * 设置模型控件的镜头坐标
    * @param  x number x轴
    * @param  y number y轴
    * @param  z number z轴
    * @return self
    */
    change_showroom_cposition(x, y, z): self;
    /**
    * 设置模型控件的镜头旋转
    * @param  x number x轴
    * @param  y number y轴
    * @param  z number z轴
    * @return self
    */
    change_showroom_crotation(x, y, z): self;
    /**
    * 系统消息提示
    * @param  player Player 玩家
    * @param  msg string 消息
    * @param  time number 持续时间
    * @param  isSupportLanguage? boolean 是否支持语言环境
    */
    display_message(player, msg, time, isSupportLanguage): void;
    /**
    * 设置界面模型控件背景色
    * @param  r number 红色
    * @param  g number 绿色
    * @param  b number 蓝色
    * @param  a number 透明度
    * @return self
    */
    set_show_room_background_color(r, g, b, a): self;
    /**
    * 设置控件相对旋转
    * @param  rot number 角度
    * @return self
    */
    set_widget_relative_rotation(rot): self;
    /**
    * 设置控件绝对坐标
    * @param  x number x轴
    * @param  y number y轴
    * @return self
    */
    set_widget_absolute_coordinates(x, y): self;
    /**
    * 设置控件绝对旋转
    * @param  rot number 角度
    * @return self
    */
    set_widget_absolute_rotation(rot): self;
    /**
    * 设置控件绝对缩放
    * @param  x number x轴
    * @param  y number y轴
    * @return self
    */
    set_widget_absolute_scale(x, y): self;
    /**
    * 设置控件相对缩放
    * @param  x number x轴
    * @param  y number y轴
    * @return self
    */
    set_widget_relative_scale(x, y): self;
    /**
    * 设置小地图显示模式
    * @param  player Player 玩家
    * @param  type integer 小地图显示模式
    */
    change_minimap_display_mode(player, type): void;
    /**
    * 设置滑动条的进度
    * @param  percent number 滑动条的进度
    * @return self
    */
    set_slider_value(percent): self;
    /**
    * 解绑控件
    * @return self
    */
    unbind_widget(): self;
    /**
    * 遍历某个界面控件的子节点
    * @return UI[]
    */
    get_ui_comp_children(): UI[];
    /**
    * 播放时间轴动画
    * @param  player Player 玩家
    * @param  anim string 动画
    * @param  speed number 播放速度
    * @param  isloop boolean 是否循环
    */
    play_timeline_animation(player, anim, speed, isloop): void;
    /**
    * 设置模型控件观察点
    * @param  x number x轴
    * @param  y number y轴
    * @param  z number z轴
    * @return self
    */
    set_ui_model_focus_pos(x, y, z): self;
    /**
    * 绑定单位属性到玩家界面控件的属性
    * @param  uiAttr string 界面控件属性
    * @param  attr string 单位属性
    * @param  accuracy integer 小数精度
    * @return self
    */
    bind_player_attribute(uiAttr, attr, accuracy): self;
    /**
    * 绑定全局变量到玩家界面控件的属性
    * @param  uiAttr string 界面控件属性
    * @param  globalVar string 全局属性
    * @param  accuracy integer 小数精度
    * @return self
    */
    bind_global_variable(uiAttr, globalVar, accuracy): self;
    /**
    * 解绑界面控件属性绑定
    * @param  uiAttr string 界面控件属性
    * @return self
    */
    unbind(uiAttr): self;
    /**
    * 界面控件属性绑定指定单位
    * @param  unit Unit 单位
    * @return self
    */
    bind_unit(unit): self;
    /**
    * 设置禁用图片(图片类型)
    * @param  img integer 图片id
    * @return self
    */
    set_disable_image_type(img): self;
    /**
    * 设置悬浮图片(图片类型)
    * @param  img integer 图片id
    * @return self
    */
    set_hover_image_type(img): self;
    /**
    * 设置按下图片(图片类型)
    * @param  img integer 图片id
    * @return self
    */
    set_press_image_type(img): self;
    /**
    * 设置文本的对齐方式
    * @param h? y3.Const.UIHAlignmentType # 横向对齐方式
    * @param v? y3.Const.UIVAlignmentType # 纵向对齐方式
    * @return self
    */
    set_text_alignment(h, v): self;
    /**
    * 开启绘制单位路径线
    * @param  player Player 玩家
    * @param  unit Unit 单位
    */
    enable_drawing_unit_path(player, unit): void;
    /**
    * 关闭绘制单位路径线
    * @param  player Player 玩家
    * @param  unit Unit 单位
    */
    disable_drawing_unit_path(player, unit): void;
    /**
    * 删除界面控件
    */
    remove(): void;
    /**
    * 绑定技能冷却时间到玩家界面控件的属性
    * @param  uiAttr string 界面控件属性
    * @param  skill Ability 技能
    * @return self
    */
    bind_ability_cd(uiAttr, skill): self;
    /**
    * 绑定魔法效果剩余时间到玩家界面控件的属性
    * @param  uiAttr string 界面控件属性
    * @param  buff Buff 魔法效果
    * @return self
    */
    bind_buff_time(uiAttr, buff): self;
    /**
    * 开启/禁用发送聊天功能
    * @param  enable boolean 开启/禁用发送聊天功能
    * @return self
    */
    enable_chat(enable): self;
    /**
    * 显示/隐藏聊天框
    * @param  enable boolean 显示/隐藏聊天框
    * @param  player Player 目标玩家
    * @return self
    */
    show_chat(player, enable): self;
    /**
    * 清空聊天信息
    * @return self
    */
    clear_chat(): self;
    /**
    * 发送私聊信息
    * @param  player Player 玩家
    * @param  msg string 信息
    * @return self
    */
    send_chat(player, msg): self;
    /**
    * 创建悬浮文字
    * @param  point Point 点
    * @param  harm_type integer 跳字类型
    * @param  str string 文字
    * @param  player_group PlayerGroup 玩家组
    */
    create_floating_text(point, harm_type, str, player_group): void;
    /**
    * 设置窗口
    * @param  player Player 玩家
    * @param  window_mode string 窗口类型
    */
    set_window_mode(player, window_mode): void;
    /**
    * 设置画质
    * @param  player Player 玩家
    * @param  quality string 画质
    */
    set_graphics_quality(player, quality): void;
    /**
    * 屏幕分辨率
    * @param  player Player 玩家
    * @param  x number x轴
    * @param  y number y轴
    */
    set_screen_resolution(player, x, y): void;
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
    * 设置ui坐标
    * @param  x number x轴
    * @param  y number y轴
    * @return self
    */
    set_pos(x, y): self;
    /**
    * 设置界面控件的锚点
    * @param  x number x轴
    * @param  y number y轴
    * @return self
    */
    set_anchor(x, y): self;
    /**
    * 设置聊天频道
    * @param  switch boolean 开关
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
    set_follow_mouse(follow_mouse: boolean): self;
    /**
    *  设置鼠标样式
    * @param player Player
    * @param state y3.Const.CursorState
    * @param key py.CursorKey
    * @return self
    */
    set_cursor(player: Player, state: y3.Const.CursorState, key: py.CursorKey): self;
}
