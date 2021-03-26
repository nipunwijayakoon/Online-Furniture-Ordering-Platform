import axios from 'axios';

export const payment = async (
    
    CardName,
    CardNo,
    ExpMonth,
    ExpYear,
    Cvv,
    BillDate,
    Email,
    TotalPrice,
    ) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };



    const body = JSON.stringify({ 
        CardName,
        CardNo,
       ExpMonth,
        ExpYear,
        Cvv,
        BillDate,
        Email,
        TotalPrice });
    
        console.log("Cus", body)

    try {
        const res = await axios.post("https://localhost:5001/api/BillingInfo", body, config);
        console.log(res);

        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors)
            console.log(errors);
        
    }
};



