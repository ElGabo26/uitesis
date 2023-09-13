import { ENV } from "../utils";

export class Patient{
    baseApi= ENV.BASE_API
   async createPatient(accessToken, data){

        try {
            const url= `${this.baseApi}/${ENV.API_ROUTES.PATIENT.CREATE}`
            const params={
                method:"POST",
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            }

            const response= await fetch(url, params)
            const result= await response.json()

            if(response.status !==200) throw result

            return result

        } catch (error) {
            
            throw error
        }

    }

    async updatePatient(accessToken, data,id){
        try {
            const url= `${this.baseApi}/${ENV.API_ROUTES.PATIENT.UPDATE}/${id}`
            const params={
                method:"PATCH",
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            }

            const response= await fetch(url, params)
            const result= await response.json()

            if(response.status !==200) throw result

            return result

        } catch (error) {
            
            throw error
        }

    }

    async getPatients(accessToken,field=null,value=null){

        try {
            
            const url= field?`${this.baseApi}/${ENV.API_ROUTES.PATIENT.GET}?field=${field}&value=${value}`:`${this.baseApi}/${ENV.API_ROUTES.PATIENT.GET}`;
                        
            const params={
                method:"GET",
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }

            const response= await fetch(url, params)
            const result = await response.json()

            if(response.status !== 200) throw result
            
            return result
                    
        } catch (error) {
            throw error
        }

    }

    async getPatient(accessToken, id){
        try {
             const url= `${this.baseApi}/${ENV.API_ROUTES.PATIENT.GETONE}/${id}`
             const params={
                method:"GET",
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
             }

             const response= await fetch(url, params)
            const result = await response.json()

            if(response.status !== 200) throw result
            
            return result

        } catch (error) {
            throw error
            
        }
    }

    async deletePatient(accessToken, id){
        try {
           const url=`${this.baseApi}/${ENV.API_ROUTES.PATIENT.DELETE}/${id}`
           const params={
            method:'DELETE',
            headers:{
                Authorization:`Bearer ${accessToken}`
            }

           } 
           const response= await fetch(url, params)
            const result = await response.json()

            if(response.status !== 200) throw result
            
            return result

        } catch (error) {
            throw error
        }

    }

}