import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import axios from 'axios';
import { useRouter } from 'next/router';

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [userid, setUserId] = useState('')
  const [username, setUserName] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userprofilepic, setUserProfilePic] = useState('')
  const [userMemes, setUserMemes] = useState([])

  useEffect(() => {
    // Fetch the posts and update the state

    if (localStorage.getItem("token")) {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getmemes`);
          setPosts(response.data.reverse());
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

      const getUser = async () => {
        const id = await localStorage.getItem("userId")
        await setUserId(id)
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser/${id}`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
        });
        const json = await response.json();

        await setUserName(json.username)
        await setUserEmail(json.useremail)
        await setUserProfilePic(json.userpic)
      }

      const getUserMemes = async () => {
        const id = await localStorage.getItem("userId")
        await setUserId(id)
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getusermeme/${id}`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const json = await response.json();
        setUserMemes(json.usermeme)
      }

      fetchPosts();
      getUser();
      getUserMemes();
    }


  }, [router.asPath, posts]);

  return (
    <AppContext.Provider value={{ posts, userid, username, useremail, userprofilepic, userMemes }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
