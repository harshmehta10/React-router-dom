import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/harshmehta10")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center text-3xl m-4 p-4 bg-gray-600">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
};

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/harshmehta10");
  return response.json();
};
