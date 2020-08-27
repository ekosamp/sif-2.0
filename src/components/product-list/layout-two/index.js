import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { MdTrendingFlat } from "react-icons/md";
import Anchor from '../../ui/anchor'
import Button from '../../ui/button'
import Text from '../../ui/text'
import Image from '../../image'
import ImageThumb from '../image-thumb'
import ImageModal from '../../ui/modal-image'
import {Row, Col} from '../../ui/wrapper'
import {
    ProdWrapper,
    ProdMedia,
    ProdThumb,
    ProdMiniThumbs,
    ProdMiniThumb,
    ProdInfo,
    ProdHeader,
    ProdTitle,
    ProdExcerpt,
    LinkBtn,
    ProdQuote,
    TagsWrap
} from './prod.style'

const List = ({data, ...restProps}) => {
    const {
        productBrochure, productFuel, productModels, productOutput, productSize, productManual,
        Brand, productType, productimage1, productimage2, productimage3, name, description
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
                    <Col lg={4}>
                        <ProdMedia>
                            {!!productimage1.img1 && (
                                <ImageThumb
                                    onClick={() => modalImageOpen(productimage1.img1.localFile.childImageSharp.fluid)}
                                    poster={productimage1.img1.localFile.childImageSharp}
                                    title={`${Brand.brand.title} ${name.name}`}
                                    thumb={false}
                                />
                            )}
                            {!!productimage2.img2 && !productimage3.img3 && (
                                <ProdMiniThumb>
                                    <ImageThumb
                                        onClick={() => modalImageOpen(productimage2.img2.localFile.childImageSharp.fluid)}
                                        poster={productimage2.img2.localFile.childImageSharp.fluid.src}
                                        title={`${Brand.brand.title} ${name.name}`}
                                        thumb={true}
                                    />
                                </ProdMiniThumb>
                            )}
                            {!!productimage2.img2 && !!productimage3.img3 && (
                                <ProdMiniThumbs>
                                    <ImageThumb
                                        onClick={() => modalImageOpen(productimage2.img2.localFile.childImageSharp.fluid)}
                                        poster={productimage2.img2.localFile.childImageSharp.fluid.src}
                                        title={`${Brand.brand.title} ${name.name}`}
                                        thumb={true}
                                    />
                                    <ImageThumb
                                        onClick={() => modalImageOpen(productimage3.img3.localFile.childImageSharp.fluid)}
                                        poster={productimage3.img3.localFile.childImageSharp.fluid.src}
                                        title={`${Brand.brand.title} ${name.name}`}
                                        thumb={true}
                                    />
                                </ProdMiniThumbs>
                            )}
                        </ProdMedia>
                    </Col>

                    <Col lg={8}>
                        <ProdInfo>
                            <ProdHeader>
                                {name.name && <ProdTitle><Text>{Brand.brand.title} {name.name}</Text></ProdTitle>}
                            </ProdHeader>
                            {productType.type.title && productSize.size && productFuel.fuel && (
                                <TagsWrap>
                                    <Text>{productType.type.title}, {productSize.size}, {productFuel.fuel}</Text>
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

List.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

List.defaultProps = {
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
    }
}

export default List;