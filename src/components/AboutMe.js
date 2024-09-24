import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from 'react-bootstrap/Image';

const AboutMe = () => {
  return (
    <div id="about" className="container">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Rólam</h1>
        {/* <img
          src="/selfimage.png"
          alt="Profile"
          className="rounded-full w-16 h-16 mx-auto mb-4"
        /> */}
        <Image
          src="/selfimage.png"
          alt="Profile"
          fluid />

        <h2 className="text-2xl font-semibold mb-1">Komornik Antal</h2>
        <p className="text-gray-600 mb-6">React | React Native | Django</p>

        <div className="flex flex-column  space-x-4 mb-8">
          <div className="flex items-center  px-4 py-2 rounded">
            <FaFacebook className="mr-2" size={20} />
            <p>
              Keress meg <a href='https://www.facebook.com/komornik.antal'>Facebook-on </a>
            </p>
          </div>
          <div className="flex items-center  px-4 py-2 rounded ">
            <BiLogoGmail className="mr-2" size={20} />
            <p title="komornik.anti@gmail.com">
              Írj <a href='mailto:komornik.anti@gmail.com' >Emiail-t</a>
            </p>
          </div>
          <div className="flex items-center  px-4 py-2 rounded ">
            <FaGithub className="mr-2" size={20} />
            <p >
              Nézd meg  <a href='https://github.com/antal-komornik/'>GITHUB</a> profilom
            </p>
          </div>
        </div>

        <p className="mb-6">
          A Dunaújvárosi Egyetem hallgatójaként, valamint a Kerpely Antal Számítógépes Szakkollégium alelnökeként elkötelezetten dolgozom azon, hogy értéket teremtsek a környezetem számára.        </p>

        <p className="mb-6">
          Legyen szó szoftverfejlesztésről, társasjátékozásról vagy kézműves tevékenységekről – mint a horgolás, kötés és festés –, mindig örömömet lelem az alkotásban. A 3D nyomtatás izgalmas lehetőségeit is szívesen kutatom.
        </p>

        <p className="mb-6">
          Látássérültként különösen fontos számomra a közösségek építése, és hiszek abban, hogy a kreatív együttműködés az embereket közelebb hozza egymáshoz. Az innovációban és a közösségi élményekben látom a jövőt, amelyeket szívesen támogatok minden lehetőségnél.

        </p>



      </div>
    </div>
  );
}

export default AboutMe;
