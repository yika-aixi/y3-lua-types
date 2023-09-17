//@ts-nocheck
declare interface HealInstance {
    /**
    * @param data EventParam.单位受到治疗后
    * @param mode '治疗前' | '治疗时' | '治疗后'
    */
    __init(data: EventParam.\u5355\u4F4D-\u53D7\u5230\u6CBB\u7597\u540E, mode: '\u6CBB\u7597\u524D'): void;
    /**
    *  获取关联技能
    * @return Ability?
    */
    get_ability(): Ability?;
    /**
    *  获取当前治疗
    * @return number
    */
    get_heal(): number;
    /**
    *  修改当前治疗
    * @param value number
    */
    set_heal(value: number): void;
}
