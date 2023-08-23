//@ts-nocheck
declare interface ProjectileGroup {
    /**
    * @param py_projectile_group py.ProjectileGroup
    * @return self
    */
    __init(py_projectile_group: py.ProjectileGroup): self;
    /**
    * @param py_projectile_group py.ProjectileGroup
    * @return ProjectileGroup
    */
    create_lua_projectile_group_from_py(py_projectile_group: py.ProjectileGroup): ProjectileGroup;
    /**
    * 筛选范围内的所有投射物
    * @param point Point 点
    * @param shape Shape 筛选范围
    * @return ProjectileGroup
    */
    get_all_projectile_in_shapes(point: Point, shape: Shape): ProjectileGroup;
    /**
    * 获取拥有指定标签的投射物
    * @param tag string 点
    * @return ProjectileGroup
    */
    get_all_projectiles_with_tag(tag: string): ProjectileGroup;
    /**
    * 遍历投射物组中投射物做动作
    * @return Projectile[]
    */
    pick(): Projectile[];
}
