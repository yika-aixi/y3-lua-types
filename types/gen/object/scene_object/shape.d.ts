//@ts-nocheck
declare interface Shape {
    /**
    * @param py_shape py.Shape
    * @return self
    */
    __init(py_shape: py.Shape): this;
    /**
    * @param py_shape py.Shape
    * @return Shape
    */
    get_by_handle(py_shape: py.Shape): Shape;
    /**
    * 创建环形区域
    * @param in_radius number 内半径
    * @param out_radius number 外半径
    * @return Shape
    */
    create_annular_shape(in_radius: number, out_radius: number): Shape;
    /**
    * 创建圆形区域
    * @param radius number 半径
    * @return Shape
    */
    create_circular_shape(radius: number): Shape;
    /**
    * 创建矩形区域
    * @param width number 宽度
    * @param length number 长度
    * @param angle number 角度
    * @return Shape
    */
    create_rectangle_shape(width: number, length: number, angle: number): Shape;
    /**
    * 扇形
    * @param radius number 半径
    * @param angle number 角度
    * @param direction number 方向
    * @return Shape
    */
    create_sector_shape(radius: number, angle: number, direction: number): Shape;
}
