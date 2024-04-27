import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000${URL}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data;
};

export default useAxios;
