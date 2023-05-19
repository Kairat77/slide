import React from 'react'
import style from './css/Info.module.css'
import Avatar from '../../image/Nurdin.png'
import Group from '../../image/Group.png'
import { ReactComponent as Check } from "../../image/checkbox.svg";



export default function Info() {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.about_us}>
          <div className={style.about_us_tipe}>
            <div className={style.about_us_tipe_fil}>
              <h2>Что мы делаем ?</h2>
            </div>
            <img className={style.group} src={Group} alt="" />
          </div>
          <div className={style.ava}>
            <div className={style.ava_info}>
              <img src={Avatar} alt="" />
              <h2>Нурдин Шейшенов</h2>
              <p>Основатель компании и Генеральный директор</p>
              <a href="https://www.instagram.com/nurdin_sheishenov/">@nurdin_sheishenov</a>
            </div>
            <div className={style.info}>
              <p>  “Мы меняем <strong>мировоззрение</strong> наших студентов.
                Компания основана в <strong>2011</strong>  году и имеет многолетний опыт работы. Мы являемся первопроходцами в сфере рекрутинга. У нас есть официальная государственная лицензия на трудоустройство граждан КР за рубежом. С нами сотрудничают крупные европейские компании.
                <br />
                <br />
                <br />
                Мы не просто помогаем найти работу мечты в европейских странах и оформить необходимые документы, мы поддерживаем наших клиентов, даем советы в различных ситуациях, идем на встречу в сложных ситуациях и не боимся брать на себя ответственность.“</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
