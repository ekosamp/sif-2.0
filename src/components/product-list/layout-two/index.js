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
        slug, title, content,
        acf: {brochure_url, fuel, models, output, size, manual_url, brand,
            type, img1, img2, img3}
    } = data;
    const {wrapStyle, metaStyle, buttonStyle} = restProps;
    const [imageOpen, setImageOpen] = useState(false);
    const [viewImage, setViewImage] = useState('');
    
    const modalImageOpen = (img) => {
        console.log(img)
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
                            {!!img1 && (
                                <ImageThumb
                                    onClick={() => modalImageOpen(img1.localFile.childImageSharp.fluid)}
                                    poster={img1.localFile.childImageSharp}
                                    title={title}
                                    thumb={false}
                                />
                            )}
                            {!!img2 && !img3 && (
                                <ProdMiniThumb>
                                    <ImageThumb
                                        onClick={() => modalImageOpen(img2.localFile.childImageSharp.fluid)}
                                        poster={img2.localFile.childImageSharp.fluid.src}
                                        title={title}
                                        thumb={true}
                                    />
                                </ProdMiniThumb>
                            )}
                            {!!img2 && !!img3 && (
                                <ProdMiniThumbs>
                                    <ImageThumb
                                        onClick={() => modalImageOpen(img2.localFile.childImageSharp.fluid)}
                                        poster={img2.localFile.childImageSharp.fluid.src}
                                        title={title}
                                        thumb={true}
                                    />
                                    <ImageThumb
                                        onClick={() => modalImageOpen(img3.localFile.childImageSharp.fluid)}
                                        poster={img3.localFile.childImageSharp.fluid.src}
                                        title={title}
                                        thumb={true}
                                    />
                                </ProdMiniThumbs>
                            )}
                        </ProdMedia>
                    </Col>

                    <Col lg={8}>
                        <ProdInfo>
                            <ProdHeader>
                                {title && <ProdTitle><Text>{brand.post_title} {title}</Text></ProdTitle>}
                            </ProdHeader>
                            {type && size && fuel && (
                                <TagsWrap>
                                    <Text>{type.post_title}, {size}, {fuel}</Text>
                                </TagsWrap>
                            )}
                            {content && (
                                <ProdExcerpt>
                                    <Text>{content}</Text>
                                </ProdExcerpt>
                            )}
                            {models && (
                                <ProdExcerpt>
                                    <Text>Models: {models}</Text>
                                </ProdExcerpt>
                            )}
                            {output && (
                                <ProdExcerpt>
                                    <Text>Output: {output} BTU</Text>
                                </ProdExcerpt>
                            )}
                            {manual_url && (
                                <LinkBtn>
                                    <Button icon={<MdTrendingFlat/>} to={manual_url} {...buttonStyle}>Manual PDF</Button>
                                    <Button icon={<MdTrendingFlat/>} to={brochure_url} {...buttonStyle}>Brochure PDF</Button>
                                </LinkBtn>
                            )}
                            {/* {brochure_url && (
                                <LinkBtn>
                                    <Button icon={<MdTrendingFlat/>} to={brochure_url} {...buttonStyle}>Brochure PDF</Button>
                                </LinkBtn>
                            )} */}
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
        iconsize: "16px",
        // border: {
        //     bottom: {
        //         width: '1px'
        //     }
        // }
    }
}

export default List;