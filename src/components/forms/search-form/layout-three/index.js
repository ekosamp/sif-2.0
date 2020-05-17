import React from 'react'
import {SearchFromWrap} from './search-form.style'

const SearchForm = () => {
    return (
        <SearchFromWrap>
            <form>
                <input type="text" name="header-search" id="header-search" placeholder="Search"/>
            </form>
        </SearchFromWrap>
    )
}

export default SearchForm;