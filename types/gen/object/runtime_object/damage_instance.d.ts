//@ts-nocheck
declare interface DamageInstance {
    /**
    * @param data EventParam.单位受到伤害后
    * @param mode '伤害前' | '伤害时' | '伤害后'
    */
    __init(data: EventParam.\u5355\u4F4D-\u53D7\u5230\u4F24\u5BB3\u540E, mode: '\u4F24\u5BB3\u524D'): void;
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
