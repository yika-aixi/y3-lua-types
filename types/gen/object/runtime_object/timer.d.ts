// @ts-nocheck
declare interface Timer {
    destructor(): void;
    get_by_handle(py_timer: py.Timer, on_timer: Timer.OnTimer): Timer;
    wait(timeout: number, on_timer: fun(timer:): Timer;
    loop(timeout: number, on_timer: fun(timer:): Timer;
    count_loop(timeout: number, times: number, on_timer: fun(timer:): Timer;
    execute(...vararg: any[]): void;
    remove(): void;
    pause(): void;
    resume(): void;
    is_running(): void;
    get_elapsed_time(): number;
    get_init_count(): number;
    get_remaining_time(): number;
    get_remaining_count(): number;
    get_time_out_time(): number;
    get_info_source(): string;
    pairs(): fun():Timer?;
}
