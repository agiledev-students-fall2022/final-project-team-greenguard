import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'
import axios from "axios"
import { useEffect,useState } from 'react';

// function Messages(props) {
//   const [data, setData] = useState([]);

  
//     // a nested function that fetches the data
//     async function fetchData() {
//       // axios is a 3rd-party module for fetching data from servers
//       const result = await axios(
//         // retrieving some mock data about animals for sale
//         // "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
//         "https://my.api.mockaroo.com/messages.json?key=23fbddd0"
//       );
//       // set the state variable
//       // this will cause a re-render of this component
//       setData(result.data);
//     }

//     useEffect(() => {
//       fetchData();
//     }, []);
    

//     // the blank array below causes this callback to be executed only once on component load
  
// }


function Messages() {

  // let messages = []
  // async function fetchData(){
  //   const response = await axios (
  //     "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
  //   );
  //   console.log(response)
  //   const data = response.data
  //   return data
  // }

  // let flag = 0
  // fetchData()
  // fetchData().then(data => {
  //   data.map(item => (
  //     messages.push(item)
  //   ))
  //   console.log(messages)
  //   flag = 1
  //   // returnFunction()
  // });

  

 

// async function returnFunction() {
//   await fetchData();
//   return (
//     <div className="Messages">
//         <br></br>
//         <SearchBar></SearchBar>
//         <br></br>
        
          
//               { messages.map( (obj, i, arr) => (
//                 <MessageCard
//                   img= {obj.img}
//                   name={obj.name}
//                   date={obj.date}
//                   message={obj.message}
//                 />
//               ))}
              
            
      
//         <Link to = "/User#?ChatInbox"> ChatInbox </Link>
        
//     </div>
// );
// }

// return returnFunction()

const [data, setData] = useState([]);

  useEffect(() => {
    // a nested function that fetches the data
    async function fetchData() {
      // axios is a 3rd-party module for fetching data from servers
      const result = await axios(
        // retrieving some mock data about animals for sale
        // "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
        "https://my.api.mockaroo.com/messages.json?key=23fbddd0"
      );
      // set the state variable
      // this will cause a re-render of this component
      setData(result.data);
    }

    // fetch the data!
    fetchData();

    // the blank array below causes this callback to be executed only once on component load
  }, []);

  // const [data, setData] = useState([]);

  
  //   // a nested function that fetches the data
  //   async function fetchData() {
  //     // axios is a 3rd-party module for fetching data from servers
  //     const result = await axios(
  //       // retrieving some mock data about animals for sale
  //       // "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
  //       "https://my.api.mockaroo.com/messages.json?key=23fbddd0"
  //     );
  //     // set the state variable
  //     // this will cause a re-render of this component
  //     setData(result.data);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
    
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


