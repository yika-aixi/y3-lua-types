declare module y3.timer
{
    function wait(this:void,timeout: number, on_timer: Action1NoSelf<Timer>): Timer;
    function loop(this:void,timeout: number, on_timer: Action2NoSelf<Timer, number>): Timer;
    function count_loop(this:void,timeout: number, times: number, on_timer: Action2NoSelf<Timer, number>): Timer;
}