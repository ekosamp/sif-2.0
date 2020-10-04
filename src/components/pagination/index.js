import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/button'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentDidMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        const { items, pageSize } = this.props;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        // get new page of items from items array
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);

        window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage = 1;
        let endPage = 1;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        const pager = this.state.pager;
        const { ButtonStyle } = this.props;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <Fragment>
                <ul className="pagination" style={{flexWrap: "wrap"}}>
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <Button
                            size="xsmall"
                            onClick={() => this.setPage(pager.currentPage - 1)}
                            {...ButtonStyle}>
                            <MdNavigateBefore className="icon"/>
                        </Button>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li key={index}>
                            <Button
                                size="xsmall" 
                                {...ButtonStyle}
                                onClick={() => this.setPage(page)}
                                varient={pager.currentPage === page ? 'outlined' : null}>
                                {page}
                            </Button>
                        </li>
                    )}
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <Button
                            size="xsmall"
                            onClick={() => this.setPage(pager.currentPage + 1)}
                            {...ButtonStyle}>
                            <MdNavigateNext className="icon"/>
                        </Button>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = {
    initialPage: 1,
    pageSize: 10,
    ButtonStyle: {
        m: '4px',
        hover: false
    }
};

export default Pagination;