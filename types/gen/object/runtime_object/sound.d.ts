//@ts-nocheck
declare interface Sound {
    /**
    * @param py_sound py.SoundEntity
    */
    __init(py_sound: py.SoundEntity): void;
    /**
    * @param py_sound py.SoundEntity
    * @return Sound
    */
    get_by_handle(py_sound: py.SoundEntity): Sound;
    /**
    * @class Sound.PlayOptions
    * @field loop? boolean # 是否循环
    * @field fade_in? number # 渐入时间
    * @field fade_out? number # 渐出时间
    * 播放声音
    * @param player Player 玩家
    * @param sound py.AudioKey 声音
    * @param options Sound.PlayOptions? # 播放选项
    * @return Sound?
    */
    play(player: Player, sound: py.AudioKey, options: Sound.PlayOptions?): Sound?;
    /**
    * @class Sound.Play3DOptions: Sound.PlayOptions
    * @field height? number # 高度
    * @field ensure? boolean # 是否确保播放
    * 播放3D声音
    * @param player Player 玩家
    * @param sound py.AudioKey 声音
    * @param point Point 目标点
    * @param options Sound.Play3DOptions? # 播放选项
    * @return Sound?
    */
    play_3d(player: Player, sound: py.AudioKey, point: Point, options: Sound.Play3DOptions?): Sound?;
    /**
    * @class Sound.PlayUnitOptions: Sound.PlayOptions
    * @field ensure? boolean # 是否确保播放
    * @field offset_x? number # X轴偏移
    * @field offset_y? number # Y轴偏移
    * @field offset_z? number # Z轴偏移
    * 跟随单位播放声音
    * @param player Player 玩家
    * @param sound py.AudioKey 声音
    * @param unit Unit 跟随的单位
    * @param options Sound.PlayUnitOptions? # 播放选项
    * @return Sound?
    */
    play_with_object(player: Player, sound: py.AudioKey, unit: Unit, options: Sound.PlayUnitOptions?): Sound?;
    /**
    * 停止播放声音
    * @param player Player 玩家
    * @param is_immediately? boolean 是否立即停止
    */
    stop(player: Player, is_immediately): void;
    /**
    *  设置音量
    * @param player Player 玩家
    * @param volume integer 音量(0100)
    */
    set_volume(player: Player, volume: number): void;
}
