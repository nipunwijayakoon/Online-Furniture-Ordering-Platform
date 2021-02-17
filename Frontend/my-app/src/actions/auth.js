import axios from 'axios';

// Register user
export const register = async (CustomerEmail,
    CustomerFirstName,
    CustomerTellnumber,
    CustomerPW,
    ) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    


    const RetypeCustomerPW = CustomerPW;

    const body = JSON.stringify({ CustomerEmail,
        CustomerFirstName,
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



export const login = async ( Email,

Password ) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    const body = JSON.stringify({ Email,

        Password


     });

    try {
        const res = await axios.post("https://localhost:5001/api/Userlogin/login", body, config);
        console.log(res);

        
    } catch (error) {
        
        const errors = error.response.data.errors;

        if (errors)
            console.log(errors);
        
        
    }
};