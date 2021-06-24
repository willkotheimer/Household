import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/logo.png';

export default function Footer(props) {
  return (
<footer className="page-footer font-small teal pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3"><img src={logo} />
        <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?
      </div>
      <div className="col-md-6 mb-md-0 mb-3">
        <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
</footer>
  );
}
