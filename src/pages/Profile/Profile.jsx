import React, { useEffect, useState } from 'react';
import "./Profile.css"

export default function Profile(){
  return (
    <div class="profile">
      <div class="left">
          <div id="company">
            <label>Company(Disabled)</label>
            <input type="text" placeholder='JFN-HUI' disabled />
          </div>
          <div id="email">
            <label>Email</label>
            <input type="email" />
          </div>
          <div id="fname">
            <label>First Name</label>
            <input type="text"/>
          </div>
          <div id="lname">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div id="address">
            <label>Adresse</label>
            <input type="text" />
          </div>
          <div>
            <label>City</label>
            <input type="text"/>
          </div>
          <div>
            <label>Country</label>
            <input type="text"/>
          </div>
          <div>
            <label>Postal code</label>
            <input type="text" />
          </div>
      </div>
    </div>
  )
};