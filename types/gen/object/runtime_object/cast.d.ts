//@ts-nocheck
declare interface Cast {
    /**
    * @param ability Ability
    * @param cast_id integer
    * @return self
    */
    __init(ability: Ability, cast_id: number): this;
    /**
    
    */
    __tostring(): void;
    /**
    *  获取技能
    * @return Ability
    */
    get_ability(): Ability;
    /**
    *  获取施法方向
    * @return number
    */
    get_angle(): number;
    /**
    *  获取施法目标物品
    * @return Item?
    */
    get_target_item(): Item?;
    /**
    *  获取施法目标单位
    * @return Unit?
    */
    get_target_unit(): Unit?;
    /**
    *  获取施法目标可破坏物
    * @return Destructible?
    */
    get_target_destructible(): Destructible?;
    /**
    *  获取施法目标点
    * @return Point?
    */
    get_target_point(): Point?;
}
