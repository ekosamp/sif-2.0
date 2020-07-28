import React, {Fragment} from "react"
import ProductInfoArea from '../containers/product-list'
import SearchForm from '../components/forms/search-form/layout-three'

class Search extends React.Component {
  state = {
    productList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
  }

  handleChange = (name) => (event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  }

  /**
   * Ser all product data from props
   */
  componentDidMount() {
    if (this.props.products && this.props.keyword) {
      this.setState({
        productList: this.props.products,
        searchQuery: this.props.keyword
      }, () => {this.searchData(this.state.searchQuery)})
    } else {
      this.setState({
        productList: this.props.products,
        isLoading: false
      })
    }
  }

  /**
   * handles the input change and performs a search and
   * the results will be added to state
   */
  searchData = (keyword) => {
    const queryResult = this.state.productList.edges
      .filter(item => item.node.title.toLowerCase().includes(keyword.toLowerCase()))
    this.setState({ searchQuery: keyword, searchResults: queryResult, isLoading: false })
  }

  newSearch = () => {
    const { searchQuery } = this.state
    if (searchQuery === '') {
      alert(`Enter a model name or brand to search`)
    } else {
      this.setState({ isLoading: true}, () => {
        const queryResult = this.state.productList.edges
          .filter(item => item.node.title.toLowerCase().includes(searchQuery.toLowerCase()))
        this.setState({ searchResults: queryResult }, () => {
          this.setState({ isLoading: false })
        })
      })
    }
  }

  render() {
    const {
      isError,
      isLoading,
      productList,
      searchResults,
      searchQuery
    } = this.state
    const queryResults = searchQuery === `` ? productList : searchResults
    const noResults = (searchResults.length === 0)

    if (isLoading) {
      return (
        // TODO: show loading circle
        <div></div>
      )
    }
    if (isError) {
      return (
        // TODO: show create error section
        <div></div>
      )
    }
    if (!isLoading) {
      return (
        <Fragment>
          <SearchForm
            searchQuery={searchQuery}
            handleChange={this.handleChange}
            newSearch={this.newSearch} />

          {noResults && (
            <div>No results found</div>
          )}

          {!noResults && (
            <ProductInfoArea
              products={queryResults} />
          )}
        </Fragment>
      )
    }
  }
}

export default Search