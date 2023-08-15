// @ts-nocheck
declare interface Sound {
    get_by_handle(py_sound: py.SoundEntity): Sound;
    play(player: Player, sound: py.AudioKey, options: Sound.PlayOptions?): Sound?;
    play_3d(player: Player, sound: py.AudioKey, point: Point, options: Sound.Play3DOptions?): Sound?;
    play_with_object(player: Player, sound: py.AudioKey, unit: Unit, options: Sound.PlayUnitOptions?): Sound?;
    stop(player: Player, is_immediately: any): void;
    set_volume(player: Player, volume: number): void;
}
