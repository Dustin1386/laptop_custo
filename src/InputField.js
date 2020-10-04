import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';


class InputField extends Component {
    render() { 
        return (
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {this.props.options.map(item=>{
                     const itemHash = slugify(JSON.stringify(item));
                     const checked = false; //this.props.item.name === this.state.selected[this.props.feature].name
                    return(
                        <FeatureItem 
                        itemHash ={itemHash} 
                        USCurrencyFormat={this.props.USCurrencyFormat} 
                        name={slugify(this.props.feature)} 
                        checked ={checked}
                        updateFeature ={e => this.props.updateFeature(this.props.feature, item)}
                        item ={item}
                        key ={itemHash}
                        />
                    )
                })}
            </fieldset>
        )
    }
}

export default InputField;