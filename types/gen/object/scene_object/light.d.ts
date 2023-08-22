//@ts-nocheck
declare interface Light {
    /**
    * 根据场景id获得点光源
    * @param res_id py.LightID 编辑场景中的id
    * @return Light
    */
    get_point_light_by_res_id(res_id: py.LightID): Light;
    /**
    * 根据场景id获得聚光灯
    * @param res_id py.LightID 编辑场景中的id
    * @return Light
    */
    get_spot_light_by_res_id(res_id: py.LightID): Light;
    /**
    * @param py_light py.Light
    * @return Light light
    */
    create_lua_light_by_py(py_light: py.Light): Light;
    /**
    * TODO:点光源属性枚举需在Lua层处理
    * 获取光源属性
    * @param key string 属性名
    * @return number 属性值
    */
    get_light_attribute(key: string): number;
    /**
    * 获取光源是否产生阴影
    * @return boolean 是否产生阴影
    */
    get_light_cast_shadow_state(): boolean;
    /**
    * 创建点光源到点
    * @param point Point 目标点
    * @param deviation_height number 偏移高度
    * @return Light
    */
    create_point_light_at_point(point: Point, deviation_height: number): Light;
    /**
    * 创建点光源到单位挂接点
    * @param unit Unit 目标单位
    * @param socket_name string 挂接点
    * @param deviation_height number 偏移高度
    * @return Light
    */
    create_point_light_at_unit_socket(unit: Unit, socket_name: string, deviation_height: number): Light;
    /**
    * 创建方向光源到点
    * @param point Point 目标点
    * @param pos_offset_y? number 偏移高度
    * @param unit_point_projectile? Unit|Point|Projectile 目标
    * @param target_offset_y? number 目标点偏移高度
    * @return Light
    */
    create_spot_light_to_point(point: Point, pos_offset_y, unit_point_projectile, target_offset_y): Light;
    /**
    * 创建方向光源到单位挂接点
    * @param unit Unit 目标单位
    * @param socket_name string 挂接点
    * @param pos_offset_y? number 偏移高度
    * @param target_unit? Unit 目标单位
    * @param target_offset_y? number 目标点偏移高度
    * @return Light
    */
    create_spot_light_at_unit_socket(unit: Unit, socket_name: string, pos_offset_y, target_unit, target_offset_y): Light;
    /**
    * 删除光源
    */
    remove_light(): void;
    /**
    * 设置光源是否产生阴影
    * @param value boolean 是否产生阴影
    */
    set_shadow_casting_status(value: boolean): void;
    /**
    * 设置点光源属性
    * @param light_attr_type string 属性名
    * @param value number 属性值
    */
    set_point_light_attribute(light_attr_type: string, value: number): void;
    /**
    * 设置方向光源属性
    * @param light_attr_type string 属性名
    * @param value number 属性值
    */
    set_directional_light_attribute(light_attr_type: string, value: number): void;
}
