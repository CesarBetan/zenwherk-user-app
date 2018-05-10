import React, { Component } from 'react';
import './SearchBarFilter.css';
import SectionTitle from '../../SectionTitle';
import Button from '../../Button';
import { categories, features } from './SearchBarFilterData';
import PropTypes from "prop-types";

class SearchBarFilter extends Component {

    constructor(props) {
      super(props)
      this.state = {categoryFilters: this.props.categoryFilters,
        featureFilters: this.props.featureFilters,
        savedCategoryFilters: this.props.categoryFilters,
        savedFeatureFilters: this.props.featureFilters}
      this.onInnerSelectFilter = this.onInnerSelectFilter.bind(this)
      this.onCloseFilter = this.onCloseFilter.bind(this)
    }

    componentWillMount() {
      document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
      document.body.style.overflow = "scroll";
    }

    onInnerSelectFilter() {
      if(this.props.currentTab === "Categories") {
        this.setState({savedCategoryFilters: this.state.categoryFilters})
        this.props.onSelectFilter(this.state.categoryFilters,
          this.state.savedFeatureFilters)
      } else {
        this.setState({savedFeatureFilters: this.state.featureFilters})
        this.props.onSelectFilter(this.state.savedCategoryFilters,
          this.state.featureFilters)
      }
    }

    onCloseFilter() {
      if(this.props.currentTab === "Categories") {
        this.setState({categoryFilters: this.state.savedCategoryFilters})
      } else {
        this.setState({featureFilters: this.state.savedFeatureFilters})
      }
      this.props.onCloseFilter()
    }

    onChange(event) {
      let filters = []
      if(this.props.currentTab === "Categories") {
        filters = [...this.state.categoryFilters]
      } else {
        filters = [...this.state.featureFilters]
      }
      let currentValue = event.target.value
      if (filters.includes(currentValue) === true) {
        filters = filters.filter((current) => current !== currentValue)
      } else {
        filters.push(currentValue)
      }
      if(this.props.currentTab === "Categories") {
        this.setState({categoryFilters: filters})
      } else {
        this.setState({featureFilters: filters})
      }
    }

    render() {
        let { currentTab } = this.props
        return (
          <div className={`${this.props.className}
          search-bar-filter-container PraxisNext-Heavy`}>
            <div className="search-bar-filter-cross-wrapper"
            onClick={this.onCloseFilter}>
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
                            checked={this.state.categoryFilters.includes((i + 1).toString())}
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
                            value={current.value}
                            checked={this.state.featureFilters.includes((i + 1).toString())}
                            onChange={this.onChange.bind(this)}
                            />
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
                title="Guardar"/>
              </div>
            </div>
          </div>
        );
    }
}

SearchBarFilter.defaultProps = {
    currentTab: "Categories",
    className: ""
};

SearchBarFilter.propTypes = {
    currentTab: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

export default SearchBarFilter;
