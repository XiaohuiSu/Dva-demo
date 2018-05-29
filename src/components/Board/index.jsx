import React from 'react';
import Square from '../Square/index.jsx'
import style from './index.less';

export default class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/> ;
    }
  
    render() {
  
    return (
        <div>
            <div className={style["board-row"]}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className={style["board-row"]}>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className={style["board-row"]}>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
    }
  }
  