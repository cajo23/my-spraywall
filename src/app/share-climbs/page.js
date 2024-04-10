import Link from 'next/link';
import styles from './page.module.css';

export default function ToolsPage(){
    return <>
        <h1>Tools Page</h1>

        <p>
            <b>Calculator: </b>
            <Link href='/tools/calculator' className={styles.toolLink}>Click here</Link>
        </p>

        <p>
            <b>Calculator: </b>
            <Link href='/tools/calculator' className={styles.toolLink}>Click here</Link>
        </p>
    </>
}