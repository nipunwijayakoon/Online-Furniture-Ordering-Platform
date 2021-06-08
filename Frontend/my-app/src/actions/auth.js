import axios from 'axios';
//import { Date } from 'core-js';


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
export const register =  (CustomerEmail,
    CustomerFirstName,
    CustomerlastName,
    CustomerTellnumber,
    CustomerPW,
    RetypeCustomerPW,
    ) =>async(dispatch)=> {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    

    const CustomerTown  = Date().toLocaleLowerCase();
    const RetypeCustomerPW = CustomerPW;

    const body = JSON.stringify({ CustomerEmail,
        CustomerFirstName,
        CustomerlastName,
        CustomerTown,
        CustomerTellnumber,
        CustomerPW,
        RetypeCustomerPW });
    
        

    try {
        const res = await axios.post("https://localhost:5001/api/Userlogin/signup/customer", body, config);
        console.log("Success");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

        
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);
        dispatch(setAlert("Something is wrong at your end", "danger"));
        dispatch({
          type: REGISTER_FAIL,
        });
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

    export const empregistor = async(AdminFistName,
        AdminLastName,
        AdminPW,
        RetypeAdminPW,
        AdEmail,
    )=>{
        const config = {
            headers:{ "Content-Type": "application/json"}
        };
    

    const body = JSON.stringify({AdminFistName,
        AdminLastName,
        AdminPW,
        RetypeAdminPW,
        AdEmail});

        console.log("Emp", body)

    try{
        const res = await axios.post("https://localhost:5001/api/Admins", body, config);
        console.log(res);


    }catch (error){
        const errors = error.response.data.errors;

        if (errors)
        console.log(errors);

    }


};




    /////Registor SEller

    export const selleregistor = (SellerEmail,
        SellerFirstName,
        SellerLastName,
        Area,
        Name,
        TelNumber,
        SellerPW,
        RetypeSellerPW,
        
        
        
    )=>async(dispatch)=> {
        const config ={
         
            headers:{ "Content-Type": "application/json"}
        };
    
       

    const body = JSON.stringify({SellerEmail,
        SellerFirstName,
        SellerLastName,
        Area,
        Name,
        TelNumber,
        SellerPW,
        RetypeSellerPW,
        
    
    });

        

    try{
        const res = await axios.post("https://localhost:5001/api/Userlogin/signup/seller", body, config);
        console.log(res);

        console.log("Success");
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
    
            
        } catch (error) {
            const errors = error.response.data.errors;
            console.log(errors);
            dispatch(setAlert("Something is wrong at your end", "danger"));
            dispatch({
              type: REGISTER_FAIL,
            });
        }
};





export const loadUser = () => async (dispatch) => {
    if (localStorage.token) { 
      const user = JSON.parse(atob(localStorage.token.split(".")[1])); 
      if (user.role === "Admin") {
        try {
          const res = await axios.get(
            `https://localhost:5001/api/admins/${user.id}`
          );
          dispatch({
            type: USER_LOADED,
            payload: res.data,
          });
        } catch (error) {
          console.error(error);
          dispatch({ type: AUTH_ERROR });
        }
      }




      else if (user.role === "Seller") {
        try {
          const res = await axios.get(
            `https://localhost:5001/api/Seller/${user.id}`
          );
          dispatch({
            type: USER_LOADED,
            payload: res.data,
          });
        } catch (error) {
          console.error(error);
          dispatch({ type: AUTH_ERROR });
        }
      }
    }




    else {
      dispatch({ type: AUTH_ERROR })
    }


  };
  
















export const logout = () => (dispatch) => {
    dispatch({ type: CLEAR_PRODUCTS });
    dispatch({ type: CLEAR_SELLER });
    dispatch({ type: CLEAR_SELLERS });
    dispatch({ type: LOGOUT });
  };



