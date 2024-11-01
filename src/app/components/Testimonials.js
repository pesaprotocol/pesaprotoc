import styles from './testimonial.module.css';

export default function Testimonials() {
    const testimonials = [
        {
        name: "Jovan Mwesigwa",
        title: "Oneramp Founder",
        // image: "/images/testimonial1.jpg",
        quote: "To the SMEs in Uganda, this technology will allow agility, trust, scale and much more, contribute to saving the environment."
        },
        {
        name: "Kiyingi Raymond",
        title: "RealEstate Entrepreeur",
        // image: "/images/testimonial2.jpg",
        quote: "I believe Treasures will help curb counterfeit issues regarding land titles"
        },
        {
        name: "Maria",
        title: "Parent",
        // image: "/images/testimonial3.jpg",
        quote: "I honestly believe treasures will revolutionalize digital crendentialing,In academic institutions"
        }
    ];
    return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>ContactUs</h2>
      <h2>pesaprotocol@gmail.com</h2>
      <h2 style={{marginTop:"20px"}}>+256706 626855</h2>
    </section>
  );
}