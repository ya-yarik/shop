import React from 'react'
import AllPersons from './AllPersons'
import axios from 'axios';

const SetPersons = (props) => {



  return (
    <div className='container py-3'>

    {
      props.item.map(obj=>{
        return(
           <AllPersons
           key={obj.id}
           id={obj.id}
           myId={obj.myId}
           title={obj.title}
           description={obj.description}
           price={obj.price}
           img={obj.img}

           />
        )
      })
    }
  </div>
  )
}

export default SetPersons