import React, { useContext } from 'react';
import { RecordsContext } from '../context/RecordsProvider';

const Navbar = () => {
  const {currOrgUser} = useContext(RecordsContext);
  
  return (
  <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Medibase</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/overview">Home</a>
        </li>
       
      </ul>
    </div>
  </div>
  <div>
    <h5>{currOrgUser}</h5>
  </div>
</nav>
  </>
  )
}

export default Navbar