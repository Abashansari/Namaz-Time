import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

// Import all assets
import posture1 from '../assets/posture1.jpg'
import posture2 from '../assets/posture2.jpg'
import posture2a from '../assets/posture2a.jpg'
import posture2b from '../assets/posture2b.jpg'
import posture2c from '../assets/posture2c.jpg'
import posture3 from '../assets/posture3.jpg'
import posture4 from '../assets/posture4.jpg'
import posture5 from '../assets/posture5.jpg'
import posture6 from '../assets/posture6.jpg'
import posture7 from '../assets/posture7.jpg'
import posture8 from '../assets/posture8.jpg'
import posture8a from '../assets/posture8a.jpg'
import posture8b from '../assets/posture8b.jpg'
import posture8c from '../assets/posture8c.jpg'
import posture8d from '../assets/posture8d.jpg'
import posture9 from '../assets/posture9.jpg'
import wudu from '../assets/wudu.gif'
import Card from '../Components/Card';
import FlexCard from '../Components/FlexCard';

export default function AboutNamaz() {
  return (
    <div className='container my-5 '>

      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark display-5">Namaz / Salah</h1>

        <p className="text-muted lead mx-auto" style={{ maxWidth: '800px' }}>
          Prayer is the daily spiritual journey that reconnects the heart and soul with God (Allah).
          Five times a day, we pause to recite the Qur'an and engage in meditation (dhikr),
          strengthening our bond with the Creator.
        </p>

        <div className="d-flex justify-content-center mt-3">
          <div style={{ width: '60px', height: '4px', backgroundColor: 'black', borderRadius: '2px' }}></div>
        </div>
      </div>

      <div className='container'>
        <FlexCard icon={<MenuBookIcon className="me-2 text-dark" />} title="Step-by-Step Prayer Guide" />
      </div>

      <div className='container'>
        <Card img={posture1} />
        <Card img={posture2} />
        <Card img={posture2a} />
        <Card img={posture2b} />
        <Card img={posture2c} />
        <Card img={posture3} />
        <Card img={posture4} />
        <Card img={posture5} />
        <Card img={posture6} />
        <Card img={posture7} />
        <Card img={posture8} />
        <Card img={posture8a} />
        <Card img={posture8b} />
        <Card img={posture8c} />
        <Card img={posture8d} />
        <Card img={posture9} />
      </div>

      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark display-5"> Wudu (Ablution)</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '800px' }}>
          Purity is half of faith. Before standing in front of the Creator, we cleanse ourselves physically and spiritually.
          "O you who have believed, when you rise to [perform] prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles."
        </p>
      </div>

      <div className='container'>
        <FlexCard icon={<WaterDropIcon className="me-2 text-dark" />} title="Step-by-step visual guide;" />
      </div>

      <div className="container">
        <Card img={wudu} />
      </div>
    </div>
  )
}