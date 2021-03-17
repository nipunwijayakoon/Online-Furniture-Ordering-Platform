import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../Design/UploadNewDesign.css';

const defaultImageSrc01 = '/images/img-6.jpg'

const initialFieldValues = {
    EmploID: 0,
    //EmploName: '',
    Occupation01: '',
    ImageName01: '',
    ImageSrc01: defaultImageSrc01,
    ImageFile01: null
}

export default function Employee(props) {

    const { addOrEdit, recordForEdit } = props

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
            let ImageFile01 = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    ImageFile01,
                    ImageSrc01: x.target.result
                })
            }
            reader.readAsDataURL(ImageFile01)
        }
        else {
            setValues({
                ...values,
                ImageFile: null,
                ImageSrc: defaultImageSrc01
            })
        }
    }

    const validate = () => {
        let temp = {}
        //temp.EmploName = values.EmploName == "" ? false : true;
        temp.ImageSrc01 = values.ImageSrc01 == defaultImageSrc01 ? false : true;
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
            formData.append('EmploID', values.EmploID)
            //formData.append('EmploName', values.EmploName)
            formData.append('Occupation01', values.Occupation01)
            formData.append('ImageName01', values.ImageName01)
            formData.append('ImageFile01', values.ImageFile01)
            addOrEdit(formData, resetForm)
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
        
                    <img src="/images/ExampleDesign.jpg"  width="320" height="370" alt=""/>
        
                </Container>
                </div>
        
        
        
        
                <div className="container">
                  
                            <h1 className="heading">Add Your New Furniture Design Here...</h1>


            



            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="imgcard">
                    <img src={values.ImageSrc01} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc01')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        {/*<div className="form-group">
                            <input className={"form-control" + applyErrorClass('EmploName')} placeholder="Emplo Name" name="EmploName"
                                value={values.EmploName}
                                onChange={handleInputChange} />
                        </div>*/}



                        <div>
            
                <div>
                    <p>
                    Your New Design Code: <span>{randomNum}</span>
                    </p>
                </div>
            


            {/*<button onClick={handleRandomNum}>Get Another Code</button>*/}
            </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Occupation01" name="Occupation01"
                                value={values.Occupation01}
                                onChange={handleInputChange} />
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