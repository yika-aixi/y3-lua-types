// @ts-nocheck
declare interface GameEventCallbackParamsDeclarations {
    /*LOGIC_UNIT_DESTROY*/
    ['ET_LOGIC_UNIT_DESTROY'];
    /*定时器超时*/
    ['ET_TIMEOUT'];
    /*周期性定时器超时*/
    ['ET_REPEAT_TIMEOUT'];
    /*经过一定帧数*/
    ['ET_TIMEOUT_BY_FRAME'];
    /*周期性经过一定帧数*/
    ['ET_REPEAT_TIMEOUT_BY_FRAME'];
    /*游戏初始化*/
    ['ET_GAME_INIT'];
    /*Loading结束*/
    ['ET_LOADING_END'];
    /*重启客户端追帧完成*/
    ['ET_RELAUNCH_FRAME_CATCHING_FINISHED'];
    /*接收触发事件*/
    ['ET_RECV_TRIGGER']: {
        /*触发器id*/
        trigger_id: py.TriggerID;
    };
    /*游戏结束*/
    ['ET_GAME_END'];
    /*游戏暂停*/
    ['ET_GAME_PAUSE'];
    /*游戏恢复*/
    ['ET_GAME_RESUME'];
    /*空事件*/
    ['ET_EMPTY'];
    /*全局计时器超时*/
    ['TIMER_TIMEOUT']: {
        /*计时器名称*/
        name: string;
    };
    /*昼夜发生变化*/
    ['ET_DAY_NIGHT_CHANGE']: {
        /*是否是白天转到黑夜*/
        is_day_to_night: boolean;
    };
    /*添加容器*/
    ['ET_CONTAINER_ADDED']: {
        /*容器名*/
        name: string;
        /*容器*/
        container: py.ActorContainer;
    };
    /*容器中添加actor*/
    ['ET_CONTAINER_ACTOR_ADDED']: {
        /*容器从属actor*/
        owner: py.Actor;
    };
    /*容器中删除actor*/
    ['ET_CONTAINER_ACTOR_REMOVED']: {
        /*原容器从属actor*/
        owner: py.Actor;
    };
    /*actor属性更新*/
    ['ET_ACTOR_ATTR_UPDATED']: {
        /*属性名*/
        name: string;
    };
    /*单位进入区域*/
    ['ET_AREA_ENTER']: {
        /*单位*/
        unit: Unit;
        /*区域*/
        area: Area;
        /*触发器ID*/
        trigger_id: py.TriggerID;
    };
    /*单位离开区域*/
    ['ET_AREA_LEAVE']: {
        /*单位*/
        unit: Unit;
        /*区域*/
        area: Area;
        /*触发器ID*/
        trigger_id: py.TriggerID;
    };
    /*玩家加入战斗*/
    ['ET_ROLE_JOIN_BATTLE']: {
        /*玩家*/
        player: Player;
        /*是否中途加入*/
        is_middle_join: boolean;
    };
    /*玩家主动退出游戏*/
    ['ET_ROLE_ACTIVE_EXIT_GAME_EVENT']: {
        /*玩家*/
        player: Player;
    };
    /*玩家断开服务器连接*/
    ['ET_ROLE_LOSE_CONNECT']: {
        /*玩家*/
        player: Player;
    };
    /*AI接管玩家*/
    ['ET_AI_TAKE_CONTROL']: {
        /*玩家*/
        player: Player;
    };
    /*下载档案数据回调*/
    ['ET_DOWNLOAD_MAP_ARCHIVE_CALLBACK']: {
        /*玩家*/
        player: Player;
    };
    /*玩家成功使用收费道具*/
    ['ET_ROLE_USE_STORE_ITEM_END']: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
        /*使用次数*/
        use_cnt: integer;
    };
    /*玩家成功使用收费道具（触发器内）*/
    ['ET_CONSUME_STORE_ITEM']: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
    };
    /*玩家持有收费道具*/
    ['ET_ROLE_HOLD_STORE_ITEM']: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
    };
    /*玩家资源变化*/
    ['ET_ROLE_RESOURCE_CHANGED']: {
        /*玩家*/
        player: Player;
        /*玩家资源类型*/
        res_key: py.RoleResKey;
        /*玩家资源值*/
        res_value: integer;
        /*玩家资源变量值*/
        res_value_delta: number;
    };
    /*玩家输入字符串*/
    ['ET_ROLE_INPUT_MSG']: {
        /*玩家*/
        player: Player;
        /*字符串*/
        msg: string;
    };
    /*玩家输入激活码*/
    ['ET_ROLE_INPUT_ACTIVATION_CODE']: {
        /*玩家*/
        player: Player;
        /*激活码组*/
        activation_code_group: string;
    };
    /*玩家科技升级*/
    ['ET_ROLE_TECH_UPGRADE']: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
    };
    /*玩家科技降级*/
    ['ET_ROLE_TECH_DOWNGRADE']: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
    };
    /*玩家科技变化*/
    ['ET_ROLE_TECH_CHANGED']: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
        /*科技变化等级*/
        delta_lv: integer;
    };
    /*单位研发科技*/
    ['ET_UNIT_UPGRADE_TECH']: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    /*单位添加科技*/
    ['ET_UNIT_ADD_TECH']: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    /*单位删除科技*/
    ['ET_UNIT_REMOVE_TECH']: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    /*玩家敌对关系变化*/
    ['ET_ROLE_CHANGE_RELATION']: {
        /*源玩家*/
        src_player: Player;
        /*目标玩家*/
        dst_player: Player;
        /*关系*/
        relation: py.RoleRelation;
    };
    /*建筑技能建造成功*/
    ['ET_ABILITY_BUILD_FINISH']: {
        /*技能*/
        ability: Ability;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能ID*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
        /*主人*/
        unit: Unit;
        /*建造出来的单位*/
        build_unit: Unit;
    };
    /*普通攻击命中*/
    ['ET_ATTACK_HIT_TARGET']: {
        /*技能id*/
        ability_id: integer;
    };
    /*普通攻击造成伤害*/
    ['ET_ATTACK_HURT']: {
        /*技能id*/
        ability_id: integer;
        /*被伤害的单位*/
        other_unit: Unit;
    };
    /*技能CD变化*/
    ['ET_ABILITY_CD_CHANGE']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*cd剩余时间*/
        left: number;
        /*cd总时长*/
        total: number;
        /*技能id*/
        ability_id: py.AbilityKey;
    };
    /*单位获得新技能*/
    ['ET_ACTIVE_ABILITY_CHANGED']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
    };
    /*技能充能层数变化*/
    ['ET_ABILITY_STACK_CHANGE']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*技能充能层数*/
        stack: number;
    };
    /*技能加点*/
    ['ET_ABILITY_PLUS_POINT']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    /*充能CD变化*/
    ['ET_ABILITY_STACK_CD_CHANGE']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*充能cd剩余时间*/
        left: number;
        /*充能cd总时长*/
        total: number;
    };
    /*技能禁用状态发生变化*/
    ['ET_ABILITY_FORBIDDEN_CHANGED']: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*是否禁用*/
        is_forbidden: boolean;
    };
    /*技能的沉默状态发生变化*/
    ['ET_ABILITY_SILENT_CHANGED']: {
        /*是否禁用*/
        is_silent: boolean;
    };
    /*技能的图标发生变化*/
    ['ET_ABILITY_ICON_CHANGED'];
    /*单位的名称发生变化*/
    ['ET_UNIT_NAME_CHANGE'];
    /*单位的小地图图标发生变化*/
    ['ET_UNIT_CHANGE_MINI_MAP_ICON'];
    /*单位头像图标发生变化*/
    ['ET_UNIT_ICON_CHANGE']: {
        /*undefined*/
        unit: Unit;
    };
    /*阵营内单位变化*/
    ['ET_ROLE_UNIT_CHANGE']: {
        /*undefined*/
        unit: Unit;
    };
    /*阵营内单位标签变化*/
    ['ET_ROLE_UNIT_TAG_CHANGE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位进入运动器状态*/
    ['ET_UNIT_ENTER_MOVER_STATE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位开始移动*/
    ['ET_UNIT_START_MOVE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位结束移动*/
    ['ET_UNIT_END_MOVE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位删除（ECA专用）*/
    ['ET_UNIT_REMOVE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位删除（对象真正销毁）*/
    ['ET_UNIT_DELETE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位传送结束*/
    ['ET_UNIT_END_TRANSLATE']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位属性变化*/
    ['ET_UNIT_ATTR_CHANGE']: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        attr: string;
    };
    /*单位即将死亡*/
    ['ET_BEFORE_UNIT_DIE']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    /*单位死亡*/
    ['ET_UNIT_DIE']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    /*单位解绑玩家*/
    ['ET_UNIT_ON_UNBIND_ROLE']: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        player: Player;
    };
    /*单位绑定玩家*/
    ['ET_UNIT_ON_BIND_ROLE']: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        player: Player;
    };
    /*单位即将受到攻击*/
    ['ET_UNIT_BE_HURT']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位即将击中其他单位*/
    ['ET_UNIT_HURT_OTHER']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位即将受到攻击（计算加成后）*/
    ['ET_UNIT_BE_HURT_BEFORE_APPLY']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位即将击中其他单位（计算加成后）*/
    ['ET_UNIT_HURT_OTHER_BEFORE_APPLY']: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位实际对其他单位造成伤害*/
    ['ET_UNIT_HURT_OTHER_FINISH']: {
        /*是否是暴击*/
        is_critical_hit: number;
        /*是否是普通攻击*/
        is_normal_hit: boolean;
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位实际受到伤害*/
    ['ET_UNIT_BE_HURT_COMPLETE']: {
        /*是否是暴击*/
        is_critical_hit: number;
        /*是否是普通攻击*/
        is_normal_hit: boolean;
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    /*单位即将受到治疗*/
    ['ET_UNIT_GET_CURE_BEFORE_APPLY']: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    /*单位受到治疗结束*/
    ['ET_UNIT_GET_CURE_FINISH']: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    /*单位受到治疗*/
    ['ET_UNIT_GET_CURE']: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    /*单位动画状态机进入状态*/
    ['ET_UNIT_ANIM_STATE_ENTER']: {
        /*单位*/
        unit: Unit;
        /*前一个动画机状态*/
        last_asm_state: py.CcAsmState;
        /*当前动画机状态*/
        cur_asm_state: py.CcAsmState;
    };
    /*单位动画状态机退出状态*/
    ['ET_UNIT_ANIM_STATE_EXIT']: {
        /*单位*/
        unit: Unit;
        /*当前动画机状态*/
        cur_asm_state: py.CcAsmState;
    };
    /*修改玩家属性图标*/
    ['ET_RES_ICON_CHANGED']: {
        /*资源*/
        res_key: py.RoleResKey;
        /*ICON ID*/
        icon_id: integer;
    };
    /*单位施放技能事件*/
    ['ET_UNIT_RELEASE_ABILITY']: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
        /*技能的目标单位*/
        ability_target_unit: Unit;
    };
    /*单位施放技能开始事件*/
    ['ET_UNIT_RELEASE_ABILITY_START']: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    /*单位施放技能结束事件*/
    ['ET_UNIT_RELEASE_ABILITY_END']: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    /*单位施放技能事件*/
    ['ET_UNIT_RELEASE_MAGIC_BOOK']: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    /*单位技能变化事件*/
    ['ET_UNIT_LEVEL_CHANGE'];
    /*单位经验变化事件*/
    ['ET_UNIT_EXP_CHANGE'];
    /*单位即将获得经验*/
    ['ET_UNIT_PRE_ADD_EXP']: {
        /*获得经验的单位*/
        unit: Unit;
        /*增加的经验*/
        add_exp: number;
    };
    /*单位获得经验*/
    ['ET_UNIT_ON_ADD_EXP']: {
        /*获得经验的单位*/
        unit: Unit;
        /*增加的经验*/
        add_exp: number;
    };
    /*单位接收命令*/
    ['ET_UNIT_ON_COMMAND']: {
        /*单位*/
        unit: Unit;
        /*接收的命令*/
        cmd_type: py.UnitCommand;
        /*目标单位*/
        target_unit: Unit;
        /*目标点*/
        point: Point;
        /*目标可破坏物*/
        destructible: Destructible;
        /*目标物品*/
        item: Item;
    };
    /*单位击杀其他单位*/
    ['ET_KILL_UNIT']: {
        /*伤害值*/
        damage: number;
        /*杀手单位*/
        source_unit: Unit;
        /*死亡单位*/
        target_unit: Unit;
        /*致命伤害所属技能*/
        ability: Ability;
        /*致命伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    /*单位出生*/
    ['ET_UNIT_BORN']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位进入战斗状态*/
    ['ET_UNIT_ENTER_BATTLE']: {
        /*单位*/
        unit: Unit;
    };
    /*单位脱离战斗状态*/
    ['ET_UNIT_EXIT_BATTLE']: {
        /*单位*/
        unit: Unit;
    };
    /*单位创建仆从*/
    ['ET_UNIT_CREATE_SLAVE']: {
        /*仆从*/
        unit: Unit;
    };
    /*物品附加属性变化*/
    ['ET_ITEM_ATTACHED_ATTR_CHANGED']: {
        /*undefined*/
        item: Item;
        /*undefined*/
        attr_key: string;
        /*undefined*/
        delta: number;
    };
    /*商品购买*/
    ['ET_UNIT_SHOP_BUY_ITEM']: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品数量*/
        cnt: integer;
        /*商品物品*/
        item: Item;
    };
    /*商品购买*/
    ['ET_UNIT_SHOP_BUY_UNIT']: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品数量*/
        cnt: integer;
        /*商品单位*/
        unit_stuff: Unit;
    };
    /*道具出售*/
    ['ET_UNIT_ITEM_SELL']: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*道具*/
        item: Item;
    };
    /*商店商品变化*/
    ['ET_SHOP_ITEM_CHANGED']: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*当前库存*/
        curr_stock: integer;
    };
    /*商品库存变化*/
    ['ET_SHOP_STOCK_CHANGED']: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*当前库存*/
        curr_stock: integer;
    };
    /*商品售价变化*/
    ['ET_SHOP_RES_COST_CHANGED']: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*资源编号*/
        res_type: py.RoleResKey;
        /*当前售价*/
        res_cost: integer;
    };
    /*道具合成事件*/
    ['ET_UNIT_ITEM_COMPOSE']: {
        /*单位*/
        unit: Unit;
        /*道具编号*/
        compose_id: py.ItemKey;
        /*道具*/
        item_prop: Item;
    };
    /*商品合成购买*/
    ['ET_UNIT_SHOP_BUY_WITH_COMPOSE']: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*物品编号*/
        item: Item;
    };
    /*单位重生*/
    ['ET_REVIVE_UNIT']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位升级*/
    ['ET_UPGRADE_UNIT']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位运动目标达成*/
    ['ET_REACH_MOVE_TARGET_UNIT']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位碰撞到障碍*/
    ['ET_COLLIDE_OBSTACLE_UNIT']: {
        /*undefined*/
        unit: Unit;
    };
    /*单位进入草丛*/
    ['ET_UNIT_ENTER_GRASS']: {
        /*单位*/
        unit: Unit;
    };
    /*单位离开草丛*/
    ['ET_UNIT_LEAVE_GRASS']: {
        /*单位*/
        unit: Unit;
    };
    /*地图显隐因触发器发生变化*/
    ['ET_MAP_VISIBILITY_CHANGE'];
    /*单位所属玩家发生变化*/
    ['ET_UNIT_ROLE_CHANGED']: {
        /*触发事件的单位*/
        unit: Unit;
        /*单位原所属玩家*/
        old_player: Player;
        /*单位新所属玩家*/
        new_player: Player;
    };
    /*单位的kv属性发送变化*/
    ['ET_UNIT_KV_CHANGE']: {
        /*KV名*/
        kv_name: string;
    };
    /*单位的多个kv属性发送变化*/
    ['ET_UNIT_MUL_KV_CHANGE']: {
        /*单位原所属玩家*/
        kv_name_list: py.List;
    };
    /*单位类型的前置条件满足要求*/
    ['ET_UNIT_PRECONDITION_SUCCEED']: {
        /*单位类型*/
        unit_key: py.UnitKey;
        /*玩家*/
        player: Player;
    };
    /*单位类型的前置条件不满足要求*/
    ['ET_UNIT_PRECONDITION_FAILED']: {
        /*单位类型*/
        unit_key: py.UnitKey;
        /*玩家*/
        player: Player;
    };
    /*物品类型的前置条件满足要求*/
    ['ET_ITEM_PRECONDITION_SUCCEED']: {
        /*物品类型*/
        item_no: py.ItemKey;
        /*玩家*/
        player: Player;
    };
    /*物品类型的前置条件不满足要求*/
    ['ET_ITEM_PRECONDITION_FAILED']: {
        /*物品类型*/
        item_no: py.ItemKey;
        /*玩家*/
        player: Player;
    };
    /*技能类型的前置条件满足要求*/
    ['ET_ABILITY_PRECONDITION_SUCCEED']: {
        /*技能类型*/
        ability_id: py.AbilityKey;
        /*玩家*/
        player: Player;
    };
    /*技能类型的前置条件不满足要求*/
    ['ET_ABILITY_PRECONDITION_FAILED']: {
        /*技能类型*/
        ability_id: py.AbilityKey;
        /*玩家*/
        player: Player;
    };
    /*科技类型的前置条件满足要求*/
    ['ET_TECH_PRECONDITION_SUCCEED']: {
        /*科技类型*/
        tech_no: py.TechKey;
        /*玩家*/
        player: Player;
    };
    /*科技类型的前置条件不满足要求*/
    ['ET_TECH_PRECONDITION_FAILED']: {
        /*科技类型*/
        tech_no: py.TechKey;
        /*玩家*/
        player: Player;
    };
    /*技能升级*/
    ['ET_ABILITY_UPGRADE']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    /*技能开始施法*/
    ['ET_ABILITY_CS_START']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能开始施法结束*/
    ['ET_ABILITY_CS_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    /*技能前摇开始*/
    ['ET_ABILITY_PS_START']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能前摇结束*/
    ['ET_ABILITY_PS_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*道具技能前摇结束*/
    ['ET_ITEM_ABILITY_PS_END']: {
        /*技能对象*/
        ability: Ability;
    };
    /*技能准备结束*/
    ['ET_ABILITY_SP_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能持续施法结束*/
    ['ET_ABILITY_CST_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能后摇结束*/
    ['ET_ABILITY_BS_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能准备阶段被打断*/
    ['ET_ABILITY_CS_INTERRUPT']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    /*技能前摇阶段被打断*/
    ['ET_ABILITY_PS_INTERRUPT']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能准备阶段被打断*/
    ['ET_ABILITY_SP_INTERRUPT']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能持续施法阶段被打断*/
    ['ET_ABILITY_CST_INTERRUPT']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*技能后摇阶段被打断*/
    ['ET_ABILITY_BS_INTERRUPT']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    /*技能结束（无论何种方式）*/
    ['ET_ABILITY_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    /*获得技能*/
    ['ET_ABILITY_OBTAIN']: {
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    /*失去技能*/
    ['ET_ABILITY_LOSE']: {
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    /*交换技能*/
    ['ET_ABILITY_SWITCH']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    /*技能禁用*/
    ['ET_ABILITY_DISABLE']: {
        /*技能对象*/
        ability: Ability;
    };
    /*技能启用*/
    ['ET_ABILITY_ENABLE']: {
        /*技能对象*/
        ability: Ability;
    };
    /*技能属性变化*/
    ['ET_ABILITY_ATTR_CHANGED']: {
        /*技能对象*/
        ability: Ability;
    };
    /*技能冷却事件*/
    ['ET_ABILITY_CD_END']: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    /*技能自动释放状态变化*/
    ['ET_ABILITY_AUTOCAST_CHANGED']: {
        /*技能对象*/
        ability: Ability;
    };
    /*获得效果*/
    ['ET_OBTAIN_MODIFIER']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*失去效果*/
    ['ET_LOSS_MODIFIER']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*循环触发事件*/
    ['ET_MODIFIER_CYCLE_TRIGGER']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*BUFF更新事件*/
    ['ET_MODIFIER_UPDATE_TIMER'];
    /*BUFF叠加事件*/
    ['ET_MODIFIER_ADDTION']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*效果层数变化事件*/
    ['ET_MODIFIER_LAYER_CHANGE']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*层数变化值*/
        layer_change_values: integer;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*魔法效果即将获得事件*/
    ['ET_MODIFIER_GET_BEFORE_CREATE']: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    /*魔法效果被覆盖事件*/
    ['ET_MODIFIER_BE_COVERED']: {
        /*效果携带者*/
        owner_unit: Unit;
        /*已有的魔法效果*/
        old_buff: Buff;
        /*新增的魔法效果*/
        new_buff: Buff;
    };
    /*魔法效果属性变化事件*/
    ['ET_MODIFIER_ATTR_CHANGE']: {
        /*魔法效果*/
        buff: Buff;
    };
    /*可破坏物资源个数发生变化*/
    ['ET_SOURCE_NUMS_CHANGE'];
    /*可破坏物的名称发生变化*/
    ['ET_NAME_CHANGE'];
    /*可破坏物资源名称发生变化*/
    ['ET_SOURCE_NAME_CHANGE'];
    /*可破坏物死亡*/
    ['ET_DEST_DIE']: {
        /*死亡的可破坏物*/
        destructible: Destructible;
        /*凶手单位*/
        unit_for_dest: Unit;
    };
    /*可破坏物被采集枯竭*/
    ['ET_DEST_SOURCE_DRY']: {
        /*资源枯竭的可破坏物*/
        destructible: Destructible;
        /*采集的单位*/
        unit_for_dest: Unit;
    };
    /*可破坏物被攻击*/
    ['ET_DEST_ATTACKED']: {
        /*被攻击的可破坏物*/
        destructible: Destructible;
        /*攻击的单位*/
        unit_for_dest: Unit;
    };
    /*可破坏物被采集*/
    ['ET_DEST_COLLECTED']: {
        /*被采集的可破坏物*/
        destructible: Destructible;
        /*采集的单位*/
        unit_for_dest: Unit;
    };
    /*区域内的可破坏物死亡*/
    ['ET_DEST_AREA_DIE']: {
        /*可破坏物死亡的区域*/
        area: Area;
        /*死亡的可破坏物*/
        destructible: Destructible;
        /*杀手单位*/
        unit_for_dest: Unit;
    };
    /*区域内的可破坏物被采集枯竭*/
    ['ET_DEST_AREA_DRY']: {
        /*可破坏物被采集枯竭的区域*/
        area: Area;
        /*资源枯竭的可破坏物*/
        destructible: Destructible;
        /*采集单位*/
        unit_for_dest: Unit;
    };
    /*区域内的可破坏物被攻击*/
    ['ET_DEST_AREA_ATTACKED']: {
        /*可破坏物被攻击的区域*/
        area: Area;
        /*被攻击的可破坏物*/
        destructible: Destructible;
        /*攻击单位*/
        unit_for_dest: Unit;
    };
    /*区域内的可破坏物被采集*/
    ['ET_DEST_AREA_COLLECTED']: {
        /*可破坏物被采集的区域*/
        area: Area;
        /*被采集的可破坏物*/
        destructible: Destructible;
        /*采集单位*/
        unit_for_dest: Unit;
    };
    /*可破坏物创建*/
    ['ET_DEST_CREATE_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
    };
    /*可破坏物死亡*/
    ['ET_DEST_DIE_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
        /*凶手单位ID*/
        unit_id_of_dest_killer: Unit;
    };
    /*可破坏物复活*/
    ['ET_DEST_REVIVE_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
    };
    /*可破坏物资源量变化*/
    ['ET_DEST_RES_CNT_CHG_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
        /*可破坏物资源变化量*/
        res_chg_cnt_in_dest_event: integer;
    };
    /*可破坏物被采集*/
    ['ET_DEST_COLLECTED_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
        /*事件中的单位*/
        unit_id_in_dest_event: Unit;
        /*事件中的技能对象*/
        ability_in_dest_event: Ability;
        /*采集的玩家属性个数*/
        player_res_cnt_in_event: integer;
    };
    /*可破坏物受到伤害*/
    ['ET_GET_HURT_NEW']: {
        /*可破坏物*/
        destructible: Destructible;
        /*事件中的单位*/
        unit_id_of_hurt_dest: Unit;
        /*受到的伤害*/
        damage_value_of_hurt_dest: number;
    };
    /*玩家选中可破坏物*/
    ['ET_SELECT_DEST']: {
        /*玩家*/
        player: Player;
        /*点击到可破坏物*/
        destructible: Destructible;
    };
    /*删除可破坏物*/
    ['ET_DEST_DELETE']: {
        /*触发事件的可破坏物*/
        destructible: Destructible;
    };
    /*投射物产生*/
    ['ET_PRODUCE_PROJECTILE']: {
        /*投射物*/
        projectile: Projectile;
    };
    /*投射物死亡*/
    ['ET_DEATH_PROJECTILE']: {
        /*投射物*/
        projectile: Projectile;
    };
    /*投射物运动开始*/
    ['ET_START_MOVE_PROJECTILE'];
    /*投射物运动目标达成*/
    ['ET_REACH_MOVE_TARGET_PROJECTILE'];
    /*投射物碰撞到障碍*/
    ['ET_COLLIDE_OBSTACLE_PROJECTILE']: {
        /*undefined*/
        unit: Unit;
    };
    /*给单位创建投射物*/
    ['ET_UNIT_PRODUCE_PROJECTILE'];
    /*ui编辑器事件*/
    ['ET_TRIGGER_COMPONENT_EVENT']: {
        /*玩家*/
        player: Player;
        /*ui事件变量名*/
        ui_event_name: string;
        /*触发事件控件名称*/
        comp_name: string;
        /*触碰坐标*/
        pos: py.Vector2;
        /*触碰ID*/
        touch_id: integer;
        /*ui*/
        ui: UI;
    };
    /*全局触发器发送ui事件*/
    ['ET_GLOBAL_EVENT_TO_UI_WITH_DICT']: {
        /*ui事件名*/
        event_name: string;
        /*参数*/
        args: py.Dict;
    };
    /*键盘按键按下*/
    ['ET_KEYBOARD_KEY_DOWN_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前键盘按键*/
        current_key: py.KeyboardKey;
    };
    /*键盘按键抬起*/
    ['ET_KEYBOARD_KEY_UP_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前键盘按键*/
        current_key: py.KeyboardKey;
    };
    /*鼠标按键按下*/
    ['ET_MOUSE_KEY_DOWN_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    /*鼠标按键抬起*/
    ['ET_MOUSE_KEY_UP_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    /*鼠标按键双击*/
    ['MOUSE_KEY_DB_CLICK_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    /*鼠标按键按下单位*/
    ['MOUSE_KEY_DOWN_UNIT_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    /*鼠标按键抬起单位*/
    ['MOUSE_KEY_UP_UNIT_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    /*鼠标按键双击单位*/
    ['MOUSE_KEY_DB_CLICK_UNIT_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    /*鼠标移动事件*/
    ['MOUSE_MOVE_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
        /*鼠标指向的屏幕坐标X*/
        tar_x: integer;
        /*鼠标指向的屏幕坐标Y*/
        tar_y: integer;
    };
    /*鼠标滚轮事件*/
    ['ET_MOUSE_WHEEL_EVENT']: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标滚轮*/
        mouse_wheel: py.MouseWheel;
    };
    /*本地鼠标移动事件(勿通过该事件进行逻辑操作)*/
    ['LOCAL_MOUSE_MOVE_EVENT'];
    /*单位触发器向全局触发器发送事件*/
    ['ET_UNIT_EVENT_TO_GLOBAL']: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    /*技能触发器向全局触发器发送事件*/
    ['ET_ABILITY_EVENT_TO_GLOBAL']: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    /*效果触发器向全局触发器发送事件*/
    ['ET_MODIFIER_EVENT_TO_GLOBAL']: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    /*投射物触发器向全局触发器发送事件*/
    ['ET_PROJECTILE_EVENT_TO_GLOBAL']: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    /*物品触发器向全局触发器发送事件*/
    ['ET_ITEM_EVENT_TO_GLOBAL']: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    /*玩家选中单位*/
    ['ET_SELECT_UNIT']: {
        /*玩家*/
        player: Player;
        /*点击到单位*/
        unit: Unit;
    };
    /*玩家控制的高亮单位*/
    ['ET_HIGH_LIGHT_UNIT_CHANGE']: {
        /*玩家*/
        player: Player;
        /*高亮单位id*/
        high_light_unit_id: py.HighLightUnitID;
    };
    /*玩家选中物品*/
    ['ET_SELECT_ITEM']: {
        /*玩家*/
        player: Player;
        /*点击到物品*/
        item: Item;
    };
    /*玩家双击选中物品*/
    ['ET_DOUBLE_CLICK_ITEM']: {
        /*玩家*/
        player: Player;
        /*双击到物品*/
        item: Item;
    };
    /*打开商店界面*/
    ['ET_OPEN_SHOP_PANEL']: {
        /*玩家*/
        player: Player;
        /*商店单位*/
        unit: Unit;
    };
    /*玩家双击选中可破坏物*/
    ['ET_DOUBLE_CLICK_DEST']: {
        /*玩家*/
        player: Player;
        /*双击到可破坏物*/
        destructible: Destructible;
    };
    /*玩家选中单位组*/
    ['ET_SELECT_UNIT_GROUP']: {
        /*玩家*/
        player: Player;
        /*框选到单位组id列表*/
        unit_group_id_list: UnitGroup;
        /*队伍编号*/
        team_id: integer;
    };
    /*打开技能指示器*/
    ['ET_START_SKILL_POINTER']: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*关闭技能指示器*/
    ['ET_STOP_SKILL_POINTER']: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*缩放技能指示器范围圈*/
    ['ET_RESIZE_SKILL_POINTER']: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置扇形指示器半径*/
    ['ET_SET_ABILITY_SECTOR_RADIUS']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置扇形指示器角度*/
    ['ET_SET_ABILITY_SECTOR_ANGLE']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置箭头/多段指示器长度*/
    ['ET_SET_ABILITY_ARROW_LENGTH']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置箭头/多段指示器宽度*/
    ['ET_SET_ABILITY_ARROW_WIDTH']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置圆形指示器半径*/
    ['ET_SET_ABILITY_CIRCLE_RADIUS']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    /*设置技能指示器类型*/
    ['ET_SET_ABILITY_POINTER_TYPE']: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
        /*技能指示器类型*/
        skill_pointer_type: py.SkillPointerType;
    };
    /*触碰（鼠标）开始事件*/
    ['ET_TOUCH_BEGIN']: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    /*触碰（鼠标）移动事件*/
    ['ET_TOUCH_MOVE']: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    /*触碰（鼠标）结束事件*/
    ['ET_TOUCH_END']: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    /*最底层的触摸结束事件*/
    ['ET_TOP_TOUCH_END'];
    /*排位变更事件*/
    ['RANK_LIST_INFO_CHANGE'];
    /*单位获得物品*/
    ['ET_UNIT_ADD_ITEM']: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位添加物品用于物品合成事件的判断*/
    ['ET_UNIT_ADD_ITEM_FOR_COMPOSE']: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位获得物品到物品栏*/
    ['ET_UNIT_ADD_ITEM_TO_BAR']: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位获得物品到背包栏*/
    ['ET_UNIT_ADD_ITEM_TO_PKG']: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位失去物品*/
    ['ET_UNIT_REMOVE_ITEM']: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位物品从物品栏离开*/
    ['ET_UNIT_REMOVE_ITEM_FROM_BAR']: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位物品从背包栏离开*/
    ['ET_UNIT_REMOVE_ITEM_FROM_PKG']: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位使用物品*/
    ['ET_UNIT_USE_ITEM']: {
        /*使用该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位使用物品后*/
    ['ET_UNIT_USE_ITEM_END']: {
        /*物品编号*/
        item_no: py.ItemKey;
    };
    /*单位开始寻路时*/
    ['ET_UNIT_START_NAV_EVENT']: {
        /*单位*/
        unit: Unit;
    };
    /*单位结束寻路时*/
    ['ET_UNIT_END_NAV_EVENT']: {
        /*单位*/
        unit: Unit;
    };
    /*背包刷新*/
    ['ET_UNIT_BAG_REFRESH'];
    /*物品层数变化*/
    ['ET_ITEM_STACK_CHANGED']: {
        /*单位*/
        unit: Item;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
        /*变化值*/
        delta_cnt: integer;
    };
    /*物品充能变化*/
    ['ET_ITEM_CHARGE_CHANGED']: {
        /*单位*/
        unit: Item;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
        /*变化值*/
        delta_cnt: integer;
    };
    /*物品创建*/
    ['ET_ITEM_ON_CREATE']: {
        /*被创建的物品*/
        item: Item;
    };
    /*物品销毁*/
    ['ET_ITEM_ON_DESTROY']: {
        /*销毁的物品*/
        item: Item;
    };
    /*物品实体销毁*/
    ['ET_ITEM_ENTITY_ON_DESTROY']: {
        /*物品实体*/
        item_unit: Item;
        /*物品*/
        item: Item;
    };
    /*出售物品*/
    ['ET_ITEM_SOLD']: {
        /*购买者*/
        unit: Unit;
        /*贩卖者*/
        unit2: Unit;
        /*被售出的物品*/
        item: Item;
        /*收购物品的单位*/
        buy_unit: Unit;
        /*出售物品的单位*/
        shop_unit: Unit;
    };
    /*破坏物品*/
    ['ET_ITEM_BROKEN']: {
        /*被破坏的物品*/
        item: Item;
        /*破坏物品的单位*/
        unit: Unit;
    };
    /*物品名称改变*/
    ['ET_ITEM_NAME_CHANGED']: {
        /*改变名称的物体*/
        item: Item;
        /*改变后的名称*/
        name: string;
    };
    /*破坏物品*/
    ['ET_ITEM_DESC_CHANGED']: {
        /*改变描述的物体*/
        item: Item;
        /*改变后的描述*/
        name: string;
    };
    /*物品被采集创建*/
    ['ET_ITEM_CREATE_ON_DEST_COLLECTED']: {
        /*事件中的物品*/
        item: Item;
        /*事件中的可破坏物*/
        destructible: Destructible;
        /*采集可破坏物事件中的单位*/
        unit: Unit;
        /*采集可破坏物的捷能*/
        ability: Ability;
    };
    /*左键A地板*/
    ['ET_ATTACK_MOVE_CMD']: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    /*出售物品*/
    ['ET_SELL_ITEM_CMD']: {
        /*商店单位*/
        shop_unit: Unit;
        /*商品*/
        item: Item;
    };
    /*释放技能*/
    ['ET_AI_RELEASE_SKILL_CMD']: {
        /*指定单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能SEQ*/
        ability_seq: py.AbilitySeq;
        /*释放技能参数*/
        target_item: py.Dict;
    };
    /*巡逻*/
    ['ET_PATROL_CMD']: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    /*寻路到位置*/
    ['ET_MOVE_UNIT_TO_TARGET_CMD']: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    /*鼠标悬停事件*/
    ['ET_MOUSE_HOVER_EVENT']: {
        /*玩家*/
        player: Player;
        /*悬浮单位*/
        unit: Unit;
        /*悬浮物品*/
        item: Item;
        /*悬浮可破坏物*/
        destructible: Destructible;
    };
    /*追帧结束事件*/
    ['ET_CATCH_FRAME_FINISHED'];
    /*运动器打断*/
    ['ET_MOVER_INTERRUPT'];
    /*运动器移除*/
    ['ET_MOVER_REMOVED'];
    /*运动器单位碰撞*/
    ['ET_MOVER_UNIT_COLLISION'];
    /*运动器单位碰撞*/
    ['ET_MOVER_UNIT_COLLISION_ENTER'];
    /*运动器单位碰撞结束*/
    ['ET_MOVER_UNIT_COLLISION_LEAVE'];
    /*运动器地形碰撞*/
    ['ET_MOVER_TERRAIN_COLLISION'];
    /*聊天中发送指令*/
    ['ET_CHAT_SEND_GM']: {
        /*指令字符串*/
        str1: string;
        /*玩家*/
        player: Player;
    };
    /*触发器自定义事件*/
    ['ET_CUSTOM_EVENT']: {
        /*自定义参数1*/
        c_param_1: integer;
        /*自定义参数2*/
        c_param_2: integer;
        /*自定义参数3*/
        c_param_3: integer;
        /*自定义参数4*/
        c_param_4: integer;
        /*自定义参数5*/
        c_param_5: integer;
    };
    /*自定义事件*/
    ['ET_EVENT_CUSTOM']: {
        /*事件参数*/
        c_param_1: integer;
        /*自定义参数列表*/
        c_param_dict: py.Dict;
    };
    /*界面控件动效播放事件*/
    ['UI_VX_EVENT']: {
        /*动销回调句柄*/
        ui_vx_handler: string;
        /*控件uid*/
        comp_name: string;
        /*动效id*/
        int1: integer;
    };
    /*界面模块被创建*/
    ['ET_UI_PREFAB_CREATE_EVENT']: {
        /*玩家*/
        player: Player;
        /*ui模块id*/
        ui_prefab: string;
        /*创建出的实例控件*/
        ui_prefab_ins: py.UIPrefabIns;
    };
    /*界面模块被销毁*/
    ['ET_UI_PREFAB_DEL_EVENT']: {
        /*玩家*/
        player: Player;
        /*ui模块id*/
        ui_prefab: string;
        /*销毁的模块实例控件*/
        ui_prefab_ins: py.UIPrefabIns;
    };
    /*输入框控件玩家输入*/
    ['ROLE_INPUT_FIELD_EDIT_MSG']: {
        /*玩家*/
        player: Player;
        /*字符串*/
        msg: string;
    };
    /*语音说话*/
    ['ET_MICRO_SPEAK']: {
        /*玩家*/
        player: Player;
        /*频道*/
        audio_channel: integer;
        /*是否发言*/
        audio_bool: boolean;
    };
    /*聊天中发送指令*/
    ['ET_UNIT_3D_ACTIVE']: {
        /*单位*/
        unit: Unit;
        /*是否开启*/
        is_active: boolean;
    };
    /*逻辑物理组件创建*/
    ['ET_PHYSICS_ENTITY_ON_CREATE']: {
        /*被创建的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件激活*/
    ['ET_PHYSICS_ENTITY_ON_ACTIVE']: {
        /*被激活的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件关闭*/
    ['ET_PHYSICS_ENTITY_ON_DEACTIVE']: {
        /*被关闭的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件运行*/
    ['ET_PHYSICS_ENTITY_ON_RUNNING']: {
        /*运行的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件暂停*/
    ['ET_PHYSICS_ENTITY_ON_PAUSE']: {
        /*被暂停的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件重置*/
    ['ET_PHYSICS_ENTITY_ON_RESET']: {
        /*被重置的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件销毁*/
    ['ET_PHYSICS_ENTITY_ON_DESTROY']: {
        /*被销毁的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件被获得*/
    ['ET_PHYSICS_ENTITY_ON_OBTAIN']: {
        /*被获得的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件使用*/
    ['ET_PHYSICS_ENTITY_ON_USE']: {
        /*被使用的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件使用结束*/
    ['ET_PHYSICS_ENTITY_ON_STOP_USE']: {
        /*被使用结束的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    /*逻辑物理组件失去*/
    ['ET_PHYSICS_ENTITY_ON_LOSE']: {
        /*被失去的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
}