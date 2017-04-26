import React, { Component } from 'react';
import logoUrl from './kodama2.jpg';
import s from './fluxitemslist.css';

class FluxItemsList extends Component {
  render() {
    return (
      <div className="fluxitemslist">
        <ul>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
          <li>
            <img src={logoUrl} width="80" height="80" />
            <span className="info-title">Flux Item Title</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default FluxItemsList
