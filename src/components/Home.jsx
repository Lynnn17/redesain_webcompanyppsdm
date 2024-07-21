import Gedung from "../assets/gedung.png";
const Home = () => {
  return (
    <div>
      <div className="md:hidden -mt-1">
        <img
          className="h-[36rem] w-full object-none z-0 object-buttom opacity-90"
          src={Gedung}
          alt=""
        />
      </div>
      <div className="video-container hidden md:block">
        <div className=" ">
          <iframe
            title="YouTube Background Video"
            class="w-full h-auto 
            lg:h-auto  aspect-video scale-[1] lg:scale-100 absolute bottom-0 left-0 top-0 z-[-10] "
            src="https://www.youtube.com/embed/xd2NFBVFWrY?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=xd2NFBVFWrY&amp;mute=1&amp;"
          ></iframe>
        </div>
      </div>
      <div className="absolute h-full w-full top-0 left-0 py-15 px-10">
        <div className=" flex w-full h-[36rem]  flex-col md:justify-center text-white  container justify-end font-bold md:font-extrabold  ">
          <p className="text-4xl ">PPSDM MIGAS</p>
          <p className="italic w-[65%]">
            PUSAT PENGEMBANGAN SUMBER DAYA MANUSIA MINYAK DAN GAS BUMI
          </p>
          <br />
          <p class="text-3xl">Bridging Your Success</p>
          <p className="italic">Oil and Gas Industry Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
