// @ts-nocheck
declare interface UnitGroup {
    get_by_handle(py_unit_group: py.UnitGroup): UnitGroup;
    pick(): Unit[];
    select_units(): void;
    add_unit(unit: Unit): void;
    remove_unit(unit: Unit): void;
    remove_units_by_key(unit_key: py.UnitKey): void;
    pick_random_n(count: number): UnitGroup;
    pick_by_key(unit_key: py.UnitKey): UnitGroup;
    count(): number;
    count_by_key(unit_key: py.UnitKey): number;
    get_first(): Unit;
    get_random(): Unit;
    get_last(): Unit;
}
