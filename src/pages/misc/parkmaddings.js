
                  
              
// import ControlledCarousel from'../Components/Carousel'
import styles from '../consumer.module.css'


export default function ParkMaddings() {
  return (
    <>
      
      <div className="ratio ratio-1x1">
      <iframe src='/misc/Park_Madings_Orchard_Beach.pdf'
                allowFullScreen className={styles.ExternalFiles} 
                 
                
                
                 ></iframe>
            </div>
      {/* <ControlledCarousel /> */}
      {/* <Post /> */}
      {/* <Footer /> */}
    </>
  );
}

export function MobileDevice() {
    query = async (@media only screen and (max-width: 768px)) {
}
