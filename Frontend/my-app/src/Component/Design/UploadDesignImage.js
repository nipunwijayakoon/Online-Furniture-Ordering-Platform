import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './UploadNewDesign.css';

const defaultImageSrc_ = '/images/icon_image1.png'

const initialFieldValues = {
    EmploID: 0,
    NewDesignCode: '',
    ImageName_: '',
    ImageSrc_: defaultImageSrc_,
    ImageFile_: null
}

export default function UploadDesignImage(props) {

    const { addOrEdit, recordForEdit, nextStep } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    

    const [minVal, setMinVal] = useState(10000);
    const [maxVal, setMaxVal] = useState(9999990);
    const [randomNum, setRandomNum] = useState(
        
        Math.floor(Math.random() * (maxVal-minVal+1) + minVal)
        );
        
        const handleRandomNum = () => {

            setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        };



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
            let ImageFile_ = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    ImageFile_,
                    ImageSrc_: x.target.result
                })
            }
            reader.readAsDataURL(ImageFile_)
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
        temp.ImageSrc_ = values.ImageSrc_ == defaultImageSrc_ ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('EmploID', values.EmploID)
            //formData.append('EmploName', values.EmploName)
            formData.append('NewDesignCode', values.NewDesignCode)
            formData.append('ImageName_', values.ImageName_)
            formData.append('ImageFile_', values.ImageFile_)
            //addOrEdit(formData, resetForm)
            addOrEdit(formData)
            nextStep()
        }
    }


    
    

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        
        <div className="page" style={{ backgroundImage: "url('https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
				
  
                <div className="container2">
                <Container maxWidth="sm">
                    
                    <Typography variant="h6" align="center" color="error"  paragraph>
                      Please make sure enough to upload your new design with all the measurements it has. We are very pleased if your picture is drawn in 3D view for the convenience of understanding of the receiver... 
                    </Typography>
        
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                      We have provide a sample sketching here for your better awareness... 
                    </Typography>
        
                    <img src="/images/ExampleDesign.jpg"  width="320" height="320" alt=""/>

                 
        
                </Container>
                </div>
        
        
        
        
                <div className="container_newdesign">
                  
                            <h1 className="headimg">Add Your New Furniture Design Here...</h1>


            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="imgcard">
                    <img src={values.ImageSrc_} className="card-img-top" />
                    <div className="card-body">
                        
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc01')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                      
                     
            
                <div>
                    <p><Typography component="h8" variant="h6" color="textPrimary" gutterBottom>
                    Your New Design Code: <span>{randomNum}</span>
                    </Typography></p>
                </div>
            

            
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter the code here..." name="NewDesignCode"
                                value={values.NewDesignCode}
                                onChange={handleInputChange} />
                        </div>

                        <div className="copy_code_text">
                        <p><Typography component="h9" variant="h10" gutterBottom>
                        *Please make sure to copy this code to enter in the next page...
                        </Typography></p>
                        </div>

                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit Image & Continue</button>
                        </div>
                    </div>
                </div>
            </form>
        

        
            

        </div>

        </div>

            


      
      
    )
}