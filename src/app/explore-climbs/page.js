import Image from "next/image"
import styles from "./page.module.css"

export default function ExploreClimbs(){
return (

    <>
    <div className={styles.title}>
      <h1>Explore routes</h1>
    </div>
    

    <div className={styles.imageContainer}> {/*Ta bort om text nr 2 ej flyttas till höger*/}
      <div className={styles.textContainer}>
      <p>The user can click on the images of user-generated<br/> climbing routes 
      </p>
      </div>
    
      <div className={styles.imageWrapper}>
        <Image className={styles.climbs}
          src="/EXPLOREclimbs.png" // Ange sökvägen till din bild
          alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
          width={400} // Ange bredden på bilden
          height={650} // Ange höjden på bilden
          priority
        />
        
        <Image className={styles.anotherImage}
          src="/PowerUpRoute.png" // Ange sökvägen till din bild
          alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
          width={400} // Ange bredden på bilden
          height={650} // Ange höjden på bilden
        />
      </div>
    </div>
  </>


)
}