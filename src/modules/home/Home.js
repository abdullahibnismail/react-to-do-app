import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../store/actions/AuthActions'
import Tasks from '../toDo/Tasks'

export default function Home() {
    const dispatch = useDispatch()

    const doUserLogout = ( ) => {
        dispatch(doLogout())
    }
    return (
        <div>
            
            <Tasks />
            <button style={{color:'blue'}} onClick={doUserLogout}>LogOut</button>
        </div>
    )
}