import styles from './page.module.css'

export default function Contact(){
    return (
        <>
        
        <div className={styles.contactContainer}>
            <h1>Contact Information</h1>
            <p>
                Name: John Doe <br/>
                Email: C4SprayWall@gmail.com<br/>
                Tel: 123-456-789
            </p>
        </div>
        </>
    )
}