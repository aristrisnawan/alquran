/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailCard = () => {
  const { nomor } = useParams();
  const [detail, setDetail] = useState();
  const apiUrl = `https://equran.id/api/v2/surat/${nomor}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setDetail(response?.data?.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="font-poppins mx-4">
      <div className="text-center my-9">
        <p className=" font-bold text-3xl">{detail?.nama}</p>
        <p className=" text-xl font-semibold my-2">{detail?.namaLatin}</p>
        <p>
          {detail?.tempatTurun} - {detail?.jumlahAyat}
        </p>
      </div>
      {detail?.ayat?.map((datas, idx) => (
        <>
          <hr className=" border-t-2" key={idx}/>
          <div>
            <div className=" w-10 h-10 bg-slate-500 flex items-center justify-center">
              {datas?.nomorAyat}
            </div>
            <div className="text-right text-xl my-3 font-semibold">
              {datas?.teksArab}
            </div>
            <div className=" mb-4">
              <p className=" my-4">
                {datas?.teksLatin}
              </p>
              <p>
                {datas?.teksIndonesia}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
