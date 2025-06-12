import React, {useEffect, useState} from "react";
import client from "../services/client";

function Test(){
  const [msg, setMsg] = useState('');

  useEffect(()=>{
    client.get('hello/').then(res=> setMsg(res.data.message));
  },[])

  return <h1>{msg ? msg : "Loading" }</h1>
}

export default Test;