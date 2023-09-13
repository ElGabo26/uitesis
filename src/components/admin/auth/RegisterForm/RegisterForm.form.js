import * as Yup from 'yup'

export function initialValues(){
    return {
        firstName:"",
        lastName:"",
        email:"",
        medID:"",
        password:"",
        repeatPassword:"",
        privacityConditions: false
    }
}

export function validationSchema (){
    return Yup.object({
        firstName:Yup.string().required(true),
        lastName:Yup.string().required(true),
        email:Yup.string().email("Email no válido").required("El email es Obligatorio"),
        medID:Yup.string().matches(/\d/,'Ingrese su identificación').required("Campo Obligatorio"),
        password:Yup.string().required("Campo obligatorio").matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula'),
        repeatPassword:Yup.string().oneOf([Yup.ref("password")],"Las contraseñas no coinciden").required("Campo obligatorio"),
        privacityConditions: Yup.bool().isTrue(true)
    })
}