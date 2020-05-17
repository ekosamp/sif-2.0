import React from 'react';
import { useForm } from 'react-hook-form'
import Form, {FormGroup, Input, Select, Error} from '../../ui/form'
import Button from '../../ui/button'

const AppointmentForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = data => { console.log(data) }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup mb="20px">
                <Input
                    name="appointment_name"
                    id="appointment_name"
                    type="text"
                    placeholder="Name *"
                    hover="2"
                    ref={register({ required: 'Name is required' })}
                />
                <Error>{errors.appointment_name && errors.appointment_name.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="appointment_email"
                    id="appointment_email"
                    type="email"
                    placeholder="Email *"
                    hover="2"
                    ref={register({
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address"
                        }
                    })}
                />
                <Error>{errors.appointment_email && errors.appointment_email.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Select 
                    name="appointment_inquiry"
                    id="appointment_inquiry"
                    hover="2"
                    ref={register({ required: "Please select a inquiry" })}
                >
                    <option value="">Your inquiry about</option>
                    <option value="General Information Request">General Information Request</option>
                    <option value="Partner Relations">Partner Relations</option>
                    <option value="Careers">Careers</option>
                    <option value="Software Licencing">Software Licencing</option>
                </Select>
                <Error>{errors.appointment_inquiry && errors.appointment_inquiry.message}</Error>
            </FormGroup>
            <FormGroup textalign="center">
                <Button 
                    type="submit"
                    pl="54px"
                    pr="54px"
                    hover="2">Submit</Button>
            </FormGroup>
        </Form>
    )
} 


export default AppointmentForm;