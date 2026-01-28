import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-V0PMRCY9CJ'); // Replace with your actual ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};