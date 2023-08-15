// @ts-nocheck
declare interface Camera {
    get_by_handle(py_camera: number): Camera;
    is_camera_playing_timeline(player: Player): boolean;
    create_camera(point: Point, focal_length: number, focal_height: number, yaw: number, pitch: number, range_of_visibility: number): Camera;
    enable_camera_move(player: Player): void;
    disable_camera_move(player: Player): void;
    play_camera_timeline(player: Player, camera_timeline_id: py.CamlineID): void;
    stop_camera_timeline(player: Player): void;
    camera_shake_with_decay(player: Player, shake: number, attenuation: number, frequency: number, time: number, shake_type: number): void;
    camera_shake(player: Player, strength: number, speed: number, time: number, shake_type: number): void;
    show_tps_mode_mouse(player: Player): any;
    linear_move_by_time(player: Player, point: Point, time: number, move_type: number): void;
    set_camera_follow_unit(player: Player, unit: Unit, x: number, y: number, height: number): void;
    cancel_camera_follow_unit(player: Player): void;
    set_tps_follow_unit(player: Player, unit: Unit, sensitivity: any, yaw: any, pitch: any, x_offset: any, y_offset: any, z_offset: any, camera_distance: any): void;
    cancel_tps_follow_unit(player: Player): void;
    look_at_point(player: Player, point: Point, time: number): void;
    set_max_distance(player: Player, value: number): void;
    set_rotate(player: Player, angle_type: py.CameraRotate, value: number, time: number): void;
    set_distance(player: Player, value: number, time: number): void;
    set_focus_height(player: Player, value: number, time: number): void;
    limit_in_rectangle_area(player: Player, area: Area): void;
    cancel_area_limit(player: Player): void;
    set_moving_with_mouse(player: Player, state: boolean): void;
    set_mouse_move_camera_speed(player: Player, speed: number): void;
    set_keyboard_move_camera_speed(player: Player, speed: number): void;
    get_player_camera_direction(player: Player): Point;
    get_camera_center_raycast(player: Player): Point;
}
