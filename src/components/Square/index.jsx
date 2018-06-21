import React from 'react';
import style from './index.less';
import { connect } from 'dva';

 function Square({dispatch,value,index,diaji}) {
  /*     function diaji() {
        dispatch({
            type: "game/handleClick",
            payload: index
          });
     }  */
    return (
        <button className={style.square} onClick={diaji}>{value}</button>
    );
}
// 之所以用的{game}是因为可能有很多model，他们共同都是对象的成员，game只是其中一个
function myState({game}) {
    return {current: game.current};
}

 function myFun(dispatch,pro) {
    return {
        diaji: () => {
            dispatch({
                type: "game/handleClick",
                payload: pro.index
              });
        }
    };
} 

export default connect(myState,myFun)(Square)