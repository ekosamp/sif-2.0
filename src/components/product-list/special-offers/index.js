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
        acf: {brochure_url, fuel, models, output, size, manual_url, brand,
            type, img1, name, description}
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
                            {!!img1 && (
                                <ImageThumb
                                    onClick={() => modalImageOpen(img1.localFile.childImageSharp.fluid)}
                                    poster={img1.localFile.childImageSharp}
                                    title={`${brand.post_title} ${name}`}
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
                                {name && <ProdTitle><Text>{brand.post_title} {name}</Text></ProdTitle>}
                            </ProdHeader>
                            {type && size && fuel && (
                                <TagsWrap>
                                    <Text>{type.post_title}, {size}, {fuel}</Text>
                                </TagsWrap>
                            )}
                            {description && (
                                <ProdExcerpt>
                                    <Text>{description}</Text>
                                </ProdExcerpt>
                            )}
                            {models && (
                                <ProdExcerpt>
                                    <Text>Model(s): {models}</Text>
                                </ProdExcerpt>
                            )}
                            {output && (
                                <ProdExcerpt>
                                    <Text>Output (max BTU): {output}</Text>
                                </ProdExcerpt>
                            )}
                                <LinkBtn>
                                    {manual_url && (
                                        <Button icon={<MdTrendingFlat/>} to={manual_url} {...buttonStyle}>Manual PDF</Button>
                                    )}
                                    {brochure_url && (
                                        <Button icon={<MdTrendingFlat/>} to={brochure_url} {...buttonStyle}>Brochure PDF</Button>
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