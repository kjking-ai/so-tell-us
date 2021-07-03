import React from 'react'
import { useState } from 'react';
import surveyStyles from '../../styles/Survey.module.css'

const survey = () => {



    // Script Area
    const [formList, setFormList] = useState<any>([]);

    const handleSelectedValue = (e) => {
        e.preventDefault();
        const id = e.target.formName.value;
        const type = e.target.inputGroupSelectForm.value;
        const newFormList = [...formList, { id: id, formType: type }];
        setFormList(newFormList);
        
    }
    const deleteByKey = (value:string) => {
        setFormList(formList.filter(i => i !== value));
    }
    return (

        // List of Form elements
        // Add form element
        // delete form element
        // edit?
        

        <div>
            <form onSubmit={(e) => handleSelectedValue(e)}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Form Field</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelectForm">
                        <option defaultValue={'Test'}>Choose...</option>
                        <option value="Input">Input</option>
                        <option value="Dropdown">Dropdown</option>
                        <option value="Checkbox">Checkbox</option>
                    </select>
                </div>
                <label htmlFor="inputAddress">Title</label>
                <input type="text" className="form-control" id="formName" placeholder="" />
                <button className={surveyStyles.Btn} type="submit">Add to Form</button>
            </form>
            <div>
                {formList.length > 0 && formList.map((item: any) => (
                    <div key={item.id}>
                        <label htmlFor="inputAddress">{item.id}</label>
                        <input type="text" className="form-control" placeholder="" />
                        <button className={surveyStyles.Btn} type='button' onClick={() => deleteByKey(item)}>Delete</button>
                    </div>
                   
                ))}
            </div>
        </div>
    )
}



export default survey
