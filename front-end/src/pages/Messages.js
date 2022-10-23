import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'
import axios from "axios"
import { useEffect,useState } from 'react';

function Messages() {

const [data, setData] = useState([]);

  useEffect(() => {
   
    async function fetchData() {
      
      const result = await axios(
        // "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
        "https://my.api.mockaroo.com/messages.json?key=23fbddd0"
      );
      
      setData(result.data);
    }

    fetchData();
  }, []);
    
  return (
    <>
      <section className="Messages">
        <br></br>
        <SearchBar></SearchBar>
        <br></br>
        { data && data.map((item) => (
          <MessageCard 
            key={item.id}  
            img= {item.img}
            name={item.name}
            date={item.date}
            message={item.message}
          />
        ))}
      </section>
    </>
  );

}


export default Messages;


