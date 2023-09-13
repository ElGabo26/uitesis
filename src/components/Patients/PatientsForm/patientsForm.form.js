import * as Yup from "yup";

export function initialValues(patient){
    return {firstName:patient?.firstName || "",
    firstLastName:patient?.firstLastName ||"",
    secondLastName:patient?.secondLastName ||"",
    ciNumber:patient?.ciNumber ||'',
    numberClinicalHistory:patient?.numberClinicalHistory||"",
    dateBirth:patient?.dateBirth ||""
    }
}

export function validationSchema(){
    return Yup.object({
        firstName: Yup.string().required("Campo requerido"),
        firstLastName:Yup.string().required("Campo requerido"),
        secondLastName:Yup.string(),
        ciNumber:Yup.string().required("Campo requerido"),
        numberClinicalHistory:Yup.string().required("Campo requerido"),
        dateBirth: Yup.date().required("Campo requerido")
        
    })
}