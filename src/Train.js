import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class Train extends Component {
  render() {
    return (<div>
               Language: {this.context.lang}
              
<div>
    <form action="/backend/upload" enctype="multipart/form-data" method="post">
      <label for="category">Category</label>
      <div><input name="category" id="category" type="text" placeholder="category"/></div>
      <div><input type="file" name="file-to-upload"/></div>
      <div><input type="submit" value="Upload"/></div>
    </form>
</div>
           </div>);
  }
}

Train.contextType = ThemeContext

export default Train;
