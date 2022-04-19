import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux'

export default function UserContainer() {
    const userData = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])


    return (
        <>

            {userData.loading ? <h2>Loading</h2>
                : userData.error ? <h2>{userData.error}</h2>
                    :
                    <>
                        <h2>UserList</h2>
                        {userData && userData.users && userData.users.map((user) =>

                            <p>{user.name}</p>

                        )}
                    </>
            }
        </>
    )
}


