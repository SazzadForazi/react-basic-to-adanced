import { useState, useEffect } from "react";
const useFetch = (initData, url) => {
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setData(null);
      });
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
