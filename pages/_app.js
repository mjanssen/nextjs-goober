import React from 'react';
import { setPragma } from 'goober';

// This could be the best place to define it once.
// Since `_app.js is running for both
setPragma(React.createElement);

export default ({ Component, pageProps }) => <Component {...pageProps} />;
