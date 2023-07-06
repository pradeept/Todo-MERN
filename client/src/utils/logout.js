
const logout = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        localStorage.removeItem("token");
        localStorage.clear();
    }
    return;
}

export default logout;