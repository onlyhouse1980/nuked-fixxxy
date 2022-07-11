
const Home = () => {
    const media_urls = [
      {
        id: 1,
        title: 'Video One',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657501529/obcg/whale1_iyc5yc.mp4',
      },
      {
        id: 2,
        title: 'Video Two',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657501527/obcg/whale2_haymfa.mp4',
      },
      {
        id: 3,
        title: 'Video Three',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657501527/obcg/whale3_ziwwhq.mp4',
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
        <h1 className='text-center'>Our visitors from the deep end.</h1>
        <div className='container'>
          <div className='row'>
            {media_urls.map((media) => (
              <div key={media.id} className='col-lg-4 col-sm-6 mb-4'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h4 className='card-title'>{media.title}</h4>
                    <video
                      width='100%'
                      height='auto'
                      padding-bottom='10px'
                      controls
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source src={media.video_url} type='video/mp4' />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default Home
  