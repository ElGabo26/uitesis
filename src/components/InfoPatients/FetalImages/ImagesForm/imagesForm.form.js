

export function initialValues(image){
    return {
    ecography:image?.ecography|| "",
    radiography:image?.radiography|| "",
    tomography:image?.tomography|| "",
    resonance:image?.resonance|| "",
    fileImage: null
    }
}