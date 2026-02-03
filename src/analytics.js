// Google Analytics 4 configuration for portfolio tracking
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-V0PMRCY9CJ'); // Your measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};