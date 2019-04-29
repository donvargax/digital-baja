import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating'
import Fab from '@material-ui/core/Fab'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

import labimage from './images/test3.jpg'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={labimage}
          title="Lab 3"
        >
          Lorem Ipsum 1
          <a class="btn-floating halfway-fab waves-effect waves-light blue darken-2"><i class="material-icons">thumb_up</i></a>
          <div class="btn-floating halfway-fab waves-effect waves-light blue darken-2">
            <Fab color="primary">
                <ThumbUpIcon />
            </Fab>
          </div>
        </CardMedia>
        <CardContent>
          <div style={{float: 'right'}}>
            <Rating style={{float: 'right'}} value={3.5} max={5} />
          </div>
          <div style={{clear: 'both'}} />
          <Typography component="p">
            Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
          <div style={{float: 'left'}}>
            <Typography component="p">
                $44.99
            </Typography>
          </div>
          <div style={{float: 'right'}}>
            <Typography component="p">
                7.23 KM
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
