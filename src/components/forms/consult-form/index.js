import React from 'react';
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import {Row, Col} from '../../ui/wrapper'
import Form, {FormGroup, Input, Select, Textarea, Error} from '../../ui/form'
import Button from '../../ui/button'

const ConsultForm = ({btnStyle}) => {
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
                            name="consult_name"
                            id="consult_name"
                            placeholder="Name *"
                            ref={register({ required: 'Name is required' })}
                        />
                        <Error>{errors.consult_name && errors.consult_name.message}</Error>
                    </FormGroup> 
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="consult_email"
                            id="consult_email"
                            placeholder="Email *"
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                  message: "invalid email address"
                                }
                            })}
                        />
                        <Error>{errors.consult_email && errors.consult_email.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Select name="consult_inquiry" id="consult_inquiry" 
                            ref={register({ required: "Please select a inquiry" })}
                        >
                            <option value="">Your inquiry about</option>
                            <option value="General Information Request">General Information Request</option>
                            <option value="Partner Relations">Partner Relations</option>
                            <option value="Careers">Careers</option>
                            <option value="Software Licencing">Software Licencing</option>
                        </Select>
                        <Error>{errors.consult_inquiry && errors.consult_inquiry.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea 
                            name="consult_message" 
                            id="consult_message" 
                            placeholder="Please describe what you need."
                            ref={register({ 
                                required: 'Message is required',
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length is 50"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Minimum length is 10"
                                }
                            })}
                            ></Textarea>
                            <Error>{errors.consult_message && errors.consult_message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit" {...btnStyle}>Get a free consultation</Button>
                </Col>
            </Row>
        </Form>
    )
} 

ConsultForm.propTypes = {
    btnStyle: PropTypes.object
}

ConsultForm.defaultProps = {
    btnStyle: {
        hover: 2,
        pl: '54px',
        pr: '54px'
    }
}

export default ConsultForm;