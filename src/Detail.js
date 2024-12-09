import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Detail = () => {
  const values = useSelector((state) => state.testSlice.value);
  const [detailData, setDetailData] = useState(null);

  const params = useParams();

  useEffect(() => {
    const detailValue = values.find((item) => item.id === parseInt(params.id));
    setDetailData(detailValue);
  }, [params]);
  return (
    <div>
      <h3>Detail Data</h3>
      {detailData && (
        <>
          <p>{detailData.userId}</p>
          <p>{detailData.id}</p>
          <h4>
            <b>{detailData.title}</b>
          </h4>
          <p>{detailData.body}</p>
        </>
      )}
    </div>
  );
};

export default Detail;
