import React from 'react'
import { MdSearch } from "react-icons/md";
import {HeaderFormWrap, ButtonWrap} from './header-form.style'
import Form, {Input} from '../../ui/form'
import Button from '../../ui/button'


const HeaderForm = ({input, inputId, ...restProps}) => {
    const onChangeHandler = e => {
        
    }
    return (
        <HeaderFormWrap {...restProps}>
            <Form>
                <Input 
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Search..."
                    hover="false"
                    id={inputId}
                    {...input}
                />
                <ButtonWrap>
                    <Button 
                        type="submit"
                        skin="transparent"
                        hover="false"
                        varient='onlyIcon'
                        color="#fff"
                    >
                        <MdSearch/>
                    </Button>
                </ButtonWrap>
            </Form>
        </HeaderFormWrap>
    )
}
 
HeaderForm.defaultProps = {
    input: {
        bgcolor: '#614748', //002fa64d
        borderradius: '0',
        bordercolor: 'transparent',
        color: '#fff',
        pl: '10px',
        pr: '50px', 
        height: "60px"
    }
} 

export default HeaderForm
