import React, { useEffect } from 'react';
import { Auth } from './Auth'


export const List = () => {
  // const [state, setState] = React.useState<null>();
  useEffect(() => {
    if(Auth.isAuthenticated()) alert(`Authenticated with token ${Auth.getToken()}`)
    else window.location.href = "/login"
  });

  return (
    <div>
      <h1>List</h1>
    </div>
  );
};
