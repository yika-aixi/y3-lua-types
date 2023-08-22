//@ts-nocheck
declare interface Point {
    /**
    
    */
    __tostring(): void;
    /**
    * @private
    * @param x number
    * @param y number
    * @param z? number
    * @return Point
    */
    alloc(x: number, y: number, z): Point;
    /**
    * @param res_id integer
    * @return Point
    */
    get_point_by_res_id(res_id: number): Point;
    /**
    * 根据py对象创建点
    * @param py_point Point.HandleType
    * @return Point
    */
    get_by_handle(py_point: Point.HandleType): Point;
    /**
    * 点的x坐标
    * @return number
    */
    get_x(): number;
    /**
    * 点的y坐标
    * @return number
    */
    get_y(): number;
    /**
    * 点的z坐标
    * @return number
    */
    get_z(): number;
    /**
    *  移动点
    * @param x number?
    * @param y number?
    * @param z number?
    * @return Point
    */
    move(x: number?, y: number?, z: number?): Point;
    /**
    * 坐标转化为点
    * @param x number 点X坐标
    * @param y number 点Y坐标
    * @param z? number 点Z坐标
    * @return Point
    */
    create(x: number, y: number, z): Point;
    /**
    * 点向方向偏移
    * @param point Point 点
    * @param direction number 偏移方向点
    * @param offset number 偏移量
    * @return Point
    */
    get_point_offset_vector(point: Point, direction: number, offset: number): Point;
    /**
    * 路径中的点
    * @param path table 目标路径
    * @param index integer 索引
    * @return Point
    */
    get_point_in_path(path: object, index: number): Point;
    /**
    *  获取与另一个点的方向
    * @param other Point
    * @return number
    */
    get_angle_with(other: Point): number;
    /**
    *  获取与另一个点的距离
    * @param other Point
    * @return number
    */
    get_distance_with(other: Point): number;
}
