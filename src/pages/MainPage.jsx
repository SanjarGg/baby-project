import React from "react";
import Navbar from "../Component/Navbar";
import headerImg from "../images/IMG_9511.PNG";
import Cards from "../Component/Card";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { Container } from "@mui/system";
import Instagram from "../images/free-icon-instagram-2111463.png";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <>
      <div className="header">
        <div className="img-1" id="home">
          <img className="img-header" src={headerImg} alt="" />
        </div>
      </div>
      <div className="about-us" id="about-us">
        <h1>О НАС</h1>
        <p>
          Мы официальное дистрибьютеры бренда «BABY LAND” в Кыргызстане.
          <br />У нас широкий ассортимент детских сосок , бутылочек, средств
          <br />
          гигиены и других аксессуаров. Подарите детям счастливое и безопасное
          <br />
          детство с «BABY LAND” Подробнее ознакомиться с нашим ассортиментом
          <br />
          вы можете на нашей Инстаграм странице и на нашем сайте
        </p>
        <div className="icons" id="contacts">
          <a href="https://instagram.com/babylandco.kg?igshid=YmMyMTA2M2Y=">
            <img src={Instagram} alt="" />
          </a>
          <a href="http://kama.kg/">
            <h3>Наша Страница</h3>
          </a>
        </div>
      </div>
      <div className="respect">
        <div className="all-cards" id="products">
          <Cards />
        </div>
        <Container>
          <div className="title">
            <h1>Почему стоит доверять нам?</h1>
          </div>
          <div className="haractiristick">
            <div className="material-info">
              <div className="material">
                <h1>Материалы</h1>
                <p>
                  Мы используем только натуральные и экологически-чисыте <br />
                  материалы
                </p>
              </div>

              <div className="price">
                {/* <InsertEmoticonIcon /> */}
                <h1>Цена</h1>
                <p>Самые выгодные цены и выбор на любой кошелек</p>
              </div>
              <div className="range">
                {/* <InvertColorsIcon /> */}
                <h1>Ассортимент</h1>
                <p>
                  Мы верим, что вы сможете найти для своего магазина и для своих
                  клиентов все самое необходимое
                </p>
              </div>
            </div>
            <div className="img-tovar">
              <img
                src="https://lh3.googleusercontent.com/pw/AL9nZEVu4H7L_vSwHBqO-Yc5Jv2mlw3S3V-AWReASlVp5s7jAdOnuYvLUMHFToPa3LoKdGJwQqtSBPNSgLEiG5c26jE6PD7XfF4MsBvntEPIhK15ZQ1GYeM50vr7-92gGl_eR3FuWR0W5g1r0i7us_hG3Sw=w1090-h929-no?authuser=0"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="gays-main">
        <div className="gays" id="gays">
          <h2>Нашy продукцию можете найти здесь: </h2>
          <p>
            Алдей алдей магазин <br /> Неман Аптека <br /> Лекарь Крошка <br />
            Мамонтёнок <br />
            Baby one
            <br />
            Аист Бимед <br />
            Malina home
          </p>
        </div>
      </div>
      <div className="contactss">
        <h1>
          Следите за нами в соцсетях или же <br />
          мы ждем вас в наших магазинах
        </h1>
      </div>
      <div className="addres">
        <h2>Наш адрес</h2>
        <a
          className="adress-img"
          href="https://2gis.kg/bishkek/geo/15763234351020965/74.519125912338495,42.864002150835923"
        >
          <img
            src="https://img.apkmodhere.com/v1/a/c2981ff8f6f272c01da469086650f8ba/icon.png"
            alt=""
          />
        </a>
      </div>
      <div className="number">
        <p>
          Г. Бишкек , улица Мурманская 1/1 <br /> Телефон +996 700 745 746
        </p>
      </div>
    </>
  );
}

export default MainPage;
