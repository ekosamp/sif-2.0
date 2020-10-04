import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
// import { MdTrendingFlat } from "react-icons/md";
// import Anchor from '../../ui/anchor'
// import Button from '../../ui/button'
import Text from '../../ui/text'
import ImageThumb from '../image-thumb'
import ImageModal from '../../ui/modal-image'
import {Row, Col} from '../../ui/wrapper'
import {
    ProdWrapper,
    ProdMedia,
    ProdInfo,
    ProdHeader,
    ProdTitle,
    ProdExcerpt,
    TagsWrap
} from './prod.style'

const propertyStyle ={
    fontWeight: 500,
    fontSize: '14px',
}

const SpecialOffersList = ({data, ...restProps}) => {
    const {
        so_details: {
            brand, model, description, price, modelNumber, image, fuel
        }
    } = data;
    const {wrapStyle} = restProps;
    const [imageOpen, setImageOpen] = useState(false);
    const [viewImage, setViewImage] = useState('');
    
    const modalImageOpen = (img) => {
        setViewImage(img.src);
        setImageOpen(true);
    }
    const modalImageClose = () => {
        setImageOpen(false);
    }
    return (
        <Fragment>
            <ProdWrapper {...wrapStyle}>
                <Row>
                    <Col xs={12}>
                        <ProdMedia>
                            {!!image && (
                                <ImageThumb
                                    onClick={() => modalImageOpen(image.localFile.childImageSharp.fluid)}
                                    poster={image.localFile.childImageSharp}
                                    title={`${brand} ${model}`}
                                    thumb={false}
                                />
                            )}
                        </ProdMedia>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <ProdInfo>
                            <ProdHeader>
                                {brand && model && <ProdTitle><Text>{brand} {model}</Text></ProdTitle>}
                            </ProdHeader>
                            {fuel && (
                                <TagsWrap>
                                    <Text>{fuel}</Text>
                                </TagsWrap>
                            )}
                            {description && (
                                <ProdExcerpt>
                                    <Text>{description}</Text>
                                </ProdExcerpt>
                            )}
                            {modelNumber && (
                                <ProdExcerpt>
                                    <Text><span style={propertyStyle}>Model:</span> {modelNumber}</Text>
                                </ProdExcerpt>
                            )}
                            {price && (
                                <ProdExcerpt>
                                    <Text><span style={propertyStyle}>Price:</span> ${price}</Text>
                                </ProdExcerpt>
                            )}
                                {/* <LinkBtn>
                                    {productManual.manualUrl && (
                                        <Button icon={<MdTrendingFlat/>} to={productManual.manualUrl} {...buttonStyle}>Manual PDF</Button>
                                    )}
                                    {productBrochure.brochureUrl && (
                                        <Button icon={<MdTrendingFlat/>} to={productBrochure.brochureUrl} {...buttonStyle}>Brochure PDF</Button>
                                    )}
                                </LinkBtn> */}
                        </ProdInfo>
                    </Col>
                </Row>
            </ProdWrapper>
            {imageOpen && (
                <ImageModal
                    url={viewImage}
                    isOpen={imageOpen}
                    onClose={modalImageClose}
                />
            )}
        </Fragment>
    )
} 

SpecialOffersList.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

SpecialOffersList.defaultProps = {
    metaStyle: {
        mb: '7px'
    },
    buttonStyle: {
        varient: "texted",
        fontWeight: 500,
        fontSize: '14px',
        pb: '4px',
        pr: '16px',
        hover: "false",
        icondistance: "4px",
        iconsize: "16px"
    },
    wrapStyle: {
        mb: '16px'
    }
}

export default SpecialOffersList;