import styles from '../../styles/Whales.module.css'
import Link from 'next/link'



const Parades = () => {
  
    const media_urls = [
      {
        id: 1,
        title: '2018 First Parade',
        url: 'parades/parade1',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657276658/obcg/OBCG_2018_First_4th_of_July_Parade.mp4#t=0.005',
      },
      {
        id: 2,
        title: '2019 Parade',
        url: 'parades/parade2',        
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657809309/obcg/obcg2019_ejkbwn.mov',
      },
      {
        id: 3,
        title: '2022 Parade',
        url: 'parades/parade3',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657634987/obcg/OBCG_2022_16x9_qrxgj6.mp4#t=0.001',
      },
    ]
  
    // handle mouse enter
    const handleMouseEnter = (e) => {
      const vid = e.target
      vid.muted = true
      vid.play()
    }
  
    // handle mouse leave
    const handleMouseLeave = (e) => {
      const vid = e.target
      vid.muted = false
      vid.currentTime = 0
      vid.pause()
    }
  
    return (
      <>
        <h1 className='text-center'>OBCG Annual 4th of July Parade</h1>
        <div className='container'>
          <div className='row'>
            {media_urls.map((media) => (
              <div key={media.id} className='col-lg-4 col-sm-6 mb-4'>
                <Link href={media.url}>
                <div className='card h-100 bg-indigo-500'>
                  <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}> {media.title}</h4>
                    <video
                      preload="metadata"
                      width='100%'
                      height='100%'
                      padding-bottom='10px'
                      controls
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source src={media.video_url} type='video/mp4' />
                    </video>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default Parades
  