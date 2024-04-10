import Image from "next/image"
import styles from "./page.module.css"

export default function ExploreClimbs(){
return (

    <>
    <h1>Explore routes</h1>
    <p>The user can click on the images of user-generated climbing routes <br/>
    </p>
    
    <div className={styles.imageContainer}>
      <Image className={styles.climbs}
        src="/EXPLOREclimbs.png" // Ange sökvägen till din bild
        alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
        width={400} // Ange bredden på bilden
        height={650} // Ange höjden på bilden
      />
      <Image className={styles.anotherImage}
        src="/EXPLOREclimbs.png" // Ange sökvägen till din bild
        alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
        width={400} // Ange bredden på bilden
        height={650} // Ange höjden på bilden
      />
    </div>
  </>


)
}