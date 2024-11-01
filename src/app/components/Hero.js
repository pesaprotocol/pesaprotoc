import styles from './HeroSection.module.css';
import Image from 'next/image';
import myimg from './images/onr.png';



export default function HeroSection() {

  return (
    <section className={styles.heroSection}>
        <div className={styles.heroContent}>
        <h1 style={{ fontWeight: "bold", color:"white" }}>
          On Chain Credit Risk, Simplified
        </h1>
          <h3 style={{fontSize:"22px",fontWeight:"bold", color:"#909aeb"}}>Confidentiality as a Service</h3>
            <p style={{color:"white", maxWidth:"500px"}}>
              Store your <strong>treasures</strong> in one place
              And assign trustees.
              Create, seal, and issue thousands of tamper-proof
              credentials and ID´s in 3 simple steps.
            </p>
            <button className={styles.ctaButton}>
              Get Started
            </button>

        </div>
        <div className={styles.heroImage}>
            <Image
                src={myimg}
                width={300}
                height={500}
                alt='treasure'  
            /> 
       
        </div>
    </section>
  );
}