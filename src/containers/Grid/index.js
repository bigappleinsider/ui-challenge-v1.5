import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchForm from '../../components/SearchBar';
import Card from '../../components/Card';

import {
  fetchPersonalLocation,
  fetchWebsiteLocation,
  resetLocation
} from '../../actions/locationActions';

class Grid extends Component {
  handleResetLocation(event){
    const { dispatch } = this.props;
    dispatch(resetLocation());
  }
  handlePersonalLocation(event){
    const { dispatch } = this.props;
    dispatch(fetchPersonalLocation());
  }
  handleSearch(url) {
    const { dispatch } = this.props;
    dispatch(fetchWebsiteLocation(url));
  }
  render() {
    const {
      websiteLocation, 
      isWebsiteLoading,
      personalLocation,
    } = this.props;

    return (
      <div>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        <Card 
          data={personalLocation} 
          header="Personal Location"
          type="personal" 
          handlePersonalLocation={this.handlePersonalLocation.bind(this)}
          handleResetLocation={this.handleResetLocation.bind(this)}
          />
        {isWebsiteLoading && <CircularProgress size={50} />}
        {websiteLocation.ip && <Card 
          data={websiteLocation} 
          header="Website Location" />}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { 
    websiteLocation, 
    isWebsiteLoading,
    personalLocation,
  } = state.locationReducer;
  return {
    websiteLocation, 
    isWebsiteLoading,
    personalLocation,
  };
};

export default connect(mapStateToProps)(Grid);