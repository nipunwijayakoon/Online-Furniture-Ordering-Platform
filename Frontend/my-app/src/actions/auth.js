import axios from 'axios';

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
