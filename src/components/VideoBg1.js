import styles from './VideoBg1.module.css'

const VideoBg1 = () => {
  return (

<div className={styles.fullscreenbg}>
    <video autoPlay loop muted playsInline className={styles.fullscreenbg__video}>
        
        <source src="../../videos/freewater.mp4" type="video/mp4" />
        
    </video>
</div>
  )
}

export default VideoBg1