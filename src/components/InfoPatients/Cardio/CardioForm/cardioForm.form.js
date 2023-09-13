import * as Yup from "yup"

export function initialValues(cardiofile){
    return {
    diastolicPressure: cardiofile?.diastolicPressure||"",
    systolicPressure:cardiofile?.systolicPressure|| "",
    meanArterialPressure:cardiofile?.meanArterialPressure||"",
    spO2:cardiofile?.spO2||"",
    file:cardiofile?.file||""
    }
}

export function validationSchema(){
    return Yup.object({
        diastolicPressure:Yup.number(),
    systolicPressure:Yup.number(), // mm Hg
    meanArterialPressure:Yup.number(), //mm Hg
    spO2:Yup.number(), //%
    file:Yup.string(),
    })
}
