import React from 'react'

const SurveyTemplateOne = () => {

    const surveyStyles = require('../styles/Surveys.module.css');
    return (
        <div>
            <form name="Form 1" action={'/surveys/1'}className={surveyStyles.tab1Container}>
                            
                            <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">State</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                            </div>



                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Rent
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Own
                                </label>
                            </div>
                            <div className= {surveyStyles.selectSurveyContainer}>
                            <button type="submit" className={surveyStyles.surveySelectBtn}>Select Template<i className="bi bi-arrow-right-circle-fill"></i></button>
                            </div>
                        </form>
        </div>
    )
}

export default SurveyTemplateOne
