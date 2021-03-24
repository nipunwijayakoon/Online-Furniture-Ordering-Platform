import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import './ProductForm.css';

const defaultImageSrc_ = '/images/image_default_icon.jpg'

const initialFieldValues = {
    ProductID: 0,
    ProductName:'',
    ImageSrc:defaultImageSrc_,
    Description:'',
    Content:'',
    Price:'',
    Count:1,
    ImageName:'',
    ImageFile:null
    }

export default function ProductForm(props) {

    const { addOrEdit, recordForEdit} = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    

    
        
       




    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])




    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let ImageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    ImageFile,
                    ImageSrc: x.target.result,
                   
                })
            }
            reader.readAsDataURL(ImageFile)
        }
        else {
            setValues({
                ...values,
                ImageFile: null,
                ImageSrc: defaultImageSrc_
            })
        }
    }

    const validate = () => {
        let temp = {}
        //temp.EmploName = values.EmploName == "" ? false : true;
        temp.ImageSrc = values.ImageSrc == defaultImageSrc_ ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('ProductID', values.ProductID)
            formData.append('ProductName', values.ProductName)
            formData.append('Description', values.Description)
            formData.append('Content', values.Content)
            formData.append('Price', values.Price)
            formData.append('Imagename', values.ImageName)
            formData.append('ImageFile', values.ImageFile)
            addOrEdit(formData, resetForm)
            //addOrEdit(formData)
           
        }
    }


    
    

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        
        <div className="newpage" style={{ backgroundSize: "cover"}}>
				
      
        
        
        
                <div>
                  
                            <h1 className="newheading">Add Furniture Product Here...</h1>


            



            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="newformcard">
                    <img src={values.ImageSrc} className="newcard-img-top" />
                    <div className="newcard-body">
                        
                        <div className="newform-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        
                        <div className="newform-group">
                            <input className={"form-control" + applyErrorClass('ProductName')} placeholder="Product Name" name="ProductName"
                                value={values.ProductName}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <textarea type="" className="form-control" placeholder="Description" name="Description"
                                value={values.Description}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <textarea className="form-control" placeholder="Content" name="Content"
                                value={values.Content}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <input className="form-control" placeholder="Price" name="Price"
                                value={values.Price}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="newform-group">
                            <input className="form-control" placeholder="ImageSrc" name="ImageSrc"
                                value={values.ImageSrc}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="newform-group">
                            <input className="form-control" placeholder="Count" name="Count"
                                value={values.Count}
                                onChange={handleInputChange} />
                        </div>


                       

                        
                        <div className="">
                            <button type="newsubmit" className="newbtn btn-light">UPLOAD NEW PRODUCT</button>
                        </div>
                    </div>
                </div>
            </form>
        

        
            

        </div>

        </div>

            


      
      
    )
}