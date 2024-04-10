import Image from "next/image"
import styles from './page.module.css'

export default function BuildClimbs(){
    return (
        <>

        <div className={styles.title}><h1>Build routes</h1></div>

        
        <div className={styles.textContainer}>
            <p>This is a spray wall project for climbers</p>
        </div>
        

        <div className={styles.imageWrapper}>
        <Image className={styles.climbs}
          src="/NEWCLIMB.png" // Ange sökvägen till din bild
          alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
          width={400} // Ange bredden på bilden
          height={700} // Ange höjden på bilden
          priority
        />
        </div>
        </>
)
    }