
// import ControlledCarousel from'../Components/Carousel'
import styles from './consumer.module.css'


export default function Sysplan() {
  return (
    <>
      
      <div className="ratio ratio-1x1">
                <iframe src='/Sysplan.pdf'  
                allowFullScreen 
                defaultViewMode='SINGLE_PAGE:'
                className={styles.ExternalFiles}
                display="singlePage"
                
                 ></iframe>
                 console.log(iframe)
            </div>
      {/* <ControlledCarousel /> */}
      {/* <Post /> */}
      {/* <Footer /> */}
    </>
  );
}
