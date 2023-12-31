//@ts-nocheck
declare interface Timer {
    /**
    * @param py_timer py.Timer
    * @param on_timer Timer.OnTimer
    * @return self
    */
    __init(py_timer: py.Timer, on_timer: Timer.OnTimer): this;
    /**
    
    */
    __del(): void;
    /**
    * @param py_timer py.Timer
    * @param on_timer Timer.OnTimer
    * @return Timer
    */
    get_by_handle(py_timer: py.Timer, on_timer: Timer.OnTimer): Timer;
    /**
    *  等待时间后执行
    * @param timeout number
    * @param on_timer fun(timer: Timer)
    * @return Timer
    */
    wait(timeout: number, on_timer: fun(timer:): Timer;
    /**
    *  等待一定帧数后执行
    * @param frame integer
    * @param on_timer fun(timer: Timer)
    * @return Timer
    */
    wait_frame(frame: number, on_timer: fun(timer:): Timer;
    /**
    *  循环执行
    * @param timeout number
    * @param on_timer fun(timer: Timer, count: integer)
    * @return Timer
    */
    loop(timeout: number, on_timer: fun(timer:): Timer;
    /**
    *  循环一定帧数后执行
    * @param frame integer
    * @param on_timer fun(timer: Timer, count: integer)
    * @return Timer
    */
    loop_frame(frame: number, on_timer: fun(timer:): Timer;
    /**
    *  循环指定次数
    * @param timeout number
    * @param times integer
    * @param on_timer fun(timer: Timer, count: integer)
    * @return Timer
    */
    count_loop(timeout: number, times: number, on_timer: fun(timer:): Timer;
    /**
    *  循环一定帧数指定次数
    * @param frame integer
    * @param times integer
    * @param on_timer fun(timer: Timer, count: integer)
    * @return Timer
    */
    count_loop_frame(frame: number, times: number, on_timer: fun(timer:): Timer;
    /**
    *  立即执行
    */
    execute(...vararg): void;
    /**
    *  移除计时器
    */
    remove(): void;
    /**
    *  暂停计时器
    */
    pause(): void;
    /**
    *  继续计时器
    */
    resume(): void;
    /**
    *  是否在运行
    */
    is_running(): void;
    /**
    * 获取计时器经过的时间
    * @return number time 计时器经过的时间
    */
    get_elapsed_time(): number;
    /**
    * 获取计时器初始计数
    * @return integer count 初始计数
    */
    get_init_count(): number;
    /**
    * 获取计时器剩余时间
    * @return number time 计时器剩余时间
    */
    get_remaining_time(): number;
    /**
    * 获取计时器剩余计数
    * @return integer count 剩余计数
    */
    get_remaining_count(): number;
    /**
    * 获取计时器设置的时间
    * @return number time 设置的时间
    */
    get_time_out_time(): number;
    /**
    * @return string?
    */
    get_include_name(): string?;
    /**
    *  遍历所有的计时器，仅用于调试（可能会遍历到已经失效的）
    * @return fun():Timer?
    */
    pairs(): fun():Timer?;
}
