import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    width: 400,
    margin: 10,
  },
};

class LCard extends Component {
  render() {
    const { data, classes, header } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="headline" component="h2">
            {header}
          </Typography>
          <Typography component="p">
            <strong>IP: </strong>
            {data.ip}
          </Typography>
          <Typography component="p">
            <strong>Country: </strong>
            {data.country_name}
          </Typography>
          <Typography component="p">
            <strong>Region: </strong>
            {data.region_name}
          </Typography>
          <Typography component="p">
            <strong>City: </strong>
            {data.city}
          </Typography>
          <Typography component="p">
            <strong>Zip Code: </strong>
            {data.zip_code}
          </Typography>
          <Typography component="p">
            <strong>Latitude: </strong>
            {data.latitude}
          </Typography>
          <Typography component="p">
            <strong>Longtitude: </strong>
            {data.longitude}
          </Typography>
        </CardContent>
        {this.props.type === 'personal' &&
          <CardActions>
            <Button size="small" color="primary" onClick={this.props.handlePersonalLocation.bind(this)}>
              My Locaction
            </Button>
            <Button size="small" color="primary" onClick={this.props.handleResetLocation.bind(this)}>
              Reset Location
            </Button>
          </CardActions>      
        }
      </Card>
    );
  }
}

LCard.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  handlePersonalLocation: PropTypes.func,
  handleResetLocation: PropTypes.func,
};



export default withStyles(styles)(LCard);
