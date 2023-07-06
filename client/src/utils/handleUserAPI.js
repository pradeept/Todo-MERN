import axios from 'axios';



const regUser = async (data)=>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`,{"userData":data})
            .then((response)=>{
                if(response.data.status === "ok"){
                    return true
                }else{
                    return "User already exists"
                }
            })
            .catch((e)=>{return "Something went wrong"})
}


const loginUser = (data)=>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{"userData":data})
        .then(async (response)=>{
            if(response.data.status === "ok"){
                const token = response.data.token;
                await localStorage.setItem("token",token);
                return true
            }else{
                return "Username/Password is Wrong"
            }   
        })
        .catch((e)=>{return "Something went wrong"})
}

export {regUser,loginUser}

