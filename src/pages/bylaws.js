
// import ControlledCarousel from'../Components/Carousel'
import styles from './consumer.module.css'


export default function CurrentBylaws() {
  return (
    <>
      
      <div className="ratio ratio-1x1">
                <iframe src='/Bylaws.pdf'  
                allowFullScreen className={styles.ExternalFiles}
                
                
                 ></iframe>
            </div>
      {/* <ControlledCarousel /> */}
      {/* <Post /> */}
      {/* <Footer /> */}
    </>
  );
}
