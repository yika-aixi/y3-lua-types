//@ts-nocheck
declare interface Camera {
    /**
    * @param py_camera integer
    * @return self
    */
    __init(py_camera: number): this;
    /**
    * @param py_camera integer
    * @return Camera camera
    */
    get_by_handle(py_camera: number): Camera;
    /**
    * 玩家镜头是否正在播放动画
    * @param player Player 玩家
    * @return boolean 是否正在播放动画
    */
    is_camera_playing_timeline(player: Player): boolean;
    /**
    * 创建镜头
    * @param point Point 镜头所在点
    * @param focal_length number 焦距
    * @param focal_height number 焦点高度
    * @param yaw number 镜头的yaw
    * @param pitch number 镜头的pitch
    * @param range_of_visibility number 远景裁切范围
    * @return Camera
    */
    create_camera(point: Point, focal_length: number, focal_height: number, yaw: number, pitch: number, range_of_visibility: number): Camera;
    /**
    * 允许玩家镜头移动
    * @param player Player 玩家
    */
    enable_camera_move(player: Player): void;
    /**
    * 禁止玩家镜头移动
    * @param player Player 玩家
    */
    disable_camera_move(player: Player): void;
    /**
    * 播放镜头动画
    * @param player Player 玩家
    * @param camera_timeline_id py.CamlineID 镜头动画ID
    */
    play_camera_timeline(player: Player, camera_timeline_id: py.CamlineID): void;
    /**
    * 停止镜头动画
    * @param player Player 玩家
    */
    stop_camera_timeline(player: Player): void;
    /**
    * 镜头带衰减震动
    * @param player Player 玩家
    * @param shake number 震动幅度
    * @param attenuation number 衰减
    * @param frequency number 频率
    * @param time number 持续时间
    * @param shake_type integer 震动模式
    */
    camera_shake_with_decay(player: Player, shake: number, attenuation: number, frequency: number, time: number, shake_type: number): void;
    /**
    * 镜头摇晃镜头
    * @param player Player 玩家
    * @param strength number 晃动幅度
    * @param speed number 速率
    * @param time number 持续时间
    * @param shake_type integer 震动模式
    */
    camera_shake(player: Player, strength: number, speed: number, time: number, shake_type: number): void;
    /**
    * 设置TPS视角鼠标显示
    * @param player Player 玩家
    * @param switch boolean 是否显示鼠标
    */
    show_tps_mode_mouse(player: Player);
    /**
    * 线性移动（时间）
    * @param player Player 玩家
    * @param point Point 目标点
    * @param time number 过渡时间
    * @param move_type integer 移动模式
    */
    linear_move_by_time(player: Player, point: Point, time: number, move_type: number): void;
    /**
    * 设置镜头跟随单位
    * @param player Player 玩家
    * @param unit Unit 目标单位
    * @param x number 过渡时间
    * @param y number 移动模式
    * @param height number 高度
    */
    set_camera_follow_unit(player: Player, unit: Unit, x: number, y: number, height: number): void;
    /**
    * 设置镜头取消跟随
    * @param player Player 玩家
    */
    cancel_camera_follow_unit(player: Player): void;
    /**
    * 设置镜头第三人称跟随单位
    * @param player Player 玩家
    * @param unit Unit 目标单位
    * @param sensitivity? number 灵敏度
    * @param yaw? number yaw
    * @param pitch? number pitch
    * @param x_offset? number 偏移量X
    * @param y_offset? number 偏移量Y
    * @param z_offset? number 偏移高度
    * @param camera_distance? number 距离焦点距离
    */
    set_tps_follow_unit(player: Player, unit: Unit, sensitivity, yaw, pitch, x_offset, y_offset, z_offset, camera_distance): void;
    /**
    * 取消镜头第三人称跟随单位
    * @param player Player 玩家
    */
    cancel_tps_follow_unit(player: Player): void;
    /**
    * 设置镜头朝向点
    * @param player Player 玩家
    * @param point Point 目标点
    * @param time number 过渡时间
    */
    look_at_point(player: Player, point: Point, time: number): void;
    /**
    * 设置镜头高度上限
    * @param player Player 玩家
    * @param value number 高度上限
    */
    set_max_distance(player: Player, value: number): void;
    /**
    * 设置镜头角度
    * @param player Player 玩家
    * @param angle_type py.CameraRotate 角度类型
    * @param value number 值
    * @param time number 过渡时间
    */
    set_rotate(player: Player, angle_type: py.CameraRotate, value: number, time: number): void;
    /**
    * 设置焦点距离
    * @param player Player 玩家
    * @param value number 值
    * @param time number 过渡时间
    */
    set_distance(player: Player, value: number, time: number): void;
    /**
    * 设置镜头焦点高度
    * @param player Player 玩家
    * @param value number 值
    * @param time number 过渡时间
    */
    set_focus_height(player: Player, value: number, time: number): void;
    /**
    * 限制镜头移动范围
    * @param player Player 玩家
    * @param area Area 移动范围区域
    */
    limit_in_rectangle_area(player: Player, area: Area): void;
    /**
    * 关闭镜头限制移动
    * @param player Player 玩家
    */
    cancel_area_limit(player: Player): void;
    /**
    * 设置是否可以鼠标移动镜头
    * @param player Player 玩家
    * @param state boolean 开关
    */
    set_moving_with_mouse(player: Player, state: boolean): void;
    /**
    * 设置镜头移动速度（鼠标）
    * @param player Player 玩家
    * @param speed number 移动速度
    */
    set_mouse_move_camera_speed(player: Player, speed: number): void;
    /**
    * 设置镜头移动速度（键盘）
    * @param player Player 玩家
    * @param speed number 移动速度
    */
    set_keyboard_move_camera_speed(player: Player, speed: number): void;
    /**
    *  获取玩家摄像机朝向。
    *  必须先设置 `y3.config.sync.camera = true`
    * @param player Player 玩家
    * @return Point 摄像机朝向
    */
    get_player_camera_direction(player: Player): Point;
    /**
    *  获取玩家摄像机中心射线的碰撞点。
    *  必须先设置 `y3.config.sync.camera = true`
    * @param player Player 玩家
    * @return Point 摄像机中心射线的碰撞点
    */
    get_camera_center_raycast(player: Player): Point;
}
