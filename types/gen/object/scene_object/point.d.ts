// @ts-nocheck
declare interface Point {
    __tostring(): void;
    alloc(x: number, y: number, z: any): Point;
    get_point_by_res_id(res_id: number): Point;
    get_by_handle(py_point: Point.HandleType): Point;
    get_x(): number;
    get_y(): number;
    get_z(): number;
    move(x: number?, y: number?, z: number?): Point;
    create(x: number, y: number, z: any): Point;
    get_point_offset_vector(point: Point, direction: number, offset: number): Point;
    get_point_in_path(path: object, index: number): Point;
    get_angle_with(other: Point): number;
    get_distance_with(other: Point): number;
}
