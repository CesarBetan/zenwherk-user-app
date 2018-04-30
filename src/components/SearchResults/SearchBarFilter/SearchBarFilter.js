import React, { Component } from 'react';
import './SearchBarFilter.css';
import SectionTitle from '../../SectionTitle';
import Button from '../../Button';
import { categories, features } from './SearchBarFilterData';

class SearchBarFilter extends Component {

    constructor(props) {
      super(props)
      this.state = {filters: [], oldTab: ''}
      this.onInnerSelectFilter = this.onInnerSelectFilter.bind(this)
    }

    componentWillMount() {
      document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
      document.body.style.overflow = "scroll";
    }

    onInnerSelectFilter() {
      this.props.onSelectFilter(this.state.filters, this.props.currentTab)
    }

    onChange(event) {
      let filters = [...this.state.filters];
      let currentValue = event.target.value
      if (filters.includes(currentValue) === true) {
        filters = filters.filter((current) => current !== currentValue)
      } else {
        filters.push(currentValue)
      }
      this.setState({filters: filters})
    }

    render() {
        let { onCloseFilter, currentTab, onSelectFilter } = this.props
        return (
          <div className={`${this.props.className}
          search-bar-filter-container PraxisNext-Heavy`}>
            <div className="search-bar-filter-cross-wrapper"
            onClick={onCloseFilter}>
              <div className="search-bar-filter-cross cross-left"/>
              <div className="search-bar-filter-cross cross-right"/>
            </div>
            <div className="search-bar-filter-content-wrapper">
              <div className="search-bar-filter-scrollable-content">
                <SectionTitle className="search-bar-filter-section-title"
                title={currentTab}/>
                {
                  currentTab === 'Categories' ?
                    <form className="filter-form">
                      {
                        categories.map((current, i) =>
                          <div className="filter-option-wrapper"
                          key={i}>
                            <input type="checkbox" name="category"
                            value={current.value}
                            onChange={this.onChange.bind(this)}/>
                            <span className="filter-checkbox-title">
                              {current.title}
                            </span>
                            <br/>
                          </div>
                        )
                      }
                    </form>
                  :
                    <form className="filter-form">
                      {
                        features.map((current, i) =>
                          <div className="filter-option-wrapper"
                          key={i}>
                            <input type="checkbox" name="feature"
                            value={current.value}/>
                            <span className="filter-checkbox-title">
                              {current.title}
                            </span>
                            <br/>
                          </div>
                        )
                      }
                    </form>
                }
                <Button onClick={this.onInnerSelectFilter} className="filter-save-button"
                title="Save"/>
              </div>
            </div>
          </div>
        );
    }
}

export default SearchBarFilter;
