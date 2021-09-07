import { useState, useEffect } from "react";
import youtube from "../Apis/youtube";

const useVideos = (defaultSearchTrem) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTrem);
  }, [defaultSearchTrem]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};
export default useVideos;
