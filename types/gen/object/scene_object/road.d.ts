// @ts-nocheck
declare interface Road {
    get_road_by_res_id(res_id: number): Road;
    get_by_handle(py_road: py.Road): Road;
    has_tag(tag: string): boolean;
    remove_path(): void;
    add_point(index: number, point: Point): void;
    remove_point(index: number): void;
    add_tag(tag: string): void;
    remove_tag(tag: string): void;
    get_point_count(): number;
    create_path(start_point: Point): Road;
    get_path_areas_by_tag(tag: string): Road[];
}
