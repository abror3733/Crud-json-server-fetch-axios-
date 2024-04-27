import React, { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000${URL}`)
      .then((response) => response.json())
      .then((reslut) => setData(reslut));
  },[]);
  return data
};

export default useFetch;
