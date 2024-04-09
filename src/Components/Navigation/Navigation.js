import styles from './Navigation.module.css';
import Link from 'next/link';

const LINKS = [
    {href: '/', text: 'Home', description: 'My project idea'},
    {href: '/about-old', text: 'About (old)', description: 'About this project'},
    {href: '/about-new', text: 'About (new)', description: 'About this project'},
    {href: '/tools', text: 'Tools', description: 'A few tools I built'},
]

export default function Navigation() {
    return (<div className={styles.grid}>
            
            {/*<
            
            NavigationLink text= "Home" href="/" description= "My project idea"/>
            <NavigationLink text= "About" href="/about" description= "About this project"/>
            <NavigationLink text= "Tools" href="/tools" description= "A few tools I built"/>
            
            */}

           {/* {LINKS.map( l => <NavigationLink key={l.href} text={l.text} href={l.href} description= {l.description}/>)} */}

           {LINKS.map( l => <NavigationLink key={l.href} {...l}/>)}

        </div>);
}

function NavigationLink({ text, href, description}){
    return(<Link href={href}
    className={styles.card}>
    <h2>
        {text} <span>-&gt;</span>
    </h2>
    <p>{description}</p>
    </Link>)
}