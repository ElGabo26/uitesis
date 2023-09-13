import {ENV} from '../utils'

export class Auth{
    baseapi= ENV.BASE_API;
    async registerDoctor(data){
        try {
            delete data.privacityConditions
            delete data.repeatPassword
            const url=`${this.baseapi}/${ENV.API_ROUTES.USER}`
            const params={
                method: 'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }
            

            const response= await fetch(url,params)
            const result= await response.json()
            if(response.status !==200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    async login(data){

        try {
            const url=`${this.baseapi}/${ENV.API_ROUTES.LOGIN}`
            const params={
                method: 'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }

            const response= await fetch(url,params)
            const result= await response.json()
            
            if(response.status !==200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    async refreshAccessToken(refreshToken){
        try {
            const url= `${this.baseapi}/${ENV.API_ROUTES.REFRESH_ACCESS_TOKEN}`
            const params ={
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    token:refreshToken
                })
            }

            const response = await fetch(url, params)
            const result = await response.json()
            if(response.status !==200) throw result

            return result
            
        } catch (error) {
            throw error
        }
    }

    setRefreshToken(refreshToken){
        localStorage.setItem(ENV.JWT.REFRESH,refreshToken)
    }

    getRefreshToken(){
        return localStorage.getItem(ENV.JWT.REFRESH)
    }

    setAccessToken(accessToken){
        localStorage.setItem(ENV.JWT.ACCESS,accessToken)
    }

    getAccessToken(){
        return localStorage.getItem(ENV.JWT.ACCESS)
    }

    removeTokens(){
        localStorage.removeItem(ENV.JWT.ACCESS)
        localStorage.removeItem(ENV.JWT.REFRESH)
    }

}