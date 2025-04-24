import Link from 'next/link';
import styles from './Home.module.scss';


const Home = () => {

    return (
        <div className={styles.bb} >
            <h1 className={styles.hh} >Hello!</h1>
            <Link href={'/product'} >Product</Link>
        </div>
    )
}

export default Home;
