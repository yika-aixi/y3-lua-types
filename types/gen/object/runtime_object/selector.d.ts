// @ts-nocheck
declare interface Selector {
    in_shape(pos: Point, shape: Shape): self;
    of_player(p: Player): self;
    is_visible(p: Player): self;
    not_visible(p: Player): self;
    not_in_group(ug: UnitGroup): self;
    with_tag(tag: string): self;
    without_tag(tag: string): self;
    not_is(u: Unit): self;
    in_state(state: number): self;
    not_in_state(state: number): self;
    is_unit_key(unit_key: py.UnitKey): self;
    is_unit_type(unit_type: py.UnitType): self;
    include_dead(): self;
    count(count: number): self;
    get(): UnitGroup;
    create(): Selector;
}
