import React, {useState} from 'react'
import { useRouter } from 'next/router'


const Id = () => {
    const Router = useRouter();
    const surveyId = Router.query.id;
    console.log('ID: ', surveyId);
    return (
        <div>
            Form {surveyId}
        </div>
    )
}

export default Id
