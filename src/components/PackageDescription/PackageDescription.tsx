import styles from './PackageDescription.module.scss';
import { motion } from "framer-motion";
import { FC } from 'react';


interface IPackageDescription {
    title: string | React.ReactNode;
    subtitle: string;
    number: number;
}


const PackageDescription: FC<IPackageDescription> = ({
    title, 
    subtitle,
    number
}) => {

    return(
        <motion.div 
            initial={{scale: .7}}
            whileInView={{scale: [.7, 1.5, 1]}}
            transition={{duration: .7, ease: 'easeInOut'}}
            viewport={{amount: .4, once: true}}
            className={styles.description}
        >
            <div className={styles.body} >
                <div className={styles.number} >
                    {`0${number + 1}`}
                </div>
                <div className={styles.info} >
                    <span>{title}</span>{subtitle}
                </div>
            </div>
        </motion.div>
    )
}


export default PackageDescription;