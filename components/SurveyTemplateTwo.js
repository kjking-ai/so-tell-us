import React from 'react'

const SurveyTemplateOne = () => {

    const surveyStyles = require('../styles/Surveys.module.css');
    return (
        <div>
            <form name="Form 2" action={'/surveys/2'} className={surveyStyles.tab1Container}>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">How many days a week do you go to the gym?</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Select one..</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Describe a typical workout session..</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className={surveyStyles.selectSurveyContainer}>
                    <button type="submit" className={surveyStyles.surveySelectBtn}>Select Template</button>
                </div>
            </form>
        </div>
    )
}

export default SurveyTemplateOne
