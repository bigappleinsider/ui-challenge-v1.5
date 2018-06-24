import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textField: {
    width: 200,
    flex: '1 0 auto',
  },
  buttonField: {
    flex: '0 0 auto',
    margin: 10,
  },
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      showError: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  isValidForm(){
    const re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    return this.state.url.match(re);
  }
  handleSearch(event) {
    event.preventDefault();
    if(this.isValidForm()){
      this.setState({ showError: false });
      const parsedUrl = this.state.url.replace(/(http:\/\/)|(www\.)/g, '');
      this.props.handleSearch(parsedUrl);
    }
    else{
      this.setState({ showError: true });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <FormControl className={classes.formControl}>
            <TextField
              error={this.state.showError}
              name="url"
              value={this.state.ulr}
              className={classes.textField}
              onChange={this.handleChange.bind(this)}
              label="URL"
              placeholder="URL, e.g: http://example.com"
              helperText={this.state.showError?'Please check ULR and try again':''}
            />
            <Button
              onClick={this.handleSearch}
              className={classes.buttonField}
              variant="contained"
              color="primary"
            >
              Locate
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBar);
