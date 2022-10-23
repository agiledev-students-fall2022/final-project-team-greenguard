import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'
import axios from "axios"
import { useEffect,useState } from 'react';

function Messages() {

  let messages = []
  async function fetchData(){
    const response = await axios (
      "https://my.api.mockaroo.com/messages.json?key=2905a6d0"
    );
    console.log(response)
    const data = response.data
    return data
  }
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data)
  fetchData()
  fetchData().then(data => {
    data.map(item => (
      messages.push(item)
    ))
    console.log(messages)

    return (
      <div className="Messages">
          <br></br>
          <SearchBar></SearchBar>
          <br></br>
  
          { messages.map( (obj, i, arr) => (
            <MessageCard
              img= {obj.img}
              name={obj.name}
              date={obj.date}
              message={obj.message}
            />
          ))}
  
          <Link to = "/User#?ChatInbox"> ChatInbox </Link>
      </div>
    );
  })

  

  console.log(messages)
  
  // const messages2 = [
  //   {
  //     img: "/resowLogo.png",
  //     name: "user x",
  //     date: "mm.dd.yyyy",
  //     message: "when are you coming to pick the bunnie rabbits"
  //   },
  //   {
  //     img: "/resowLogo.png",
  //     name: "user y",
  //     date: "mm.dd.yyyy",
  //     message: "bla bla when are you coming to pick the bunnie rabbits"
  //   },
  //   {
  //     img: "/resowLogo.png",
  //     name: "user z",
  //     date: "mm.dd.yyyy",
  //     message: "bla bla bla are you coming to pick the bunnie rabbits"
  //   }

  // ]

  
}

export default Messages;


