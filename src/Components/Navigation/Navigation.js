import styles from './Navigation.module.css';
import Link from 'next/link';

const LINKS = [
    {href: '/', text: 'Home', description: 'My project idea'},
    {href: '/explore-climbs', text: 'Explore', description: 'Explore routes'},
    {href: '/build-climbs', text: 'Build', description: 'Build your routes'},
    {href: '/profile', text: 'Profile', description: 'Profile features'},
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