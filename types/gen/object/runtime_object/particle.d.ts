// @ts-nocheck
declare interface Particle {
    __tostring(): void;
    destructor(): void;
    get_by_handle(py_sfx: py.Sfx): Particle;
    create_screen(data: Particle.Param.Screen): Particle;
    create(data: Particle.Param.Create): Particle;
    get_handle(): py.Sfx;
    remove(): void;
    set_rotate(x: number, y: number, z: number): void;
    set_facing(direction: number): void;
    set_scale(x: number, y: number, z: number): void;
    set_height(height: number): void;
    set_point(point: Point): void;
    set_animation_speed(speed: number): void;
    set_time(duration: number): void;
}
