// https://stackoverflow.com/questions/10014271/generate-random-color-distinguishable-to-humans/10014411
// Credit to goran for selectColor
import styles from "/styles/BarGraph.module.scss";
function selectColor() {
    const hue = Math.floor(Math.random()*50) * 137.508; // use golden angle approximation
    return `hsl(${hue},50%,75%)`;
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                          

export default function BarGraph({heights}) {
    heights = [20,50,60,200].sort((a,b)=>b-a)
    return (
        <div className={styles.container}>
            <h2>BarGraph</h2>
            <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                {heights.map((y, i) => {
                    return <div key={i} style={{height:"50px", width:y, margin:"0px", backgroundColor:selectColor()}}></div>
                })}
            </div>
        </div>
    )
}