import Image from "next/image"
import styles from "./page.module.css"

export default function ExploreClimbs(){
return (

    <>
    <div className={styles.title}>
      <h1>Explore routes</h1>
    </div>
    
    <div className={styles.textContainer}>
      <p>On the left image the user can click on the images of user-generated
      climbing routes <br/> or click the plus icon to build a new
      route. The user can also filter the routes to view<br/> peronalized
      routes.
      
      <br/><br/>
      On the right image the user can see details of the climbing route,  
      comment the route,<br/> rate it, and log attempts or report if it contains innapropriate content.
      </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image className={styles.climbs}
          src="/EXPLOREclimbs.png" 
          alt="User-generated climbs" 
          width={400} 
          height={650} 
          priority
        />
        
        <Image className={styles.secondClimb}
          src="/PowerUpRoute.png" 
          alt="User-generated climbs" 
          width={400} 
          height={650} 
          priority
        />
      </div>
    
  </>


)
}