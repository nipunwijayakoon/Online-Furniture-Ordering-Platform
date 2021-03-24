import React, { useState, useEffect } from 'react'
import './ProductForm.css';  

const defaultsrc = ''

const initialFieldValues = {
    itemID: 0,
    title: '',  
    count: '',  
    description:null,
    content:'',
    price: '',
    imageName: '',
    src: defaultsrc,
    imageFile: null
}

export default function Product(props) {

    const { addOrEdit, recordForEdit } = props
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, 
    [recordForEdit])

const handleInputChange = e => {
    const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    src: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                src: defaultsrc
            })
        }
    }

const validate = () => {
        let temp = {}
        temp.title = values.title === "" ? false : true;
        temp.src = values.src === defaultsrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
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
            formData.append('itemID', values.itemID)
            formData.append('title', values.title)
            formData.append('count', values.count)
            formData.append('description', values.description)
            formData.append('content', values.content)
            formData.append('price', values.price)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <>
            
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="productcard">
                    <img src={values.src} className="card-img-top" alt ="product" />
                    <div className="card-body">

                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('src')}
                                onChange={showPreview} id="image-uploader" />
                        </div>

                        <div className="form-group">
                        <label>Product Name:</label>
                            <input className={"form-control" + applyErrorClass('title')} placeholder="Product Name" name="title"
                                value={values.title}
                                onChange={handleInputChange} />
                        </div>
                     
                        <div className="form-group">
                        <label>Description</label>
                            <input className="form-control" placeholder="Product Description" name="description"
                                value={values.description}
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                        <label>Content</label>
                            <input className="form-control" placeholder="Product Content" name="content"
                                value={values.content}
                                onChange={handleInputChange} /> 
                        </div>

                        <div className="form-group">
                        <label>Quantity</label>
                            <input className="form-control" placeholder="Quantity" name="count"
                                value={values.count}
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                        <label>Price</label>
                            <input className="form-control" placeholder="Unit Price" name="price"
                                value={values.price}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="form-group text-center">
                            <button type="submit" onSubmit={e => handleFormSubmit(e)} >Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}