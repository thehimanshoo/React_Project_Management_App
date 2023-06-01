import React from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

function Search() {
  const history = useHistory();
  const CoursesPage = () => {
    history.push("/login");
  };

  var user = JSON.parse(localStorage.getItem("userInfo"));
  if (user) {
    console.log(user.name);
  }

  function functionToReset() {
    const button = document.getElementById("revert");
    const options = document.querySelectorAll("select option");
    button.onclick = () => {
      for (var i = 0; i < options.length; i++) {
        options[i].selected = options[i].defaultSelected;
      }
    };
  }

  const functionToExecute = () => {
    var country = document.getElementById("country");
    var itb = document.getElementById("itb");
    var target = document.getElementById("target");
    var tender = document.getElementById("tender");
    var product = document.getElementById("product");
    var sub = document.getElementById("sub");
    var del = document.getElementById("del");

    let newData = [];
    data.forEach((singleRow) => {
      if (country.value !== "" && singleRow["country"] === country.value) {
        newData.push(singleRow);
      }
      if (itb.value !== "" && singleRow["itb"] === itb.value) {
        newData.push(singleRow);
      }
      if (target.value !== "" && singleRow["target"] === target.value) {
        newData.push(singleRow);
      }
      if (tender.value !== "" && singleRow["tender"] === tender.value) {
        newData.push(singleRow);
      }
      if (product.value !== "" && singleRow["product"] === product.value) {
        newData.push(singleRow);
      }
      if (sub.value !== "" && singleRow["sub"] === sub.value) {
        newData.push(singleRow);
      }
      if (del.value !== "" && singleRow["del"] === del.value) {
        newData.push(singleRow);
      }
    });
    setData(newData);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/details").then((result) => {
      result.json().then((resp) => {
        console.log("result is here..", resp);
        setData(resp);
      });
    });
  }, []);
  return (
    <div>
      <header id="display1">
        <nav>
          <a href="#home" id="logo">
            TENDER MANAGEMENT
          </a>
          <i class="fas fa-bars" id="ham-menu"></i>
          <ul id="nav-bar">
            <li>
              <a href="#services">{user.name}</a>
            </li>

            <li>
              <button href="#contact" onClick={CoursesPage}>
                <span class="glyphicon logo-set">&#xe163;</span> <br></br>Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div id="topnav3">
        <div>
          <button>
            <Link to="/Favorite">Favorite Tenders</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to="/Search">Search Tender</Link>
          </button>
        </div>
      </div>
      <div className="bottom-navbar">
        <div class="container bg-col">
          <div class="row margin-top-search">
            <table class="table">
              <thead>
                <p class="bold-p">Search tenders</p>
                <tr class="filters">
                  <th class="text-center-search">
                    Country
                    <select name="country" id="country" class="form-control">
                      <option value="" selected></option>
                      <option value="Maxico">Maxico</option>
                      <option value="Malaysia">Malaysia</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    Target
                    <select name="target" id="target" class="form-control">
                      <option value="" selected></option>
                      <option value="All">All</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    Total tender value
                    <select name="tender" id="tender" class="form-control">
                      <option value="" selected></option>
                      <option value="4,576,000">4,576,000</option>
                      <option value="4,500,000">4,500,000</option>
                      <option value="4,897,000">4,897,000</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    Product
                    <select name="product" id="product" class="form-control">
                      <option value="" selected></option>
                      <option value="Synflorix">Synflorix</option>
                    </select>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div class="container">
          <div class="row margin-top-search2">
            <table class="table margin-negative">
              <thead>
                <tr class="filters" id="bg-change">
                  <th class="text-center-search">
                    Submission date
                    <select name="sub" id="sub" class="form-control">
                      <option value="" selected></option>
                      <option value="20-04-2021">20-04-2021</option>
                      <option value="25-04-2021">25-04-2021</option>
                      <option value="13-07-2021">13-07-2021</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    ITB Number
                    <select name="itb" id="itb" class="form-control">
                      <option value="" selected></option>
                      <option value="2200028337">2200028337</option>
                      <option value="2200064427">2200064427</option>
                      <option value="2200021185">2200021185</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    First delivery date
                    <select name="del" id="del" class="form-control">
                      <option value="" selected></option>
                      <option value="20-04-2021">20-04-2021</option>
                      <option value="25-04-2021">25-04-2021</option>
                      <option value="13-07-2021">13-07-2021</option>
                    </select>
                  </th>
                  <th class="text-center-search">
                    Risk Profile (high,standard)
                    <select
                      name="risk-profile"
                      id="risk-profile"
                      class="form-control"
                    >
                      <option></option>
                    </select>
                  </th>
                </tr>
              </thead>
            </table>

            <button type="button" class="search" onClick={functionToExecute}>
              SEARCH
            </button>
            <button
              type="button"
              value="reset"
              class="search"
              id="revert"
              onClick={functionToReset}
            >
              RESET FIELDS
            </button>
          </div>
        </div>
      </div>
      <div className="table display-try">
        <table>
          <tr>
            <td>Favorite</td>
            <td className="display-try2">Country</td>
            <td>ITB</td>
            <td>Product</td>
            <td>Target group</td>
            <td>Total tender volume</td>
            <td>Submission date</td>
            <td>First delivery date</td>
          </tr>
          {data.map((grp) => (
            <tr>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </td>

              <td className="display-try2">{grp.country}</td>
              <td className="display-try2">{grp.itb}</td>
              <td className="display-try2">{grp.product}</td>
              <td className="display-try2">{grp.target}</td>
              <td className="display-try2">{grp.tender}</td>
              <td className="display-try2">{grp.sub}</td>
              <td>{grp.del}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Search;
