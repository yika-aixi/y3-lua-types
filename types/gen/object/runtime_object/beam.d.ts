// @ts-nocheck
declare interface Beam {
    destructor(): void;
    create_lua_beam_by_py(py_beam: py.LinkSfx): Beam;
    create(data: Beam.CreateData): Beam;
    remove(): void;
    show(is_show: boolean): void;
    set(data: Beam.LinkData): void;
}
