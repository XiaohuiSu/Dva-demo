import React from 'react';
import style from './index.less';
import { connect } from 'dva';

 function Square({dispatch,value,index}) {
     function diaji() {
        dispatch({
            type: "game/handleClick",
            payload: index
          });
     }
    return (
        <button className={style.square} onClick={diaji}>{value}</button>
    );
}

export default connect()(Square)
