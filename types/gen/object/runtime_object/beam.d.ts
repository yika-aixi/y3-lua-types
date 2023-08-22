//@ts-nocheck
declare interface Beam {
    /**
    
    */
    destructor(): void;
    /**
    * @param py_beam py.LinkSfx
    * @return Beam beam
    */
    create_lua_beam_by_py(py_beam: py.LinkSfx): Beam;
    /**
    * @class Beam.CreateData
    * @field key py.SfxKey 特效id
    * @field source Unit|Point 目标
    * @field target Unit|Point 目标
    * @field time? number 存在时间
    * @field source_height? number 高度（只在目标是点时生效）
    * @field target_height? number 高度（只在目标是点时生效）
    * @field source_socket? string 挂接点（只在目标是单位时生效）
    * @field target_socket? string 挂接点（只在目标是单位时生效）
    * @field immediate? boolean 销毁时，是否有过度
    * @param data Beam.CreateData
    * @return Beam
    */
    create(data: Beam.CreateData): Beam;
    /**
    * 链接特效  销毁
    */
    remove(): void;
    /**
    * @param is_show boolean 是否显示
    * 链接特效  显示/隐藏
    */
    show(is_show: boolean): void;
    /**
    * @class Beam.LinkData
    * @field point_type y3.Const.LinkSfxPointType 起点or终点
    * @field target Unit|Point 目标
    * @field height? number 高度（只在目标是点时生效）
    * @field socket? string 挂接点（只在目标是单位时生效）
    * 链接特效  设置位置
    * @param data Beam.LinkData
    */
    set(data: Beam.LinkData): void;
}
