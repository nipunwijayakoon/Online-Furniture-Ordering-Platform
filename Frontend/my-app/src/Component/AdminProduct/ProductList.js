import React, { useState, useEffect } from 'react'
import Product from './ProductForm'
import axios from "axios";
import './ManageProduct.css';  
import './ProductForm.css';

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

useEffect(() => {
        refreshProductList();
    },
    {})

const productAPI = (url = 'https://localhost:5001/api/Items') => {
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
        if (formData.get('itemID') === "0")
        productAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))
        else
        productAPI().update(formData.get('itemID'), formData)
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
        if (window.confirm('Are you sure to delete this product?'))
        productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err))
    }

const imageCard = data => (
        <div className="productminicard" style={{ backgroundColor: 'white'  }} onClick={() => { showRecordDetails(data) }}>
            <img src={`https://localhost:5001/${data.src}`} style={{  margin: '0px 30px' }} className="productcard-img-top thumbnail" alt ="Add_produt_image" />
            <div  >
                <b><h6>{data.title}</h6></b>
                <span>{data.description}</span> <br />
                <span>LKR{data.price}</span> <br />
                {/* <span>Weight(kg/l) - {data.unitWeight}</span> <br /> */}
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.itemID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            
            <div >
                <Product
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>

            <div >
                <table>
                    <tbody>
                        {
                           
                            [...Array(Math.ceil(productList.length / 6))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(productList[5 * i])}</td>
                                    <td></td>
                                    <td>{productList[6 * i + 1] ? imageCard(productList[6 * i + 1]) : null}</td>
                                    <td>{productList[6 * i + 2] ? imageCard(productList[6 * i + 2]) : null}</td>
                                    <td>{productList[6 * i + 3] ? imageCard(productList[6 * i + 3]) : null}</td>
                                    <td>{productList[6 * i + 4] ? imageCard(productList[6 * i + 4]) : null}</td>
                                    <td>{productList[6 * i + 5] ? imageCard(productList[6 * i + 5]) : null}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

