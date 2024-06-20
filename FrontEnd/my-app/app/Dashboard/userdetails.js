"use client"
import { useUser } from '@clerk/clerk-react';

function getUserDetails(user) {
  return {
    firstName: user.firstName,
    // lastName: user.lastName,
    // email: user.primaryEmailAddress?.emailAddress
  };
}

export default function DisplayUserDetails() {
  const { user, isLoaded, isError } = useUser();

  let userDetails;
  if (!isLoaded) {
    userDetails = 'Loading user details...';
  } else if (isError) {
    userDetails = 'Error loading user details.';
  } else {
    userDetails = getUserDetails(user);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {typeof userDetails === 'string' ? (
        <p>{userDetails}</p>
      ) : (
        <ul>
          <li>Welcome {userDetails.firstName}</li>
          {/* <li>Last Name: {userDetails.lastName}</li>
          <li>Email: {userDetails.email}</li> */}
        </ul>
      )}
      
    </div>
  );
}