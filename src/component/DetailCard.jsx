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
      console.log(response.data);
      setDetail(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="font-poppins mx-4">
        {console.log(detail)}
      <div className="text-center my-9">
        <p className=" font-bold text-3xl">النصر</p>
        <p className=" text-xl font-semibold my-2">An-Nasr</p>
        <p>Madinah - 3</p>
      </div>
      <hr className=" border-t-2" />
      <div>
        <div className=" w-10 h-10 bg-slate-500 flex items-center justify-center">
          1
        </div>
        <div className="text-right text-xl my-3 font-semibold">
          تَبٰرَكَ الَّذِيْ بِيَدِهِ الْمُلْكُۖ وَهُوَ عَلٰى كُلِّ شَيْءٍ
          قَدِيْرٌۙ
        </div>
        <div className=" mb-4">
          <p className=" my-4">
            Tabārakal-lażī biyadihil-mulk(u), wa huwa ‘alā kulli syaiin
            qadīr(un).
          </p>
          <p>
            Mahaberkah Zat yang menguasai (segala) kerajaan dan Dia Mahakuasa
            atas segala sesuatu,
          </p>
        </div>
      </div>
    </div>
  );
};
