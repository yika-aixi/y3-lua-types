//@ts-nocheck
declare interface Ground {
    /**
    * 设置碰撞
    * @param point Point  碰撞点
    * @param is_collision_effect boolean  碰撞是否生效
    * @param is_land_effect boolean  地面碰撞开关
    * @param is_air_effect boolean  空中碰撞开关
    */
    set_collision(point: Point, is_collision_effect: boolean, is_land_effect: boolean, is_air_effect: boolean): void;
    /**
    * 获取地图在该点位置的碰撞类型
    * @param point Point  碰撞点
    * @return integer
    */
    get_collision(point: Point): number;
    /**
    * 获取地图在该点位置的视野类型
    * @param point Point
    * @return integer
    */
    get_view_block_type(point: Point): number;
    /**
    * 获取地图在该点位置的层级
    * @param point Point 点
    * @return integer level 层级
    */
    get_height_level(point: Point): number;
}
