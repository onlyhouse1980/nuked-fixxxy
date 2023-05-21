// import Header from "../components/Header";
/* import Footer from "../Components/Footer";
import Post from "../Components/Post"; */
// import EffiencyPDF from '@/components/Efficiency1'
// import ControlledCarousel from'../Components/Carousel'
import styles from './consumer.module.css'


export default function Consumer() {
  return (
    <>
      
      <div className="ratio ratio-1x1">
                <iframe src='/Efficiency.pdf'  
                allowFullScreen className={styles.ExternalFiles}
                
                
                 ></iframe>
            </div>
      {/* <ControlledCarousel /> */}
      {/* <Post /> */}
      {/* <Footer /> */}
    </>
  );
}
