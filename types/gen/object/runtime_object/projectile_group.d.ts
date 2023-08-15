// @ts-nocheck
declare interface ProjectileGroup {
    create_lua_projectile_group_from_py(py_projectile_group: py.ProjectileGroup): ProjectileGroup;
    get_all_projectile_in_shapes(point: Point, shape: Shape): ProjectileGroup;
    get_all_projectiles_with_tag(tag: string): ProjectileGroup;
    pick(): Projectile[];
}
