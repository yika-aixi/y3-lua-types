// @ts-nocheck
declare interface Projectile {
    destructor(): void;
    get_by_handle(py_projectile: py.ProjectileEntity): Projectile;
    get_key(): py.ProjectileKey;
    is_exist(): boolean;
    get_height(): number;
    get_left_time(): number;
    get_owner(): Unit;
    get_facing(): number;
    get_point(): Point;
    has_tag(tag: any): boolean;
    add_tag(tag: string): void;
    remove_tag(tag: string): void;
    create(data: Projectile.CreateData): Projectile;
    set_owner(unit: Unit): void;
    set_ability(ability: Ability): void;
    remove(): void;
    set_height(height: number): void;
    set_point(point: Point): void;
    set_facing(direction: number): void;
    set_rotation(x: number, y: number, z: number): void;
    set_scale(x: number, y: number, z: number): void;
    set_animation_speed(speed: number): void;
    set_time(duration: number): void;
    add_time(duration: number): void;
    get_ability(): Ability?;
}
