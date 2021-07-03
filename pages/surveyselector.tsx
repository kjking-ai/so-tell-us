import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import SurveyTemplateOne from '../components/SurveyTemplateOne'
import SurveyTemplateTwo from '../components/SurveyTemplateTwo'


export const SurveySelector = () => {

    const surveyStyles = require('../styles/Surveys.module.css');
    const [active, setActive] = useState(0);

    return (
        <>
            <Head>
                <title>surveys</title>
            </Head>
            {/* Side Bar with Form Elements */}

            {/* Tab Container */}
            <div className={surveyStyles.container}>
                <button className={surveyStyles.btn} onClick={() => setActive(0)}>Survey 1</button>
                <button className={surveyStyles.btn} onClick={() => setActive(1)}>Survey 2</button>
                <button className={surveyStyles.btn}><Link href='/create/survey'>New</Link></button>
            </div>
                <div>
                    {/* CREATE FILE FOR EACH FORM*/}
                    {active === 0 && (
                        
                        <div>
                            <SurveyTemplateOne />
                        </div>
                        
                    )}
                    {active === 1 && (

                        <div>
                            <SurveyTemplateTwo />
                        </div>
                    )}
                </div>
            


        </>
    );
};


export default SurveySelector
