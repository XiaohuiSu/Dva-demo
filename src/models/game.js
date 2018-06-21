/* 判断胜负方法，放在了function目录的cal.js中 */
import cal from '../function/cal.js';

/* 
    提醒：reducer函数只能返回一个新state，而不能修改原state
 */
export default {
    namespace: 'game',
    state: {
     history: [{
         squares: Array(9).fill(null)
     }],
     isXNext: true,
     current: 0
   },
     reducers: {
       handleClick(states,{payload: obj}) {
         const state = {};
         Object.assign(state,states);
         let history = state.history.slice(0,state.current + 1);
         const current = history[history.length - 1];
         const squares = current.squares.slice();
         if(cal(squares) || squares[obj]) {
             return state;
         }
         squares[obj] = state.isXNext ? 'X' : 'O';
 
             state.history = history.concat([{
                 squares: squares
             }]);
             state.isXNext = !state.isXNext;
             state.current = history.length;
 
             return state;
 
       },
       
       jumpTo(states,{payload: obj}) {
           const state = {};
           Object.assign(state,states);
           state.current = obj;
           state.isXNext = (obj % 2) ? false : true;
           return state;
       }
     }
}