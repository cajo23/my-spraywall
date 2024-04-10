import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
    <div className={styles.description}>
        <p>
           <code className={styles.code}>C4 Spray Wall</code>
        </p>
    </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/climbing-holds.png"
          alt="Climbing-holds Logo"
          width={100}
          height={100}
          priority
        />

        {/*Rubrik*/}
        <h1>
           <code className={styles.codeTitle}>C4 Spray Wall</code>
        </h1>
      </div>

        {/*Text*/}
      <p>
          <code className={styles.codeText}>
            This project is made by climbers for climbers <br/>
            Navigate in the meny to explore features <br/>
          </code>
      </p>
      
    </>
  );
}
