// @ts-nocheck
declare interface Ground {
    set_collision(point: Point, is_collision_effect: boolean, is_land_effect: boolean, is_air_effect: boolean): void;
    get_collision(point: Point): number;
    get_view_block_type(point: Point): number;
    get_height_level(point: Point): number;
}
