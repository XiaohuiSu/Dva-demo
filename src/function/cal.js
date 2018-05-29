export default function cal(squ) {
    const val = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];
    for(let i = 0; i < val.length; i++) {
        const [a,b,c] = val[i];
        if(squ[a] && squ[a] === squ[b] && squ[a] === squ[c]) {
            return squ[a];
        }
    }
    return null;
  }
