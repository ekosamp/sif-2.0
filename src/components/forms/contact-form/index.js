import React from 'react'
import { useForm } from 'react-hook-form'
import {Row, Col} from '../../ui/wrapper'
import Form, {FormGroup, Input, Textarea, Error} from '../../ui/form'
import Button from '../../ui/button'
 
const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = data => { console.log(data) }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{lg: 20}}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="con_name"
                            id="con_name"
                            placeholder="Name *"
                            ref={register({ required: 'Name is required' })}
                        />
                        <Error>{errors.con_name && errors.con_name.message}</Error>
                    </FormGroup> 
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="con_email"
                            id="con_email"
                            placeholder="Email *"
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        <Error>{errors.con_email && errors.con_email.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="con_subject"
                            id="con_subject"
                            placeholder="Subject *"
                            ref={register({ required: 'Subject is required' })}
                        />
                        <Error>{errors.con_subject && errors.con_subject.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea 
                            name="con_message" 
                            id="con_message" 
                            placeholder="Please describe what you need."
                            ref={register({ 
                                required: 'Message is required',
                                maxLength: {
                                    value: 500,
                                    message: "Maximum length is 500"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Minimum length is 10"
                                }
                            })}
                            ></Textarea>
                            <Error>{errors.con_message && errors.con_message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit">Send Message</Button>
                </Col>
            </Row>
        </Form>
    )
} 

export default ContactForm;