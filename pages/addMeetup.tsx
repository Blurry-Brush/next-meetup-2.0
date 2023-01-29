import React from 'react'
import {useSession} from 'next-auth/react'
import Form from '../components/Form'
import Header from '../components/Header'
import Headertest from '../components/Headertest'

function addMeetup() {
const {data : session} = useSession()


  if(session){

    return (
      <div> 
        <Form /> 
      </div>
    )
  }
  else{
    return (
      <div>
        <Headertest />
        <h1 className="text-center pt-4 text-2xl bg-indigo-50 ">You need to be signed in to add a meetup</h1>
      </div>
    )
  }

}

export default addMeetup