import { useState } from "react";
import styles from './button.module.css'

function MyCount(){

    const [count, setCount] = useState(0)

    function aumentar(){
        setCount(count+1)
    }

    return (
        <div className="container">
            <h1>Meu Contador</h1>
            <h3>{count}</h3>
            <button className={styles.myButton} onClick={aumentar}>aumentar</button>
        </div>
    )
}

export default MyCount;