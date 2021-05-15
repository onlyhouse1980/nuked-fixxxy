import styles from './VideoBg2.module.css'

const VideoBg2 = () => {
  return (

<div className={styles.fullscreenbg}>
    <video autoPlay loop muted playsInline className={styles.fullscreenbg__video}>
        
        <source src="../../videos/waterdroplet.mp4" type="video/mp4" />
        
    </video>
</div>
  )
}

export default VideoBg2