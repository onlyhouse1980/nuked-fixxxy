import styles from './VideoBg.module.css'

const VideoBg = () => {
  return (

<div className={styles.fullscreenbg}>
    <video autoPlay loop muted playsInline className={styles.fullscreenbg__video}>
        
        <source src="../../videos/splash1.mp4" type="video/mp4" />
        
    </video>
</div>
  )
}

export default VideoBg