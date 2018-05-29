export default {
    namespace: 'num', //model的命名空间
    state: ['fir','sec'],             //state的初始化数据
    reducers: {
        add(state,{payload: obj}) {
            return [...state,obj];
        },
        sub(state) {
            
            return state - 1;
        }
    }
}