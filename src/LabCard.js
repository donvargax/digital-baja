import React from 'react'

import Rating from 'material-ui-rating'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

export const LabCard = ({title, description, rating, price, distance, image}) =>
    <div className="card">
        <div className="card-image">
            <img src={`static/images/${image}`} style={{maxHeight: '254px'}} />
            <span className="card-title teal" style={{width: '100%'}}>{title}</span>
            <a style={{paddingTop: '6px', paddingLeft: '8px'}} className="btn-floating halfway-fab waves-effect waves-light blue darken-2"><ThumbUpIcon /></a>
        </div>
        <br />
        <div className="card-content row content">
            <div className="row">
                <div className="col s5 offset-s7 rate">
                    <Rating value={rating} max={5} />
                </div>
            </div>
            <div className="row">
                <div className="col m10 s10 offset-m1 offset-s1">
                    <p className="truncate">{description}</p>
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
