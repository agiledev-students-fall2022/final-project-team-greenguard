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
        <h1> Message Page </h1>
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


      {/* renderMessage() */}

        {/* render(){
          return(
            <div>
            <MessageCard
              img="/resowLogo.png"
              name="user x"
              date="mm.dd.yyyy"
              message="when are you coming to pick the bunnie rabbits"
            />
           </div>
          )
        } */}
        

        {/* render: function () {
          
          let rows = [], i = 0, len = 10;
          while (++i <= len) rows.push(i);

          return (
            <tbody>
              {rows.map(function (i) {
                return <ObjectRow key={i} index={i} />;
              })}
            </tbody>
          );
        } */}


        {/* render() {
          return (
            <div>
              {(() => {
                let rows = []
                numrows = 10
                for (let i = 0; i < numrows; i++) {
                  rows.push(<MessageCard key={i} 
                  img="/resowLogo.png"
                  name="user x"
                  date="mm.dd.yyyy"
                  message="when are you coming to pick the bunnie rabbits"/>)
                }
                return {rows};
              })()}
            </div>
          );
        } */}

        {/* render() {
          return (
            <tbody>
              {(() => {
                const rows = [];
                for (let i = 0; i < objectRows.length; i++) {
                  rows.push(<ObjectRow key={i} data={objectRows[i]} />);
                }
                return rows;
              })()}
            </tbody>
          );
        } */}
        <Link to = "/User#?ChatInbox"> ChatInbox </Link>
    </div>
  );
}

export default Messages;


