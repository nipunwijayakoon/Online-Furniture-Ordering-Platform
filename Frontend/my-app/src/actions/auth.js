import axios from 'axios';


import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_PRODUCTS,
    CLEAR_SELLER,
    CLEAR_SELLERS
  } from "./types";
  import { setAlert } from "./alert";

// Register user
export const register = async (CustomerEmail,
    CustomerFirstName,
    CustomerlastName,
    CustomerTellnumber,
    CustomerPW,
    ) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    


    const RetypeCustomerPW = CustomerPW;

    const body = JSON.stringify({ CustomerEmail,
        CustomerFirstName,
        CustomerlastName,
        CustomerTellnumber,
        CustomerPW,
        RetypeCustomerPW });
    
        console.log("Cus", body)

    try {
        const res = await axios.post("https://localhost:5001/api/Customers", body, config);
        console.log(res);

        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors)
            console.log(errors);
        
    }
};



export const login =  ( Email,

Password ) => async(dispatch)=>{
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    const body = JSON.stringify({ Email,

        Password


     });

    try {
        const res = await axios.post("https://localhost:5001/api/Userlogin/login", body, config);
        console.log(res);

        dispatch(setAlert("Login Successfull", "success"));
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data,
        })

        
    } catch (error) {
        
        dispatch(setAlert("Invalid email or password", "danger"));
    dispatch({
      type: LOGIN_FAILED,
    });


    }



};



    /////Registor Employee

    export const empregistor = async(employeeEmail,
        employeeFirstName,
        employeeLastName,
        employeeTown,
        employeeTellnumber,
    )=>{
        const config = {
            headers:{ "Content-Type": "application/json"}
        };
    

    const body = JSON.stringify({employeeEmail,
        employeeFirstName,
        employeeLastName,
        employeeTown,
        employeeTellnumber});

        console.log("Emp", body)

    try{
        const res = await axios.post("https://localhost:5001/api/Employees", body, config);
        console.log(res);


    }catch (error){
        const errors = error.response.data.errors;

        if (errors)
        console.log(errors);

    }


};




    /////Registor SEller

    export const selleregistor = async(SellerEmail,
        SellerFirstName,
        SellerLastName,
        Area,
        Name,
        TelNumber,
        SellerPW,
        
        
    )=>{
        const config = {
            headers:{ "Content-Type": "application/json"}
        };
    
        const RetypeSellerPW = SellerPW;

    const body = JSON.stringify({SellerEmail,
        SellerFirstName,
        SellerLastName,
        Area,
        Name,
        TelNumber,
        SellerPW,
        RetypeSellerPW
    
    });

        console.log("Sell", body)

    try{
        const res = await axios.post("https://localhost:5001/api/Shoplists", body, config);
        console.log(res);


    }catch (error){
        const errors = error.response.data.errors;

        if (errors)
        console.log(errors);

    }


};
