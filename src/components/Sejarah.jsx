import { useState } from "react";
import { data } from "../data/";

const Sejarah = () => {
  const [active, setActive] = useState(1);

  const selectedData = data[active] || {
    title: "Data tidak ditemukan",
  };
  return (
    <div className="pl-12 mt-7 xl:mt-14 2xl:px-32">
      <p className="text-2xl md:text-3xl font-bold">Sejarah</p>
      <div className="mt-3 box-scroll w-[90%] font-bold">
        <button
          onClick={() => setActive(1)}
          className={
            active === 1
              ? "text-nowrap border-b  border-black active"
              : "text-nowrap"
          }
        >
          Abad 19
        </button>
        <button
          onClick={() => setActive(2)}
          className={
            active === 2
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1886-1942
        </button>
        <button
          onClick={() => setActive(3)}
          className={
            active === 3
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1942-1945
        </button>
        <button
          onClick={() => setActive(4)}
          className={
            active === 4
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1948
        </button>
        <button
          onClick={() => setActive(5)}
          className={
            active === 5
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1950
        </button>
        <button
          onClick={() => setActive(6)}
          className={
            active === 6
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1957
        </button>
        <button
          onClick={() => setActive(7)}
          className={
            active === 7
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1961
        </button>

        <button
          onClick={() => setActive(8)}
          className={
            active === 8
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1966 - 1978
        </button>

        <button
          onClick={() => setActive(9)}
          className={
            active === 9
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1978 - 1984
        </button>

        <button
          onClick={() => setActive(10)}
          className={
            active === 10
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          1984 - 2001
        </button>

        <button
          onClick={() => setActive(11)}
          className={
            active === 11
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          2001 - 2016
        </button>
        <button
          onClick={() => setActive(12)}
          className={
            active === 12
              ? "ml-5 text-nowrap border-b  border-black active"
              : "ml-5 text-nowrap"
          }
        >
          2016 - Sekarang
        </button>
      </div>

      {/* content sejarah */}
      <div className="mt-7">
        <p className="text-3xl font-bold">{selectedData.year}</p>
        <p className="text-1xl mt-4 font-bold pr-20 pb-10">
          {selectedData.title}
        </p>
      </div>

      {/* end content sejarah */}
    </div>
  );
};

export default Sejarah;
