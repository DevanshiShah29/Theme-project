import React, { Component } from 'react'
import Promt from '../js/Prompt';
import Theme from './Theme';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        openPopup:false
      };
      this.openThemePopup = this.openThemePopup.bind(this);
    };

    openThemePopup() {
        this.setState({ openPopup: true });
    }

    closePopup = () => {
        this.setState({openPopup: false});
    };
    
    render() {
        return (
            <div>
                <div className="container">
                <h1><Promt/></h1>
                <p>Have a good day!</p>
                </div>
                <a
                className="button"
                onClick={this.openThemePopup}
                >
                Select Theme
                </a>
                {this.state.openPopup && (
                    <Theme
                        closePopup={this.closePopup}
                    />
                )}
            </div>
        )
    }
}
export default App;