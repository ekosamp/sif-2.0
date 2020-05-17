import React from 'react'
import { MdSearch } from "react-icons/md";
import {HeaderFormWrap, ButtonWrap} from './header-form.style'
import Form, {Input} from '../../ui/form'
import Button from '../../ui/button'


const HeaderForm = ({input}) => {
    const onChangeHandler = e => {
        
    }
    return (
        <HeaderFormWrap>
            <Form>
                <Input 
                    onChange={onChangeHandler}
                    type="text"
                    id="header-serarch"
                    name="header-serach"
                    placeholder="Search..."
                    hover="false"
                    {...input}
                />
                <ButtonWrap>
                    <Button 
                        type="submit"
                        skin="transparent"
                        hover="false"
                        varient='onlyIcon'
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
        bgcolor: 'transparent',
        borderradius: '0',
        bordercolor: 'transparent',
        color: '#333',
        pl: '10px',
        pr: '50px', 
    }
}

export default HeaderForm
