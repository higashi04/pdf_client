const API_url = "http://localhost:8080/usuario/iniciar";
//login process
const login = async(userData) => {
    const response = await fetch(API_url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    const json = await response.json();
    if(json) {
        localStorage.setItem("user", JSON.stringify(json));
    }
    return json;
};

const logout = () => { localStorage.removeItem("user"); };
const authService = {
    logout,
    login
};

export default authService;