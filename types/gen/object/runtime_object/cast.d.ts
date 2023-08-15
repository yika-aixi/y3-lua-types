// @ts-nocheck
declare interface Cast {
    __tostring(): void;
    get_ability(): Ability;
    get_angle(): number;
    get_target_item(): Item?;
    get_target_unit(): Unit?;
    get_target_destructible(): Destructible?;
    get_target_point(): Point?;
}
