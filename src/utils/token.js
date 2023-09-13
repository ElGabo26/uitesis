import  jwtDecode from 'jwt-decode'

export const hasExpiredToken=(token)=>{
    const {exp} = jwtDecode(token)
    const currentDate= new Date().getTime()
    if(exp<=currentDate){
        return true
    }else{
        return false
    }
}