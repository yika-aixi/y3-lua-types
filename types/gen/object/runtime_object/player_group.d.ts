// @ts-nocheck
declare interface PlayerGroup {
    __tostring(): void;
    get_by_handle(py_role_group: py.RoleGroup): PlayerGroup;
    pick(): Player[];
    add_player(player: Player): void;
    remove_player(player: Player): void;
    get_all_players(): PlayerGroup;
    get_player_group_by_camp(camp: py.Camp): PlayerGroup;
    get_enemy_player_group_by_player(player: Player): PlayerGroup;
    get_ally_player_group_by_player(player: Player): PlayerGroup;
    get_victorious_player_group(): PlayerGroup;
    get_defeated_player_group(): PlayerGroup;
    get_neutral_player_group(): PlayerGroup;
}
