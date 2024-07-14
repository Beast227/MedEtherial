import React from 'react';
import { useNavigate } from 'react-router-dom';

const sharedClasses = {
  bgWhite: 'bg-white',
  textZinc900: 'text-zinc-900',
  darkBgZinc900: 'dark:bg-zinc-900',
  darkTextZinc100: 'dark:text-zinc-100',
  bgBlue600: 'bg-blue-600',
  textWhite: 'text-white',
  py2: 'py-2',
  px4: 'px-4',
  flex: 'flex',
  justifyBetween: 'justify-between',
  itemsCenter: 'items-center',
  textSm: 'text-sm',
  ml4: 'ml-4',
  mr4: 'mr-4',
  bgRed500: 'bg-red-500',
  rounded: 'rounded',
  container: 'container',
  mxAuto: 'mx-auto',
  shadowMd: 'shadow-md',
  text2xl: 'text-2xl',
  fontBold: 'font-bold',
  flexSpaceX6: 'flex space-x-6',
  hoverTextBlue600: 'hover:text-blue-600',
  bgCover: 'bg-cover',
  bgCenter: 'bg-center',
  relative: 'relative',
  textCenter: 'text-center',
  text4xl: 'text-4xl',
  mb4: 'mb-4',
  mb8: 'mb-8',
  bgBlue500: 'bg-blue-500',
  roundedFull: 'rounded-full',
  text3xl: 'text-3xl',
  lgW1_2: 'lg:w-1/2',
  lgMb0: 'lg:mb-0',
  lgPl8: 'lg:pl-8',
  textBlue500: 'text-blue-500',
  flexWrap: 'flex flex-wrap',
  wFull: 'w-full',
};

const Home = () => {
  const navigate = useNavigate();

  const handleMakeAppointment = () => {
    navigate('/doctor-appointment');
  };

  const handleSchedule = () => {
    navigate('/schedules');
  };

  return (
    <div className="md-auto bg-cover bg-center w-full max-h-dvh" style={{ backgroundImage: "url('https://getwallpapers.com/wallpaper/full/e/a/7/303126.jpg')" }}>
      <div>
        <div className="mx-auto px-4 py-24 text-black font-bold text-center place-content-center ">
          <h1 className="text-8xl font-bold mb-4 pb-16 pt-44 ">We are here for your Care</h1>
          <p className="mb-8 text-4xl pb-16 ">At Med-Ethereal, we are dedicated to providing compassionate and comprehensive healthcare services to our community. Our team of experienced professionals is committed to ensuring your well-being with personalized care and advanced medical solutions. Trust us to be your partner in health, guiding you towards a healthier, brighter future</p>
          <button onClick={handleMakeAppointment} className="bg-blue-500 text-white px-6 py-4 rounded-full w-64 hover:bg-gray-400 ">Make an appointment</button>
          <br />
          <br />
          <button onClick={handleSchedule} className="bg-blue-500 text-white px-6 py-4 rounded-full w-48 hover:bg-gray-400">Schedule</button>
        </div>
      </div>
      <section>
        <h2 className="font-bold text-black text-5xl letter-spacing tracking-wide text-center">
          ABOUT US
        </h2>
        <br />
        <br /><br />
        <div className="md:flex gap-9 place-content-center text-1xl px-14">
          <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-48 rounded-lg p-8 gap-4">
            <div className="team-item">
              <h3 className="text-center text-3xl font-bold text-black-400 m-3">
                Varun Raj
              </h3>
              <div className="team-info">
                <p className="text-center text-2xl text-black-400 ">
                  Back-End Developer
                </p>
                <ul className="team-icon"></ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-48 rounded-lg p-8 gap-4">
            <div className="team-item">
              <br />
              <h3 className="text-center text-3xl font-bold text-black-400 m-3">
                M Vaibhav
              </h3>
              <div className="team-info">
                <p className="text-center text-2xl text-black-400 ">
                  Back-End Developer
                </p>
                <ul className="team-icon"></ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-96 h-48 rounded-lg p-8 gap-4">
            <div className="team-item">
              <br />
              <h3 className="text-center text-3xl font-bold text-black-400 m-3">
                Charanya K Naik
              </h3>
              <div className="team-info">
                <p className="text-center text-2xl text-black-400 ">
                  Front-End Developer
                </p>
                <ul className="team-icon"></ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-48 rounded-lg p-8 gap-4">
            <div className="team-item">
              <br />
              <h3 className="text-center text-3xl font-bold text-black-400 m-3">
                Melisha
              </h3>
              <div className="team-info">
                <p className="text-center text-2xl text-black-400 ">
                  Front-End Developer
                </p>
                <ul className="team-icon display: inline-flex flex-row"></ul>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
