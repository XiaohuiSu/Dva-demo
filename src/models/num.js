export default {
    namespace: 'num', //model的命名空间
    state: 0,             //state的初始化数据
    reducers: {
        add(state,{payload: obj}) {
            return obj.r;
        },
        sub(state) {
            
            return state - 1;
        }
    }
}