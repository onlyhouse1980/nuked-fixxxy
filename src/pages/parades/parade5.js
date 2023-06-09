import { CldVideoPlayer } from 'next-cloudinary';
import styles from '../../styles/About.module.css'

export default function Parade1() {
  return (
<CldVideoPlayer onPause={({ player }) => {
  const duration = player.duration();
}}
    id='obcg_4th_1_fhgyie'
    maxWidth='1200'
    maxHeight='720'
    src="https://res.cloudinary.com/dfnaxhqqq/video/upload/c_scale,f_auto,g_center,h_720,q_auto,w_1200/v1682981538/obcg_4th_1_fhgyie.mp4" 
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
