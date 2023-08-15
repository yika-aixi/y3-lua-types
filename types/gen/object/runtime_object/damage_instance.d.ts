// @ts-nocheck
declare interface DamageInstance {
    get_ability(): Ability?;
    get_damage(): number;
    set_damage(damage: number): void;
    is_missed(): boolean;
    set_missed(missed: boolean): void;
}
