import React, {Fragment} from "react"
import ProductInfoArea from '../containers/product-list'
import Heading from '../components/ui/heading'
import Emoji from '../components/ui/emojis'
import SearchForm from '../components/forms/search-form/layout-three'
import { useToasts } from 'react-toast-notifications'

function withToast(Component) {
  return function WrappedComponent(props) {
    const toastFuncs = useToasts()
    return <Component {...props} {...toastFuncs} />;
  }
}

class Search extends React.Component {
  state = {
    productList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
    searchTitle: ``
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
        searchQuery: this.props.keyword,
        searchTitle: this.props.keyword
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
      .filter(item => item.node.acf.name.toLowerCase().includes(keyword.toLowerCase()))
    this.setState({ searchQuery: keyword, searchResults: queryResult, isLoading: false })
  }

  newSearch = () => {
    const { searchQuery, searchTitle } = this.state
    if (searchQuery === '' || searchQuery.length < 2) {
      this.props.addToast(`Enter a model name or brand to search, minimum 2 letters`, {
        appearance: 'error'
      })
    } 
    if (searchQuery === searchTitle) {
      return
    } else {
      this.setState({ isLoading: true}, () => {
        const queryResult = this.state.productList.edges
          .filter(item => item.node.acf.name.toLowerCase().includes(searchQuery.toLowerCase()))
        this.setState({ searchResults: queryResult, searchTitle: searchQuery }, () => {
          this.setState({ isLoading: false })
        })
      })
    }
  }

  render() {
    const { headingStyle } = this.props;
    const {
      isError,
      isLoading,
      productList,
      searchResults,
      searchQuery,
      searchTitle
    } = this.state
    const emptyQuery = searchTitle === ``
    const queryResults = emptyQuery ? productList : searchResults
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
          {emptyQuery && (
            <Heading {...headingStyle}>Search results for: "{<Emoji symbol="🤔"/>}"</Heading>
          )}
          {!emptyQuery && (
            <Heading {...headingStyle}>Search results for: "{searchTitle}"</Heading>
          )}
          
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

Search.defaultProps = {
  headingStyle: {
      as: 'h3',
      mb: '20px',
      mt: '15px',
      textalign: 'center',
      child: {
          color: 'primary'
      },
      responsive: {
          medium: {
              mb: '20px'
          }
      }
  }
}

export default withToast(Search)