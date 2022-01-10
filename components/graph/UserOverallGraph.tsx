import React from 'react'
import styles from '/styles/OverallGraph.module.scss'

export default function UserOverallGraph({x, y} : {x:number[], y:number[]}) {
  x = [1,2,3,4]
  y = [20,40,60,90]
  return (
    <div className={styles.container}>
      {y.map((y, i) => {
        return <div key={i} style={{height:y, width:"90%", gridRowStart:"1", backgroundColor:"blue"}}></div>
      })}
      {x.map((x,i) => <span className={styles.channel}>{x}</span>)}
    </div>
  )
}
