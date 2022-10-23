import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'

function Messages() {
  const messages = [
    {
      img: "/resowLogo.png",
      name: "user x",
      date: "mm.dd.yyyy",
      message: "when are you coming to pick the bunnie rabbits"
    },
    {
      img: "/resowLogo.png",
      name: "user y",
      date: "mm.dd.yyyy",
      message: "bla bla when are you coming to pick the bunnie rabbits"
    },
    {
      img: "/resowLogo.png",
      name: "user z",
      date: "mm.dd.yyyy",
      message: "bla bla bla are you coming to pick the bunnie rabbits"
    }

  ]

  return (
    <div className="Messages">
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
}

export default Messages;


