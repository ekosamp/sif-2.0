import * as React from 'react'
import classnames from 'classnames'
import {Row, Col} from '../ui/wrapper'
import Form, {FormGroup, Select, Input} from '../ui/form'
import Button from '../ui/button'
import Text from '../ui/text'
import styles from './styles.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  stopSubmit = (e) => {
    e.preventDefault()
    return false
  }

  render() {
    const containerClasses = classnames('container', 'mb-1', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)
    const accord = classnames('', styles.accord)

    return (
      <div className={containerClasses}>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Filter products
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={accord}>
              <Form
                className={formClasses}
                onSubmit={this.stopSubmit}
              >
                <Row>
                  <Col lg={4}>
                    <FormGroup mb="20px">
                      <Input
                        type="text"
                        name="keyword"
                        id="keyword"
                        placeholder="Search model name"
                        value={this.props.keyword}
                        onChange={this.props.handleChange('keyword')}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup mb="20px">
                      <Select 
                        name="brand"
                        id="brand"
                        hover="2"
                        value={this.props.brandFilter}
                        onChange={this.props.handleChange('brandFilter')}
                      >
                        <option value="">Filter by brand</option>
                        {this.props.brands.map((b, index) => (
                          <option key={`${b}-${index}`} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup mb="20px">
                      <Select 
                        name="size"
                        id="size"
                        hover="2"
                        value={this.props.sizeFilter}
                        onChange={this.props.handleChange('sizeFilter')}
                      >
                        <option value="">Filter by size</option>
                        {this.props.sizes.map((s, index) => (
                          <option key={`${s}-${index}`} value={s}>
                            {s}
                          </option>
                        ))}
                      </Select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Button
                      size="xsmall"
                      onClick={this.props.applyFilter}
                    >
                      Apply filter
                    </Button>
                    {'   '}
                    <Button
                      size="xsmall"
                      type="reset"
                      skin="secondary"
                      onClick={this.props.clearFilters}
                    >
                      Clear filters
                    </Button>
                  </Col>
                </Row>
              </Form>
              </AccordionItemPanel>
          </AccordionItem>
        </Accordion> 
      </div>
    )
  }
}

export default Filter