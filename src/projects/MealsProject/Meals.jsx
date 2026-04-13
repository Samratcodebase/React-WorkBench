import axios from "axios";
import { useState, useEffect } from "react";
import "./Meals.css";
export const Meals = () => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        res = res.data.map(({ userId, id, title, body }) => {
          return title;
        });

        setitems(res);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>
        items :{" "}
        {items.map((title) => {
          return (
            <>
              {" "}
              <span> {title} </span> <br />{" "}
            </>
          );
        })}
      </h1>
    </div>
  );
};
