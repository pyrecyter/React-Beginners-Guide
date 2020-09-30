import React, { useState, useEffect } from "react";
import Axios from "axios";

const UserDetails = ({id}) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users/" + id)
      .then((res) => {
        if (res.status == 200) setDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [details==null]);

  return (
    <center>
      {details?.id} 
      <br />
      {details?.email}
      <br />
      {details?.first_name}
      <br />
      {details?.last_name}
      <br />
      {details?.avatar}
    </center>
  );
};

export default UserDetails;
