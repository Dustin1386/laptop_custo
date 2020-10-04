import React, {Component} from 'react';
import InputField from './InputField';


class FeatureList extends Component {
    render (){
        return(
            
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(this.props.features).map((key,idx)=>{
              const featureHash = key + '-' + idx;
              return(
              
                <InputField 
                feature={key} 
                featureHash={featureHash} 
                options={this.props.features[key]} 
                key={featureHash} 
                USCurrencyFormat={this.props.USCurrencyFormat}
                updateFeature={this.props.updateFeature}
                />
              )
            })}
          </form>


        )

    }
}
export default FeatureList;
