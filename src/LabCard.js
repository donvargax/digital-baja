import React from 'react'

import Rating from 'material-ui-rating'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

import './materialize.css';
import './style.css';

const Card = ({title, description, rating, price, distance}) =>
    <div style={{width: '50%'}} className="card">
        <div className="card-image">
            <img src="images/test3.jpg" />
            <span className="card-title">{title}</span>
            <a style={{paddingTop: '6px'}} className="btn-floating halfway-fab waves-effect waves-light blue darken-2"><ThumbUpIcon /></a>
        </div>
        <br />
        <div className="card-content row content">
            <div className="row">
                <div className="col s5 offset-s7 rate">
                    <Rating style={{float: 'right'}} value={rating} max={5} />
                </div>
            </div>
            <div className="row">
                <div className="col m10 s10 offset-m1 offset-s1">
                    <p>{description}</p>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col m4 s4 offset-m1 offset-s1">
                    <p className="price-title">$ {price}</p>
                </div>
                <div className="col m4 s4 offset-m3 offset-s3">
                    <p className="distance-title">{distance} KM</p>
                </div>
            </div>
        </div>
        <div className="card-action">
            <a href="#modal1" className="modal-trigger">more info</a>
        </div>
    </div>

export default Card

// example usage
//      <Card
    //     title="Lorem Ipsum 1"
    //     rating={4}
    //     price={49.99}
    //     distance={7.23}
    //     description="Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    //   />
