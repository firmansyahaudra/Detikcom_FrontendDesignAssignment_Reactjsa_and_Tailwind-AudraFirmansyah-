import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import sudirman from "../assets/sudirman.png";
import background1 from "../assets/background1.png";
import BackgroundDesktop from "../components/Bg-desktop1";
import logob from "../assets/logob.png";
import Scrolling from "../components/Scrolling/scrolling";
import Carousel from "../components/Carousel";
import iu1 from "../assets/iu1.png";
import iu2 from "../assets/iu2.png";
import iu3 from "../assets/iu3.png";
import iu4 from "../assets/iu4.png";
import map from "../assets/map.png";
import guest from "../assets/guest.png";

const Landing = () => {
  let slides = [iu1, iu2, iu3, iu4];

  const [current, setCurrent] = useState(0);

  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <BackgroundDesktop />
          <div className="h-screen flex flex-col">
            <div className=" h-5/6 flex">
              <div className="w-1/2 h-full flex items-center">
                <div className="w-4/5 h-4/5 bg-gradient-to-tr from-blue-600 to-green-400 rounded-3xl ml-32 flex flex-col items-center gap-2">
                  <div className="w-11/12 h-3/5 mt-5">
                    <img className="w-full h-full" src={map} alt="" />
                  </div>
                  <div className="w-11/12 flex flex-col">
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 900,
                        fontSize: "48px",
                        fontStyle: "italic",
                        color: "white",
                      }}
                    >
                      10K FUN RUN
                    </span>
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "white",
                      }}
                    >
                      Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi
                      hari dimulai dari Bundaran HI hingga Patung Pemuda
                      Membangun di Senayan lalu kembali lagi ke Bundaran HI!
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full flex items-center">
                <div className="w-10/12 h-4/5 ml-3 flex flex-col gap-9">
                  <div className=" h-1/4 bg-gradient-to-tr from-blue-500 to-green-500 rounded-3xl flex flex-col  justify-center p-5">
                    <span
                      className="ml-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 900,
                        fontSize: "30px",
                        fontStyle: "italic",
                        color: "white",
                      }}
                    >
                      GRATIS DAN BERHADIAH
                    </span>
                    <span
                      className="ml-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "white",
                      }}
                    >
                      Pendaftaran gratis! Ajak keluarga anda dan menangkan
                      hadiah total puluhan juta rupiah doorprize menarik!
                    </span>
                  </div>
                  <div className="w-full h-1/4 bg-gradient-to-tr from-blue-500 to-green-500 rounded-3xl flex flex-col  justify-center p-5">
                    <span
                      className="ml-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 900,
                        fontSize: "30px",
                        fontStyle: "italic",
                        color: "white",
                      }}
                    >
                      50+ TENANT BAZZAR{" "}
                    </span>
                    <span
                      className="ml-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "white",
                      }}
                    >
                      Dapatkan promo menarik pada booth-booth tenant bazzar
                      Sudirman Run 2023 mulai dari F&B hingga fashion
                    </span>
                  </div>
                  <div className="w-full h-2/5 bg-gradient-to-tr from-blue-500 to-green-500 rounded-3xl flex flex-row items-center gap-2">
                    <div
                      style={{ width: "160px", height: "160px" }}
                      className=" ml-6 rounded-3xl"
                    >
                      <img src={guest} alt="" />
                    </div>
                    <div
                      style={{ width: "310px", height: "158px" }}
                      className=" flex flex-col"
                    >
                      <span
                        className="ml-2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 900,
                          fontSize: "30px",
                          fontStyle: "italic",
                          color: "white",
                        }}
                      >
                        SPECIAL PERFORMANCE
                      </span>
                      <span
                        className="ml-2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "white",
                        }}
                      >
                        Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria,
                        serta hiburan lainnya!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/5 flex justify-center">
              <button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
                className="w-48 h-10 bg-yellow-500 hover:bg-yellow-600 active:brightness-75 shadow-yellow-300 rounded-full"
              >
                DAFTAR SEKARANG
              </button>
            </div>
          </div>
          <div className="h-72 bg-gradient-to-tr from-blue-700 via-blue-700 to-green-400">
            <div className="h-1/4 flex justify-center">
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "36px",
                }}
                className="mt-10"
              >
                DIDUKUNG OLEH
              </span>
            </div>
            <div className="h-3/4 mt-8 overflow-hidden">
              <Scrolling />
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ height: "1232px" }}
          >
            <div style={{ width: "1058px", height: "846px", gap: "30px" }}>
              <div
                className="flex justify-center items-center"
                style={{ width: "1058px", height: "74px" }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 900,
                    fontSize: "36px",
                  }}
                >
                  GALERI RUN SUDIRMAN 2022
                </span>
              </div>
              <div style={{ width: "1058px", height: "772px" }}>
                <Carousel slides={slides} />
              </div>
            </div>
          </div>
          <div
            style={{ height: "1619px" }}
            className="flex justify-center "
          >
            <div className="mt-24 flex flex-col items-center" style={{width: "1198px", height: "1057px"}}>
                  <div style={{width: "343px", height: "44px"}}>
                    <span style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 900,
                        fontSize: "36px",
                        color: "black",
                      }}>ARTIKEL TERKAIT</span>
                  </div>
                  
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Landing;
