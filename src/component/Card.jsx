import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate  } from "react-router-dom";

export const Card = () => {
  const [data, setData] = useState([]);
  const apiUrl = "https://equran.id/api/v2/surat";
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className=" tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:mx-4 tablet:gap-y-4 laptop:grid laptop:grid-cols-3 laptop:mx-20">
      {data.map((ayat, idx) => (
          <div
          className=" w-full h-32 rounded-lg bg-white mx-3 flex px-2 font-poppins shadow-lg mb-4 tablet:mb-0 hover:cursor-pointer hover:shadow-xl"
          onClick={() => navigate(`/ayat/${ayat.nomor}`)}
          key={idx}
        >
          <div className="flex my-auto">
            <div className=" w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
              {ayat.nomor}
            </div>
            <div className="flex flex-col ml-4 my-auto">
              <div>{ayat.namaLatin}</div>
              <div>{ayat.tempatTurun}</div>
            </div>
          </div>
          <div className=" ml-auto my-auto text-2xl">{ayat.nama}</div>
        </div>
      ))}
    </div>
  );
};
