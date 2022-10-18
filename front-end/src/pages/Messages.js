import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'

function Messages() {
  return (
    <div className="Messages">
        <h1> Message Page </h1>
        <SearchBar></SearchBar>
        <MessageCard
          img="/resowLogo.png"
          name="user x"
          date="mm.dd.yyyy"
          message="when are you coming to pick the bunnie rabbits"
        />
        <Link to = "/User#?ChatInbox"> ChatInbox </Link>
    </div>
  );
}

export default Messages;


