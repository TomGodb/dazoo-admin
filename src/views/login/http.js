import http from "@u/request"
export  function sendCaptcha(obj){
   
    var result = http.post("/v1/auth/sendCaptcha",obj)
    return result;
}
export  function PasswordLogin(obj){
   
    var result = http.post("/v1/auth/login",obj)
    return result;
}
