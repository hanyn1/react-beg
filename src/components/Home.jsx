import React from 'react'
import mm from '../assets/mm.jpg'
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
    <div>
      <h1>Bonjour</h1>
      <div class="card" style={{width: "18rem"}}>
  <img src={mm} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}
