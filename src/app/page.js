import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import HowDoYouKnow from "./components/HowDoYouKnow";
import Testimonials from "./components/Testimonials";
import WaitList from "./components/WaitList";

// <main className={styles.main}>
// <main className={styles.main}>
//className={styles.page}
export default function Home() {
  return (
    <div >
     
        <Navbar />
        <HeroSection />
        <HowDoYouKnow />
        <WaitList />
        <Testimonials />
    
    </div>
  );
}
