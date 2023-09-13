import * as Yup from 'yup'
export function initialValues(){
    return{
        email:"",
        password:""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email("mail no valido").required(true),
        password:Yup.string().required(true)
    })
}

