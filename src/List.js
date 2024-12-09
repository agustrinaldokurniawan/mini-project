import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setValues } from "./slice";
import { useNavigate } from "react-router";

function List() {
  const values = useSelector((state) => state.testSlice.value);
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setValues(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!values.length) {
      fetchData();
    }
  }, [values]);

  const onClickDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <p>Home</p>
      <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "12px",
        }}
      >
        {values
          .filter((item) => item.title.includes(searchKey))
          .map((item, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "12px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => {
                onClickDetail(item.id);
              }}
            >
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default List;
