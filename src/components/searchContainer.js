import React from "react"
import * as JsSearch from "js-search"
import ProductInfoArea from '../containers/product-list'

class Search extends React.Component {
  state = {
    productList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
  }

  /**
   * Fetch all product data
   */
  componentDidMount() {
    if (this.props.products && this.props.keyword) {
      this.setState({
        productList: this.props.products,
        searchQuery: this.props.keyword
      }, () => {this.searchData(this.state.searchQuery)})
    } else {
      this.setState({ isError: true })
    }
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (keyword) => {
    // const { search } = this.state
    // const queryResult = search.search(keyword)
    const queryResult = this.state.productList.edges
      .filter(item => item.node.title.toLowerCase().includes(keyword.toLowerCase()))
    this.setState({ searchQuery: keyword, searchResults: queryResult, isLoading: false })
  }

  render() {
    const {
      isError,
      isLoading,
      productList,
      searchResults,
      searchQuery,
    } = this.state
    const queryResults = searchQuery === `` ? productList : searchResults

    if (isLoading) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h4 style={{ marginTop: `3em`, textAlign: `center` }}>
            Getting the search all setup
          </h4>
        </div>
      )
    }
    if (isError) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>Ohh no!!!!!</h1>
          <h3
            style={{
              marginTop: `2em`,
              padding: `2em 0em`,
              textAlign: `center`,
            }}
          >
            Something really bad happened
          </h3>
        </div>
      )
    }
    return (
      <ProductInfoArea
        products={queryResults} />
    )
  }
}

export default Search