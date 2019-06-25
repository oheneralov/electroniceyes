import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class Train extends Component {
  render() {
    return (<div>
               lang: {this.context}
              
<div>
<button>Add category</button><button>Remove category</button>
</div>
           </div>);
  }
}

Train.contextType = ThemeContext

export default Train;
