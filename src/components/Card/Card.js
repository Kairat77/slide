import React from 'react'
import style from './css/Card.module.css'
import Foto from '../../image/foto/Kairat.jpg'
import Foto_2 from '../../image/foto/Kairat1.jpg'
import Foto_3 from '../../image/foto/Nurdin.jpeg'

export default function Card() {
  return (
    <div className={style.tipe}>
    <div className={style.wrapper}>
      <div className={style.card}>
        <img src={Foto} alt="" />
        <div className={style.info}>
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, officia.</p>
          <a href="#" className={style.btn}>Read More</a>
        </div>
      </div>
      <div className={style.card}>
        <img src={Foto_2} alt="" />
        <div className={style.info}>
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, officia.</p>
          <a href="#" className={style.btn}>Read More</a>
        </div>
      </div>
      <div className={style.card}>
        <img src={Foto_3} alt="" />
        <div className={style.info}>
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, officia.</p>
          <a href="#" className={style.btn}>Read More</a>
        </div>
      </div>
    </div>
    </div>
  )
}
