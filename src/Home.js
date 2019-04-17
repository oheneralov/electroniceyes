import React, { Component, lazy, Suspense } from 'react';

const HomeContent = lazy(() => import('./HomeContent'));

export default class Home extends Component{
  render() {
    return (
<Suspense fallback="<div>... Loading</div>">
<HomeContent>
</HomeContent> 
</Suspense>);
  }
}


