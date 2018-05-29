import React from 'react';
import style from './index.less';

export default function Square(props) {
    return (
        <button className={style.square} onClick={()=>props.onClick()}>{props.value}</button>
    );
}
