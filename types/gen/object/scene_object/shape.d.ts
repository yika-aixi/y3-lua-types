// @ts-nocheck
declare interface Shape {
    get_by_handle(py_shape: py.Shape): Shape;
    create_annular_shape(in_radius: number, out_radius: number): Shape;
    create_circular_shape(radius: number): Shape;
    create_rectangle_shape(width: number, length: number, angle: number): Shape;
    create_sector_shape(radius: number, angle: number, direction: number): Shape;
}
