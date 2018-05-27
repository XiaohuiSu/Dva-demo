import {connect} from 'dva';
import styles from './demo';
import { displayPartsToString } from 'typescript';

function demo({dispatch,num}) {
    function Add() {
        dispatch({
            type: "num/add",
            payload: {r: 'BIngo'}
        });
    }

    function SUB() {
        dispatch({
            type: "num/sub"
        });
    }

    return (
        <div className={styles.checkNum}>
            <input type="button" value="+" onClick={Add} />
            <input type="input" value={num} />
            <input type="button" value="-"  onClick={SUB} />
        </div>
    );
}

export default connect(({num})=> (
    {num}
))(demo)