import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import Form, {FormGroup, Input, Select, Error, Textarea} from '../../ui/form'
import Button from '../../ui/button'
import Text from '../../ui/text'

const ReplacementPartsForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = data => {
        const form_data = new FormData()
        for ( const key in data ) {
            form_data.append(key, data[key])
        }
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "https://formspree.io/xyyndrdg")
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                setFormStatus("SUCCESS")
                document.getElementById("sForm").reset()
            } else {
                setFormStatus("ERROR")
            }
        };
        xhr.send(form_data)
    }

    const [formStatus, setFormStatus] = useState('')

    return(
        <Form id="sForm" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup mb="20px">
                <Input
                    name="contact_name"
                    id="contact_name"
                    type="text"
                    placeholder="Name *"
                    hover="2"
                    ref={register({ required: 'Name is required' })}
                />
                <Error>{errors.contact_name && errors.contact_name.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="_replyto"
                    id="_replyto"
                    type="email"
                    placeholder="Email *"
                    hover="2"
                    ref={register({
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                <Error>{errors._replyto && errors._replyto.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="ph_number"
                    id="ph_number"
                    type="phone"
                    placeholder="Phone"
                    hover="2"
                    ref={register({})}
                />
            </FormGroup>
            <FormGroup mb="20px">
                <Select 
                    name="product_type"
                    id="product_type"
                    hover="2"
                    ref={register({ required: "Please select a product type" })}
                >
                    <option value="">Type of product *</option>
                    <option value="Gas">Gas stove, fireplace, ot insert</option>
                    <option value="Wood">Wood stove, fireplace, or insert</option>
                    <option value="Pellet">Pellet stove, fireplace or insert</option>
                    <option value="Electric">Electric fireplace or insert</option>
                    <option value="BBQ">BBQ or grill</option>
                    <option value="Hot tub">Hot tub or spa</option>
                    <option value="Other">Other</option>
                </Select>
                <Error>{errors.product_type && errors.product_type.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="make"
                    id="make"
                    type="text"
                    placeholder="Make *"
                    hover="2"
                    ref={register({ required: 'Make is required' })}
                />
                <Error>{errors.make && errors.make.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="model"
                    id="model"
                    type="text"
                    placeholder="Model *"
                    hover="2"
                    ref={register({ required: 'Model is required' })}
                />
                <Error>{errors.model && errors.model.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="serial_number"
                    id="serial_number"
                    type="text"
                    placeholder="Serial number"
                    hover="2"
                    ref={register({})}
                />
            </FormGroup>
            <FormGroup mb="20px">
                <Textarea 
                    name="message" 
                    id="message" 
                    placeholder="Please describe what part(s) you are looking for, quantities, and any additional info"
                    hover="2"
                    ref={register({
                        required: 'Description is required',
                        maxLength: {
                            value: 500,
                            message: "Maximum length is 500"
                        }
                    })}
                    ></Textarea>
                <Error>{errors.message && errors.message.message}</Error>
            </FormGroup>
            <FormGroup textalign="center" mb="20px">
                <input type="text" name="_gotcha" style={{display:"none"}} />
                {formStatus === "SUCCESS" ? <Text as="strong">Thanks!{'  '}</Text> : 
                <Button 
                    type="submit"
                    pl="54px"
                    pr="54px"
                    hover="2">Submit</Button> }
                {formStatus === "ERROR" && <Error>Error, please try again</Error>}
                {'   '}
                <Button skin="secondary" type="reset" id="resetBtn">Reset</Button>
            </FormGroup>
        </Form>
    )
} 


export default ReplacementPartsForm;