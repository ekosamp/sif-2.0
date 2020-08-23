import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { MdTrendingFlat } from "react-icons/md";
import Anchor from '../../ui/anchor'
import Button from '../../ui/button'
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
    LinkBtn,
    TagsWrap
} from './prod.style'

const SpecialOffersList = ({data, ...restProps}) => {
    const {
        productBrochure, productFuel, productModels, productOutput, productSize, productManual,
        Brand, productType, productimage1, name, description
    } = data;
    const {wrapStyle, metaStyle, buttonStyle} = restProps;
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
                            {!!productimage1.img1 && (
                                <ImageThumb
                                    onClick={() => modalImageOpen(productimage1.img1.localFile.childImageSharp.fluid)}
                                    poster={productimage1.img1.localFile.childImageSharp}
                                    title={`${Brand.brand.title} ${name.name}`}
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
                                {name.name && <ProdTitle><Text>{Brand.brand.title} {name.name}</Text></ProdTitle>}
                            </ProdHeader>
                            {productType.type.title && productSize.size && productFuel.fuel && (
                                <TagsWrap>
                                    <Text>{productType.type.title.post_title}, {productSize.size}, {productFuel.fuel}</Text>
                                </TagsWrap>
                            )}
                            {description.description && (
                                <ProdExcerpt>
                                    <Text>{description.description}</Text>
                                </ProdExcerpt>
                            )}
                            {productModels.models && (
                                <ProdExcerpt>
                                    <Text>Model(s): {productModels.models}</Text>
                                </ProdExcerpt>
                            )}
                            {productOutput.output && (
                                <ProdExcerpt>
                                    <Text>Output (max BTU): {productOutput.output}</Text>
                                </ProdExcerpt>
                            )}
                                <LinkBtn>
                                    {productManual.manualUrl && (
                                        <Button icon={<MdTrendingFlat/>} to={productManual.manualUrl} {...buttonStyle}>Manual PDF</Button>
                                    )}
                                    {productBrochure.brochureUrl && (
                                        <Button icon={<MdTrendingFlat/>} to={productBrochure.brochureUrl} {...buttonStyle}>Brochure PDF</Button>
                                    )}
                                </LinkBtn>
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