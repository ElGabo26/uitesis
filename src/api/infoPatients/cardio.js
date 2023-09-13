import { ENV } from "../../utils";

export class Cardio{
    baseApi=ENV.BASE_API
    async createCardio(data,accessToken,patient_id){
        try {
            const url=`${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.CREATE}/${patient_id}`
            const params={
                method:"POST",
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }

            const response= await fetch(url, params)
            const result= await response.json()
            if(response.status !==200) throw result

            return result
        } catch (error) {
            throw error
        }
    }

    async updateCardio(data, accessToken, patient_id){
        try {
            const url=`${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.CREATE}/${patient_id}`
            const params={
                method:"PATCH",
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            }
            const response= await fetch(url, params)
            const result= await response.json()
            if(response.status !==200) throw result


        } catch (error) {
            throw error
        }
    }

    async getCardios(accessToken,field=null,value=null,page){

        try {
            
            const url= field?`${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.GET}?field=${field}&value=${value}&page=${page}`:`${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.GET}?page=${page}`;
                        
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

    async getCardio(accessToken,file_id){
        try {
            const url= `${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.GETONE}/${file_id}`
            const params={
                method:'GET',
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }

            const response= await fetch(url,params)
            const result= await response.json()
            if(response.status !==200) throw result

            return result
        } catch (error) {
            
        }
    }

    async deleteCardio(accessToken, file_id){
        try {
            const url= `${this.baseApi}/${ENV.API_ROUTES.INF_PATIENTS.CARDIO.DELETE}/${file_id}`
            const params={
                method:'DELETE',
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }

            const response= await fetch(url,params)
            const result= await response.json()
            if(response.status !==200) throw result

            return result
        } catch (error) {
            throw error
        }
    }
}