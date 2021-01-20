import axios from 'axios';

// Register user
export const register = async ({ firstName,
lastName,
email,
password }) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    const body = JSON.stringify({ firstName,
        lastName,
        email,
        password });

    try {
        const res = await axios.post("/api/signupcontroller/signup", body, config);
        console.log(res);

        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors)
            console.log(errors);
        
    }
};