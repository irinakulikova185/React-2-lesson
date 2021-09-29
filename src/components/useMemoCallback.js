import React, {useState, useMemo, useCallback, useEffect } from 'react'

const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const memo = useMemo(() => {
        console.log('вычисляется при монтировании и изменении num')
        return 5*9
        },[num])  
    const memoCallback = useCallback(() => {
        console.log("вызывается при монтировании и изменении num"
        )
        },[num]);
    
    return (
    <div className='component'>
        <h1 
            onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? "green" : "red" }}>
            Кликните здесь чтобы поменять цвет текста
        </h1>
        <div className='component'>
            Число {num}
        </div>
        <button onClick={() => setNum(num + 1)}>
            Увеличить число
        </button>
        <Span callback={memoCallback} value={memo}></Span>
    </div>
    );
};

const Span = ({callback, value}) => {
    useEffect(() => {
        callback();
      }, [callback]);
    
    return <span>Мемоизированное значение: {value}</span>
}    
export default MemoComponent;




