import { svgs } from "../svg/svg"

export const handleSubmitForm = ({ e, handleSubmit, handleErrors }) => {
    e.preventDefault()
    const formInputs = e.target.querySelectorAll('input')

    const data = {}
    const errors = {}
    formInputs.forEach((input) => {
        if (input.value) {
            data[input.name] = input.value
            input.dataset.valid = true
            input.dataset.error = false
            input.nextElementSibling.innerHTML = ""
        } else {
            input.dataset.valid = false
            input.dataset.error = true
            errors[input.name] = {
                error: 'this field is required',
            }
            input.nextElementSibling.innerHTML =`<div class="flex gap-1 items-center -mt-2">
                                                    ${svgs.ErrorSvgIcon}
                                                    <span class="text-red-500">this field is require</span>
                                                </div>`
                
        }
    })
    const isFormValid = [...formInputs].every((i) => i.dataset.valid === 'true')

    if (isFormValid) {
        console.log("sss")
        handleSubmit(data)
    } else {
        handleErrors(errors)
    }
}

