import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/Household_logo_blue.svg';

export default function Footer(props) {
  return (
<footer className="page-footer font-small teal pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row d-flex">
    <div className="col-md-6 mt-md-0 mt-3"><img className="footerLogo" src={logo} />
    <h1 className="text-uppercase font-weight-bold">HOUSEHOLD</h1>
    </div>
    <div>
    <div className="footer-section col-md-6 mb-md-0 mb-3">
           <h5 className="text-uppercase font-weight-bold">WHAT IS HOUSEHOLD?</h5>
           Household is the first ever app addressing the issue of what it means not only to do the
           chores, but to do them right! What exactly is clean, is the source of countless arguments.
           This is no small task because everyone has a different concept of organization and cleanliness.
         </div>
      <div className="footer-section col-md-6 mb-md-0 mb-3">
        <h5 className="text-uppercase font-weight-bold">Remove the guesswork</h5>
        Household takes away the guesswork, allowing even the least detail-oriented person (or at least the least-detailed, when it comes to household chores), to
        say, "I followed the directions", and "it looks like the picture!". Checkboxes
        are just that, unless the task is done right, and Household ensures that everyone knows just
        what right can be!
      </div>
    </div>
  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="/"> HOUSEHOLD</a>
  </div>
  </div></div>
</footer>
  );
}
