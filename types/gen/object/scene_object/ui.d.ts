// @ts-nocheck
declare interface UI {
    destructor(): void;
    __tostring(): void;
    get_by_handle(player: Player, handle: any): UI;
    create_ui(player: any, parent_ui: any, comp_type: any): UI;
    get_ui(player: any, ui_path: any): UI;
    create_child(comp_type: any): UI;
    add_event(event: any, name: any): string;
    set_adaptation(direction: string, offset: number): self;
    send_event(event_name: string): void;
    set_visible(visible: any): self;
    set_image(img: any): self;
    set_text(str: any): self;
    set_alpha(value: any): self;
    set_is_draggable(isdrag: any): self;
    set_intercepts_operations(intercepts: any): self;
    set_z_order(deep: any): self;
    set_max_progress_bar_value(progress: any): self;
    set_current_progress_bar_value(progress: any, time: any): self;
    set_button_enable(enable: any): self;
    set_ui_size(width: any, height: any): self;
    set_font_size(size: any): self;
    set_input_field_focus(): self;
    set_skill_on_ui_comp(skill: any): self;
    set_buff_on_ui(unit: any): self;
    set_item_on_ui(item: any): self;
    set_prefab_ui_visible(player: any, visible: any): void;
    set_ui_model_id(modelid: any): self;
    change_mini_map_img(player: any, img: any): void;
    set_ui_unit_slot(unit: any, field: any, index: any): self;
    set_button_shortcut(key: any): self;
    set_btn_meta_key(key: any): self;
    set_skill_btn_smart_cast_key(key: any): self;
    set_skill_btn_func_meta_key(key: any): self;
    set_skill_btn_action_effect(isopen: any): self;
    set_text_color(r: any, g: any, b: any, a: any): self;
    change_showroom_fov(fov: any): self;
    change_showroom_cposition(x: any, y: any, z: any): self;
    change_showroom_crotation(x: any, y: any, z: any): self;
    display_message(player: any, msg: any, time: any, isSupportLanguage: any): void;
    set_show_room_background_color(r: any, g: any, b: any, a: any): self;
    set_widget_relative_rotation(rot: any): self;
    set_widget_absolute_coordinates(x: any, y: any): self;
    set_widget_absolute_rotation(rot: any): self;
    set_widget_absolute_scale(x: any, y: any): self;
    set_widget_relative_scale(x: any, y: any): self;
    change_minimap_display_mode(player: any, type: any): void;
    set_slider_value(percent: any): self;
    unbind_widget(): self;
    get_ui_comp_children(): UI[];
    play_timeline_animation(player: any, anim: any, speed: any, isloop: any): void;
    set_ui_model_focus_pos(x: any, y: any, z: any): self;
    bind_player_attribute(uiAttr: any, attr: any, accuracy: any): self;
    bind_global_variable(uiAttr: any, globalVar: any, accuracy: any): self;
    unbind(uiAttr: any): self;
    bind_unit(unit: any): self;
    set_disable_image_type(img: any): self;
    set_hover_image_type(img: any): self;
    set_press_image_type(img: any): self;
    set_text_alignment(h: any, v: any): self;
    enable_drawing_unit_path(player: any, unit: any): void;
    disable_drawing_unit_path(player: any, unit: any): void;
    remove(): void;
    bind_ability_cd(uiAttr: any, skill: any): self;
    bind_buff_time(uiAttr: any, buff: any): self;
    enable_chat(enable: any): self;
    show_chat(player: any, enable: any): self;
    clear_chat(): self;
    send_chat(player: any, msg: any): self;
    create_floating_text(point: any, harm_type: any, str: any, player_group: any): void;
    set_window_mode(player: any, window_mode: any): void;
    set_graphics_quality(player: any, quality: any): void;
    set_screen_resolution(player: any, x: any, y: any): void;
    get_relative_x(): number;
    get_relative_y(): number;
    get_absolute_x(): number;
    get_absolute_y(): number;
    get_relative_rotation(): number;
    get_absolute_rotation(): number;
    get_relative_scale_x(): number;
    get_relative_scale_y(): number;
    get_absolute_scale_x(): number;
    get_absolute_scale_y(): number;
    to_string(): string;
    get_slider_current_value(): number;
    get_name(): string;
    get_child(name: string): UI?;
    get_width(): number;
    get_height(): number;
    get_parent(): UI;
    get_input_field_content(): string;
    is_visible(): boolean;
    set_pos(x: any, y: any): self;
    set_anchor(x: any, y: any): self;
    set_nearby_micro_switch(): any;
    get_screen_width(): number;
    get_screen_height(): number;
    get_window_width(): number;
    get_window_height(): number;
    set_follow_mouse(follow_mouse: boolean): self;
    set_cursor(player: Player, state: y3.Const.CursorState, key: py.CursorKey): self;
}
