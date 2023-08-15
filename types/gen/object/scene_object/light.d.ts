// @ts-nocheck
declare interface Light {
    get_point_light_by_res_id(res_id: py.LightID): Light;
    get_spot_light_by_res_id(res_id: py.LightID): Light;
    create_lua_light_by_py(py_light: py.Light): Light;
    get_light_attribute(key: string): number;
    get_light_cast_shadow_state(): boolean;
    create_point_light_at_point(point: Point, deviation_height: number): Light;
    create_point_light_at_unit_socket(unit: Unit, socket_name: string, deviation_height: number): Light;
    create_spot_light_to_point(point: Point, pos_offset_y: any, unit_point_projectile: any, target_offset_y: any): Light;
    create_spot_light_at_unit_socket(unit: Unit, socket_name: string, pos_offset_y: any, target_unit: any, target_offset_y: any): Light;
    remove_light(): void;
    set_shadow_casting_status(value: boolean): void;
    set_point_light_attribute(light_attr_type: string, value: number): void;
    set_directional_light_attribute(light_attr_type: string, value: number): void;
}
