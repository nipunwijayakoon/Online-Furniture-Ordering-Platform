import React, { useState, useEffect } from 'react'
//import UploadDesignImage from './UploadDesignImage'
import axios from "axios";
import Product from './ProductForm';
import './ProductList.css'
import {Link} from 'react-router-dom'
import { Table, Button} from 'react-bootstrap';  

export default function ProductList(props) {
    const [productList, setProductList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

   
    

    useEffect(() => {
        refreshProductList();
    }, [])

    const productAPI = (url = 'https://localhost:5001/api/Product/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
         
        }
    }

  

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('ProductID') == "0")
            productAPI().create(formData)
                .then(res => {
                   onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))
        else
            productAPI().update(formData.get('ProductID'), formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err))
    }

    const newimageCard = data => (
       
        <div className="newcardpro" onClick={() => { showRecordDetails(data) }}>
            
            <img src={data.imageSrc}  />
            <div className="newcardpro-body">
            <div  >
                <b>{data.productName}</b><br/><br/>
                {/* <b>{data.branch}</b><br/><br/> */}
                <span>{data.description}</span> <br />
                <h3>LKR{data.price}</h3> <br />
                <button>ADD CART</button>
                <div className="delete-button" >
                <button  onClick={e => onDelete(e, parseInt(data.productID))}>
                    DELETE
                </button>
                </div>
            </div>
            </div>
        </div>
    )


    return (
        <div className="row">
               
                    <Link to='/ManageProduct'><Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}>PRODUCT DETAILS</Button></Link>
                    <span>---------------------</span>
                   <Link to='/CustomerDetails'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> CUSTOMER ORDER DETAILS</Button>
                   </Link>
                   <span>---------------------</span>
            <Link to='/customerorderdetail'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> ORDERED PRODUCT DETAILS</Button>
                   </Link>

              
            <div className="col-md-4">
                <Product
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                    
                />
            </div>
            <br/>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(productList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{newimageCard(productList[3 * i])}</td>
                                   
                                    <td>{productList[3 * i + 1] ? newimageCard(productList[3 * i + 1]) : null}</td>
                                    <td>{productList[3 * i + 2] ? newimageCard(productList[3 * i + 2]) : null}</td>
                                    
                                   </tr>)
                        }
                    </tbody>
                </table>
                    </div>
        </div>
    )
}