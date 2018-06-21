import {connect} from 'dva';
import style from './Game.less';
import Board from '../../components/Board/index.jsx';
import cal from '../../function/cal.js';

function Game({dispatch,game}) {

 
  
    function jumpTo(i) {
      dispatch({
        type: "game/jumpTo",
        payload: i
      });
    }
  
        let history = game.history;
        let current = history[game.current];
        let winner = cal(current.squares);
  
        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (game.isXNext ? 'X' : 'O');
        }
  
        const moves = history.map((value,move) => {
            const content = move ? 'Move #' + move : 'Game start:';
            return (
                <li key={move}>
                    <a href="#" onClick={() => jumpTo(move)}>{content}</a>
                </li>
            );
        });
  
        return (
            <div className={style.game}>
                <div className={style["game-board"]}>
                    <Board />
                </div>
                <div className={style["game-info"]}>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
  }
 // connect方法返回的是一个容器组件，外面包了一层state
  export default connect(({game}) => (
      {game}
  ))(Game)

  
