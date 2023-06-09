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
    src="https://res.cloudinary.com/dfnaxhqqq/video/upload/v1686317207/obcg/obcg4thupscaled_zvpkwt.mp4"
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
