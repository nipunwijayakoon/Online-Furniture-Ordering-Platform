import axios from 'axios';

// Register user
export const ordersubmit = async (woodName, woodColour, branchName, location, personName, personAddress, personEmail, timeDuration, contactDetails, newDesignCode
    ) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    


    //const RetypeCustomerPW = CustomerPW;

    const body = JSON.stringify({ woodName, woodColour, branchName, location, personName, personAddress, personEmail, timeDuration, contactDetails, newDesignCode
       // RetypeCustomerPW 
    });
    
        console.log("Cuss", body)

    try {
        const res = await axios.post("https://localhost:5001/api/NewDesigns", body, config);
        console.log(res);

        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors)
            console.log(errors);
        
    }
};
