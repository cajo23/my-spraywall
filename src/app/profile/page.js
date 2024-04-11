import Image from "next/image"
import styles from './page.module.css';

export default function ProfilePage(){
    return (
    <>

<div className={styles.title}><h1>Profile Features</h1></div>

<div className={styles.textContainer}>
    <p>
        In the users profile we have features as Created, Saved and Liked<br/>
        to view climbs the user have. Sent is a feature where the user
        can <br/> view all completed climbing routes and see the number
        of attempts <br/> it took to complete each route.
        This data will be logged in Stats for<br/>
        the user to view the climbing progress.
    </p>
</div>

    <Image className={styles.profile}
    src="/tessansPage.png" // Ange sökvägen till din bild
    alt="User-generated climbs" // Ange en alternativ text för tillgänglighet
    width={400} // Ange bredden på bilden
    height={680} // Ange höjden på bilden
    priority
    />
        
    </>
    )
}