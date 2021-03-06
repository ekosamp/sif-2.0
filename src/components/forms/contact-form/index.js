import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Row, Col} from '../../ui/wrapper'
import Form, {FormGroup, Input, Textarea, Error} from '../../ui/form'
import Button from '../../ui/button'
import Text from '../../ui/text'
 
const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = data => {
        const form_data = new FormData()
        for ( const key in data ) {
            form_data.append(key, data[key])
        }
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "https://formspree.io/xleplbaw")
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                setFormStatus("SUCCESS")
                document.getElementById("cForm").reset()
            } else {
                setFormStatus("ERROR")
            }
        };
        xhr.send(form_data)
    }
    
    const [formStatus, setFormStatus] = useState("")

    return(
        <Form id="cForm" onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{lg: 20}}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="contact_name"
                            id="con_name"
                            placeholder="Name *"
                            ref={register({ required: 'Name is required' })}
                        />
                        <Error>{errors.contact_name && errors.contact_name.message}</Error>
                    </FormGroup> 
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="_replyto"
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
                        <Error>{errors._replyto && errors._replyto.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="subject"
                            id="con_subject"
                            placeholder="Subject *"
                            ref={register({ required: 'Subject is required' })}
                        />
                        <Error>{errors.subject && errors.subject.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea 
                            name="message" 
                            id="con_message" 
                            placeholder="Please describe your question or how we can help you *"
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
                            <Error>{errors.message && errors.message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <input type="text" name="_gotcha" style={{display:"none"}} />
                    {formStatus === "SUCCESS" ? <Text as="strong">Thanks!{'  '}</Text> : <Button skin="primary" type="submit">Send Message</Button>}
                    {formStatus === "ERROR" && <Error>Error, please try again</Error>}
                    {'   '}
                    <Button skin="secondary" type="reset" id="resetBtn">Reset</Button>
                </Col>
            </Row>
        </Form>
    )
} 

export default ContactForm;