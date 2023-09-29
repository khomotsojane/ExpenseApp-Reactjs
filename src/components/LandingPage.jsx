import { useState } from "react";
import React from "react";
import log from "../assets/Cutting-Expenses.png";
import food from "../assets/foood.jpg";
import shopping from "../assets/shopping.jpg";
import keys from "../assets/autokeys.png";

function LandingPage() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <img src={log} style={{ width: "100%" }} />
          </div>
          <div className="col">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  CutBillsApp
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Expenses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Income
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <h3 style={{marginTop:'70px'}}><b>Enter amount spent</b></h3>
            <form>
              <label>Food & Drinks</label><br></br>
              <img src={food} style={{width:'40px',height:'40px',borderRadius:'50%'}} />
              <input type="number" name="food" placeholder="$" /><br></br>
              <label>Shopping</label><br></br>
              <img src={shopping} style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
              <input type="number" name="food" placeholder="$"/><br></br>
              <label>Car expenses</label><br></br>
              <img src={keys} style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
              <input type="number" name="food" placeholder="$"/><br></br>
            </form><br></br>
            <button style={{backgroundColor:'#80D8F4', border:'none', color:'#ffffff', marginLeft:'70px',  borderRadius:'5px'}}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
