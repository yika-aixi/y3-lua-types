//@ts-nocheck
declare interface PlayerGroup {
    /**
    
    */
    __tostring(): void;
    /**
    * @param py_player_group py.RoleGroup
    * @return self
    */
    __init(py_player_group: py.RoleGroup): this;
    /**
    * @param py_role_group py.RoleGroup
    * @return PlayerGroup
    */
    get_by_handle(py_role_group: py.RoleGroup): PlayerGroup;
    /**
    * 遍历玩家组中玩家做动作    不处理遍历
    * @return Player[]
    */
    pick(): Player[];
    /**
    * 添加玩家
    * @param player Player 玩家
    */
    add_player(player: Player): void;
    /**
    * 移除玩家
    * @param player Player 玩家
    */
    remove_player(player: Player): void;
    /**
    * 获取所有玩家
    * @return PlayerGroup player_group 单位组
    */
    get_all_players(): PlayerGroup;
    /**
    * 阵营內所有玩家
    * @param camp py.Camp 阵营
    * @return PlayerGroup player_group 单位组
    */
    get_player_group_by_camp(camp: py.Camp): PlayerGroup;
    /**
    * 玩家的所有敌对玩家
    * @param player Player 玩家
    * @return PlayerGroup player_group 单位组
    */
    get_enemy_player_group_by_player(player: Player): PlayerGroup;
    /**
    * 玩家的所有同盟玩家
    * @param player Player 玩家
    * @return PlayerGroup player_group 单位组
    */
    get_ally_player_group_by_player(player: Player): PlayerGroup;
    /**
    * 获取所有胜利的玩家
    * @return PlayerGroup player_group 单位组
    */
    get_victorious_player_group(): PlayerGroup;
    /**
    * 获取所有失败的玩家
    * @return PlayerGroup player_group 单位组
    */
    get_defeated_player_group(): PlayerGroup;
    /**
    * 所有非中立玩家
    * @return PlayerGroup player_group 单位组
    */
    get_neutral_player_group(): PlayerGroup;
}
