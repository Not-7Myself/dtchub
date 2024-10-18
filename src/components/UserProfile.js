import React, { useEffect, useState } from "react";
import { database, auth } from "../js/firebaseConfig";
import { ref, get } from "firebase/database";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(database, `users/${user.uid}`);
        const userDataSnapshot = await get(userRef);
        if (userDataSnapshot.exists()) {
          setUserProfile(userDataSnapshot.val());
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold">
        {userProfile.username}
      </h2>
      <p className="mt-2">School: {userProfile.school}</p>
      <p className="mt-2">Email: {userProfile.email}</p>
      <p className="mt-2">Bio: {userProfile.bio}</p>
      <img src={userProfile.profilePic} alt="Profile" className="w-32 h-32 rounded-full mt-4" />
      {/* Display followers, following, and other profile details */}
    </div>
  );
}

export default UserProfile;
