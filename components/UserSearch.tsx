import { useState, useEffect } from 'react';
import NamesContainer from "./NamesContainer";
import styles from "../styles/UserSearch.module.scss";


export default function UserSearch() {

  const getUsers = async (partial_tag: string) => {
    partial_tag.replaceAll("#", "%23");
    const reponse = await fetch(`http://localhost:8080/api/users/${partial_tag}`) // TODO: Add fuzzy searching to api so we don't have to pull all users
    const data = await reponse.json()
    const names = data.map(x => x.tag)
    setUsers(names)
    setFilteredUsers(names)
  };
  useEffect(() => {
    getUsers("")
    return () => {}
  }, [])

  let [users, setUsers] = useState([])
  let [filteredUsers, setFilteredUsers] = useState([]);


  return (
    <div className={styles.container}>
      <input
        className={styles.search_bar}
        onChange={(e) =>
          setFilteredUsers((prev) => {
            return users.filter((x:string) => x.toLowerCase().includes(e.target.value.toLowerCase()))
          })
        }
        type="text"
        autoFocus
      ></input>
      <NamesContainer names={filteredUsers}></NamesContainer>
    </div>
  );
}
