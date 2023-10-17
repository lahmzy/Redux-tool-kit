import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUsers } from './userslice'

const UserView = () => {
  const user = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  if (user?.loading) return <div>loading</div>
  if (user?.error) return <div>{user.error}</div>

  return (
    <ul>
      {user?.users.map((specificUser) => (
        <l1 key={specificUser.key}>{specificUser.name}</l1>
      ))}
    </ul>
  )
}

export default UserView