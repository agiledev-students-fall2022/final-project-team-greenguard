import { Link } from "react-router-dom";

import SearchBar from '../components/SearchBar';
import PostCard from '../components/Post';
import axios from "axios";
import { useEffect,useState } from 'react';

function SavedPost() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const result = await axios(
        "https://my.api.mockaroo.com/posts.json?key=23fbddd0"
      );

      setData(result.data);
    }

    fetchData();
  }, []);

    return (
      <>
      <section className="SavedPost">
        <br></br>
        <SearchBar></SearchBar>
        <br></br>
        { data && data.map((item) => (
          <PostCard 
            key={item.id}  
            img= {item.img}
            postTitle={item.postTitle}
            time={item.time}
            message={item.message}
            name={item.name}
          />
        ))}
      </section>
    </>
    );
  }
  
  export default SavedPost;
  
  
  