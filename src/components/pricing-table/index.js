import React from 'react'
import Img from 'gatsby-image'
import { MdDone } from "react-icons/md";
import Button from '../ui/button'
import {
    PricingTableWrap,
    PricingTableInner,
    PricingTableHead,
    PricingTableTitle,
    PricingTableImage,
    PricingTablePrice,
    PricingTableBody,
    PricingTableBtn,
    PricingTableList
} from './pricing-table.style'


const PricingTable = ({title, image, price, isFeatured, path, features}) => {
    const btnStyle = {
        varient: !isFeatured ? 'outlined' : 'contained',
        hover: !isFeatured ? "true" : 2
    }
    return (
        <PricingTableWrap>
            <PricingTableInner>
                <PricingTableHead>
                    {title && <PricingTableTitle>{title}</PricingTableTitle>}
                    {image && (
                        <PricingTableImage>
                            <Img fixed={image} alt={title}/>
                        </PricingTableImage>
                    )}
                    {price && (
                        <PricingTablePrice>
                            <sup>$</sup>
                            <h6>{price.amount}</h6>
                            <sub>/{price.period}</sub>
                        </PricingTablePrice>
                    )}
                </PricingTableHead>
                <PricingTableBody>
                    {path && (
                        <PricingTableBtn>
                            <Button {...btnStyle} to={path}>Learn More</Button>
                        </PricingTableBtn>
                    )}
                    {features && (
                        <PricingTableList>
                            {features.map(feature => <li key={feature.id}><MdDone/><span>{feature.text}</span></li>)}
                        </PricingTableList>
                    )}
                </PricingTableBody>
            </PricingTableInner>
        </PricingTableWrap>
    )
}

export default PricingTable
