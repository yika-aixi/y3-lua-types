//@ts-nocheck
declare interface Technology {
    /**
    * 检查科技类型前置条件
    * @param player Player 玩家
    * @param tech_key py.TechKey 技能类型id (物编id)
    * @return boolean is_meet 技能类型前置条件是否满足
    */
    check_precondition_by_key(player: Player, tech_key: py.TechKey): boolean;
}
