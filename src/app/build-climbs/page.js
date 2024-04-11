import Image from "next/image"
import styles from './page.module.css'

export default function BuildClimbs(){
    return (
        <>

        <div className={styles.title}><h1>Build routes</h1></div>

        <div className={styles.textContainer}>
            <p>This is where the user can edit the spray wall image<br/>
                by pushing the cirkle buttons to mark a route.<br/><br/>
                S/T Start and Top holds, M Middle holds,
                F Feet holds, <br/>Tick to mark if it´s one or
                two start holds and sit start <br/>
                is to mark if it is a sit start.
            </p>
        </div>
        
        <Image className={styles.climbs}
          src="/NEWCLIMB.png" // Ange sökvägen till din bild
          alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
          width={400} // Ange bredden på bilden
          height={700} // Ange höjden på bilden
          priority
        />
        
        </>
)
    }