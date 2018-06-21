import React from 'react';
import Square from '../Square/index.jsx'
import style from './index.less';
import { connect } from 'dva';

 function Board({history,current}) {

    function renderSquare(i) {
        return <Square value={history[current].squares[i]} index={i}/> ;
    }
  
  
    return (
        <div>
            <div className={style["board-row"]}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={style["board-row"]}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={style["board-row"]}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
  }

  function myState(state) {
      const {history, isXNext, current} = state;
      return {
          history,
          isXNext,
          current,
      };
  }

  export default connect(myState)(Board)
  