import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MessageCard from '../components/Message'
import axios from "axios"
import { useEffect,useState } from 'react';

function Messages() {
  return (
    <div className="Messages">
        <h1> Message Page </h1>
        <Link to = "/User#?ChatInbox"> ChatInbox </Link>
    </div>
  );
}

export default Messages;


