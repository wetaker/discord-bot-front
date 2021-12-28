import { useState } from 'react'
import NamesContainer from './NamesContainer'
import styles from '../styles/UserSearch.module.scss'

const all_users = ['Bob', 'Bob Marley', 'Derek', 'Patrick']

export default function UserSearch() {
    let [users, setUsers] = useState(() => ['Bob', 'Bob Marley', 'Derek', 'Patrick'])

    return (
        <div className={styles.container}>
            <input className={styles.search_bar} onChange={e => setUsers(prev_users => {
                let new_users = all_users.filter(user => user.toLowerCase()
                                         .includes(e.target.value.toLowerCase()))
                    console.log(new_users)
                    return new_users
                })} 
            type="text">
            </input>
            <NamesContainer names={users}></NamesContainer>
        </div>
    )
}