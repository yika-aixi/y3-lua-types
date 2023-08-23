//@ts-nocheck
declare interface Road {
    /**
    * @param py_road py.Road
    * @return self
    */
    __init(py_road: py.Road): self;
    /**
    * @param res_id integer
    * @return Road
    */
    get_road_by_res_id(res_id: number): Road;
    /**
    * @param py_road py.Road
    * @return Road
    */
    get_by_handle(py_road: py.Road): Road;
    /**
    * 路径是否有tag
    * @param tag string tag
    * @return boolean 路径是否有tag
    */
    has_tag(tag: string): boolean;
    /**
    * 删除路径
    */
    remove_path(): void;
    /**
    * 给路径添加点
    * @param index integer 序号
    * @param point Point 点
    */
    add_point(index: number, point: Point): void;
    /**
    * 给路径移除点
    * @param index integer 序号
    */
    remove_point(index: number): void;
    /**
    * 给路径添加标签
    * @param tag string 序号
    */
    add_tag(tag: string): void;
    /**
    * 给路径移除标签
    * @param tag string 序号
    */
    remove_tag(tag: string): void;
    /**
    * 获取路径中点的个数
    * @return integer
    */
    get_point_count(): number;
    /**
    * 类的方法
    * 以点为起点创建路径
    * @param start_point Point 起点
    * @return Road 创建的路径
    */
    create_path(start_point: Point): Road;
    /**
    * 按标签获取所有的路径
    * @param tag string 标签
    * @return Road[] 路径
    */
    get_path_areas_by_tag(tag: string): Road[];
}
