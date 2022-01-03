// https://stackoverflow.com/questions/10014271/generate-random-color-distinguishable-to-humans/10014411
// Credit to goran for selectColor
import { useEffect, useState } from "react";
import { takeCoverage } from "v8";
import styles from "/styles/BarGraph.module.scss";
function selectColor() {
    const hue = Math.floor(Math.random()*100) * 137.508; // use golden angle approximation
    return `hsl(${hue}, 50%, 75%)`; // 50 75
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                          

export default function BarGraph() { // Data = [(tag,height)]
    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/users")
        let data = await response.json()
        data = await data.map(x => [x.tag, x.duration])
        setData(data)
    }
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    data.sort(([_, a], [__, b]) => {return b-a})
    const maxDuration = Math.max(...data.map(([_, height]) => {return height}))
    return (
        <div className={styles.container}>
            <h2>Top Discord Addicts</h2>
            <div className={styles.graphic_container}>
                <div className={styles.entry_container}>
                    {data.map(([tag,y], i) => {
                     return <a href={`users/${tag.replace('#', '%23')}`} key={i} style={{height:"50px", width:`${y/maxDuration*100}%`, margin:"0px", display: "flex",
                     alignItems:"center", justifyContent:"flex-end", backgroundColor:selectColor()}}>{y}</a>
                    })}

                    {data.map(([tag, _]) => {
                        return <span key={tag}>{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}