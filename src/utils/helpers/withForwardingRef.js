import React from 'react';

const withForwardingRef = BaseComponent => React.forwardRef((props, ref) => (
  <BaseComponent
    {...props}
    forwardedRef={ref}
  />
));

export default withForwardingRef;
