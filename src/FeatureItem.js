import React, {Component} from 'react';


class FeatureItem extends Component {
    render(){
        return(
            <div className="feature__item">
            <input
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={this.props.name}
              checked={this.props.checked}
              onChange={this.props.updateFeature}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.item.name}
            </label>
          </div>
        )
    }
}

export default FeatureItem;