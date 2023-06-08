// This component will focus on the concept of children as we will be wrapping the CardList component
// The objective with this component is to wrap the CardList so we can a better looking responsive UI
// By wrapping CardList, we simply style here and let that cover the CardList component

import React from 'react';

const Scroll = ( props ) => {
   return (
      <div style={ { overflowY: 'scroll', border: '1px solid black', height: '500px' } }>
         { props.children }
      </div>
   );
};

export default Scroll;