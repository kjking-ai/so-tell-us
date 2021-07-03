import React, {useState} from 'react'
import { useRouter } from 'next/router'


const id = () => {
   
    const router = useRouter();
    const surveyId = router.query.id;
    console.log('ID: ', surveyId);
    return (
        <div>
            Form {surveyId}
        </div>
    )
}

export default id
