//@ts-nocheck
declare interface DamageInstance {
    /**
    *  获取关联技能
    * @return Ability?
    */
    get_ability(): Ability?;
    /**
    *  获取当前伤害
    * @return number
    */
    get_damage(): number;
    /**
    *  修改当前伤害
    * @param damage number
    */
    set_damage(damage: number): void;
    /**
    *  获取当前伤害是否闪避
    * @return boolean
    */
    is_missed(): boolean;
    /**
    *  设置当前伤害是否闪避
    * @param missed boolean
    */
    set_missed(missed: boolean): void;
}
