import React from 'react'
import Form, {Input, Error} from '../../../ui/form'
import Button from '../../../ui/button'
import { MdSearch } from "react-icons/md";
import {SearchFromWrap, ButtonWrap} from './search-form.style'

class SearchForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault()
        return false
    }

    render() {
        return (
            <SearchFromWrap>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        name="keyword"
                        id="keyword"
                        placeholder="New search"
                        required
                        value={this.props.searchQuery}
                        onChange={this.props.handleChange('searchQuery')}
                    />
                    <ButtonWrap>
                        <Button 
                            type="submit"
                            skin="transparent"
                            hover="false"
                            varient='onlyIcon'
                            color="#452f31"
                            onClick={this.props.newSearch}
                        >
                            <MdSearch/>
                        </Button>
                    </ButtonWrap>
                </Form>
            </SearchFromWrap>
        )
    }
}

export default SearchForm;