import React from 'react'
import { navigate } from "gatsby"
import { useForm } from 'react-hook-form'
import { MdSearch } from "react-icons/md";
import {HeaderFormWrap, ButtonWrap} from './header-form.style'
import Form, {Input} from '../../ui/form'
import Button from '../../ui/button'
import { ProdQuery } from '../../../data/hooks/all-product-data'

const HeaderForm = ({input, inputId, ...restProps}) => {
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    const allProducts = ProdQuery();
    const onSubmit = data => {
        navigate(
            "/search-results/",
            {
                state: {
                    products: allProducts,
                    keyword: data.keyword
                }
            }
        )
    }
    
    return (
        <HeaderFormWrap {...restProps}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name="keyword"
                    type="text"
                    placeholder="Search..."
                    hover="false"
                    id={inputId}
                    {...input}
                    ref={register({ required: 'Enter a search keyword' })}
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
