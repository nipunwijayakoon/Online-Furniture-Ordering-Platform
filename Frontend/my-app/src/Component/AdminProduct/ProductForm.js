import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Table,Button } from 'react-bootstrap';
import './ProductForm.css';
import Container from '@material-ui/core/Container';

const defaultImageSrc_ = '/images/image_default_icon.jpg'

const initialFieldValues = {
    ProductID: 0,
    ProductName:'',
    branch:'',
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
        temp.branch = values.branch == "" ? false : true;
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
            formData.append('branch', values.branch)
            formData.append('Description', values.Description)
            formData.append('Content', values.Content)
            formData.append('Price', values.Price)
            formData.append('Imagename', values.ImageName)
            formData.append('ImageFile', values.ImageFile)
            formData.append('Count', values.Count)
            addOrEdit(formData, resetForm)
            //addOrEdit(formData)
           
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        
        <div className="newpage" style={{ backgroundSize: "cover"}}>
		
                <div>
                    <br/>
                    <br/>
               
                            <h2 className="newheading">Add Furniture Product Here...</h2>

            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="newformcard">
                    <img src={values.ImageSrc} className="newcard-img-top" />
                    <div className="newcard-body">
                        
                        <div className="newform-imggroup">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        
                        <div className="newform-group">
                            <input className={"form-control" + applyErrorClass('ProductName')} placeholder="Product Name" name="ProductName"
                                value={values.ProductName}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <input className={"form-control" + applyErrorClass('branch')} placeholder="Branch" name="branch"
                                value={values.branch}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <textarea type="" className="form-control" placeholder="Add a small Description about the furniture." name="Description"
                                value={values.Description}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <textarea className="form-control" placeholder="Detailed Content of the furniture" name="Content"
                                value={values.Content}
                                onChange={handleInputChange} />
                        </div>

                        <div className="newform-group">
                            <input className="form-control" placeholder="Price (Rs.)" name="Price"
                                value={values.Price}
                                onChange={handleInputChange} />
                        </div>
                       
                        <div className="">
                            <button type="newsubmit" className="newbtn btn-light">UPLOAD NEW PRODUCT</button>
                        </div>

                     
                    </div>
                </div>
            </form>
            <br/>
            <Container>
                  <Link to='/ManageProduct'>
                       <Button style={{Size: '20px', minWidth: '200px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center', marginLeft:'60px'}}> Go To Product Details</Button>
                   </Link>
                  
                   </Container>
        </div>

        </div>

      
    )
}