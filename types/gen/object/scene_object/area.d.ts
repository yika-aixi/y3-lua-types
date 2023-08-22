//@ts-nocheck
declare interface Area {
    /**
    
    */
    destructor(): void;
    /**
    * 根据py对象创建区域
    * @param py_area py.Area py层对象
    * @param type Area.Shape 见area.enum
    * @return Area
    */
    get_by_handle(py_area: py.Area, type: Area.Shape): Area;
    /**
    * @param res_id py.AreaID 编辑场景中的id
    * @param shape Area.Shape 见area.enum
    * @return Area
    */
    get_by_res_id(res_id: py.AreaID, shape: Area.Shape): Area;
    /**
    * 根据场景id获得圆形区域
    * @param res_id py.AreaID 编辑场景中的id
    * @return Area
    */
    get_circle_by_res_id(res_id: py.AreaID): Area;
    /**
    * 根据场景id获得矩形区域
    * @param res_id py.AreaID 编辑场景中的id
    * @return Area
    */
    get_rectangle_by_res_id(res_id: py.AreaID): Area;
    /**
    * 根据场景id获得多边形区域
    * @param res_id py.AreaID 编辑场景中的id
    * @return Area
    */
    get_polygon_by_res_id(res_id: py.AreaID): Area;
    /**
    * 删除区域
    */
    remove(): void;
    /**
    * 设置区域碰撞
    * @param is_collision_effect boolean  碰撞是否生效
    * @param is_land_effect boolean  地面碰撞开关
    * @param is_air_effect boolean  空中碰撞开关
    */
    set_collision(is_collision_effect: boolean, is_land_effect: boolean, is_air_effect: boolean): void;
    /**
    * 给区域添加标签
    * @param tag string tag
    */
    add_tag(tag: string): void;
    /**
    * 给区域移除标签
    * @param tag string tag
    */
    remove_tag(tag: string): void;
    /**
    * 区域是否有tag
    * @param tag string tag
    * @return boolean 区域是否有tag
    */
    has_tag(tag: string): boolean;
    /**
    * 设置多边形区域对玩家可见性
    * @param player Player 玩家
    * @param is_visibility boolean 是否开启视野
    * @param is_real_visibility boolean 是否开启真实视野
    */
    set_visible(player: Player, is_visibility: boolean, is_real_visibility: boolean): void;
    /**
    * 设置圆形区域半径
    * @param radius number 半径
    */
    set_radius(radius: number): void;
    /**
    * 设置矩形区域半径
    * @param horizontal_length number 长度
    * @param vertical_length number 宽度
    */
    set_size(horizontal_length: number, vertical_length: number): void;
    /**
    * 获得圆形区域半径
    * @return number 半径
    */
    get_radius(): number;
    /**
    * 获取区域内最小X坐标
    * @return number X坐标
    */
    get_min_x(): number;
    /**
    * 获取区域内最小Y坐标
    * @return number Y坐标
    */
    get_min_y(): number;
    /**
    * 获取区域内最大X坐标
    * @return number X坐标
    */
    get_max_x(): number;
    /**
    * 获取区域内最大Y坐标
    * @return number Y坐标
    */
    get_max_y(): number;
    /**
    *  获取中心点
    * @return Point 中心点
    */
    get_center_point(): Point;
    /**
    *  获取随机点
    * @return Point
    */
    random_point(): Point;
    /**
    * 获得区域天气
    * @return integer 天气枚举
    */
    get_weather(): number;
    /**
    * 区域内的所有单位
    * @return Unit[] 单位组
    */
    get_all_unit_in_area(): Unit[];
    /**
    * 区域内玩家单位(单位组)
    * @param player Player 玩家
    * @return UnitGroup 单位组
    */
    get_unit_group_in_area(player: Player): UnitGroup;
    /**
    * 区域中单位的数量
    * @return integer 数量
    */
    get_unit_num_in_area(): number;
    /**
    * 编辑区域碰撞
    * @param collision_layer integer 碰撞类型
    * @param is_add boolean  添加/去除
    */
    edit_area_collision(collision_layer: number, is_add: boolean): void;
    /**
    * 编辑区域视野阻挡
    * @param fov_block_type integer 视野阻挡类型
    * @param is_add boolean  添加/去除
    */
    edit_area_fov_block(fov_block_type: number, is_add: boolean): void;
    /**
    *  点是否在区域内
    * @param point Point 点
    * @return boolean
    */
    is_point_in_area(point: Point): boolean;
    /**
    * 类的方法
    * 获取完整地图区域
    * @return Area
    */
    get_map_area(): Area;
    /**
    * 获得最后创建的矩形区域
    * @return Area
    */
    get_rectangle_area_last_created(): Area;
    /**
    * 创建圆形区域
    * @param point Point 点
    * @param radius number 半径
    * @return Area 圆形区域
    */
    create_circle_area(point: Point, radius: number): Area;
    /**
    * 创建矩形区域
    * @param point Point 点
    * @param horizontal_length number 长度
    * @param vertical_length number 宽度
    * @return Area area 矩形区域
    */
    create_rectangle_area(point: Point, horizontal_length: number, vertical_length: number): Area;
    /**
    * 以起点终点创建矩形区域
    * @param point_one Point 点1
    * @param point_two Point 点2
    * @return Area area 矩形区域
    */
    create_rectangle_area_from_two_points(point_one: Point, point_two: Point): Area;
    /**
    * 沿点创建多边形
    * @param ... Point
    * @return Area polygon 多边形区域
    */
    create_polygon_area_by_points(...vararg: Point): Area;
    /**
    * 按标签获取所有的圆形区域
    * @param tag string 标签
    * @return Area[] area 矩形区域
    */
    get_circle_areas_by_tag(tag: string): Area[];
    /**
    * 按标签获取所有的矩形区域
    * @param tag string 标签
    * @return Area[] area 矩形区域表
    */
    get_rect_areas_by_tag(tag: string): Area[];
    /**
    * 按标签获取所有的多边形区域
    * @param tag string 标签
    * @return Area[] area 多边形区域表
    */
    get_polygon_areas_by_tag(tag: string): Area[];
    /**
    * 获取多边形的所有顶点
    * @param polygon Area 多边形区域
    * @return table area 多边形顶点表
    */
    get_polygon_areas_point_list(polygon: Area): object;
}
