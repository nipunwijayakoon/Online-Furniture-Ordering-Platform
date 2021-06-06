import React, { useState, useEffect } from 'react'
import UploadDesignImage from './UploadDesignImage'
import axios from "axios";


export default function UploadDesignImageList(props) {
    const [uploadDesignImageList, setUploadDesignImageList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    const {nextStep} = props;
    

    useEffect(() => {
        refreshUploadDesignImageList();
    }, [])

    const uploadDesignImageAPI = (url = 'https://localhost:5001/api/Emplo') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshUploadDesignImageList() {
        uploadDesignImageAPI().fetchAll()
            .then(res => {
                setUploadDesignImageList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('EmploID') == "0")
            uploadDesignImageAPI().create(formData)
                .then(res => {
                   // onSuccess();
                    refreshUploadDesignImageList();
                })
                .catch(err => console.log(err))
        else
            uploadDesignImageAPI().update(formData.get('EmploID'), formData)
                .then(res => {
                   // onSuccess();
                    refreshUploadDesignImageList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            uploadDesignImageAPI().delete(id)
                .then(res => refreshUploadDesignImageList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.ImageSrc_} className="card-img-top rounded-circle" />
            <div className="card-body">
                
                <span>{data.NewDesignCode}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.EmploID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            
            <div className="col-md-4">
                <UploadDesignImage
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                    nextStep={nextStep}
                />
            </div>
           
        </div>
    )
}