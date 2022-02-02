
import styles from '../../styles/Feature.module.css'
import { FeatureCarousel } from './subComponents/FeatureCarousel';


export const Feature = () => {
  
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h1 className={styles.headH1}>
                Awesome Apps Features
                </h1>
                <p className={styles.headPara}>
                Explore The Awesome App Features. It’s A Complete Solution For All Your <br /> Events.
                </p>
            </div>
            <FeatureCarousel styles={styles}/>
        </div>
    );
};
