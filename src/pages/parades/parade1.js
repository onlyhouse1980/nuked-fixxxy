import { CldVideoPlayer } from 'next-cloudinary';
import styles from '../../styles/About.module.css'

export default function Parade1() {
  return (
<CldVideoPlayer 
    id='obcg_zigy1j'
    width='1920'
    height='1080'
    src="https://res.cloudinary.com/dfnaxhqqq/video/upload/fl_any_format.mono/v1657634720/obcg/OBCG_2018__4th_July_Parade_p8kgjw.mp4" 
    imageUrl="https://obcg.org/Images/obcglogo.webp"
    controls
    autoPlay={false}
    loop
    muted
    colors={{
      base: '#3f51b5',
      text: 'white',
      accent: '#778899',
  }}
/>


  )
}
