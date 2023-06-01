import React from "react";
import "./Favorite.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorite() {
  const history = useHistory();
  const CoursesPage = () => {
    history.push("/login");
  };

  var user = JSON.parse(localStorage.getItem("userInfo"));
  if (user) {
    console.log(user.name);
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/details").then((result) => {
      result.json().then((resp) => {
        console.log("result is here..", resp);
        let newData = [];
        resp.forEach((singleRow) => {
          if (singleRow["favorite"] === true) {
            newData.push(singleRow);
          }
        });
        setData(newData);
      });
    });
  }, []);
  return (
    <div>
      <header class="try1">
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
      <div class="topnav1">
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
      <div className="table table-try4">
        <table>
          <tr>
            <td>Favorite</td>
            <td className="table-try5">Country</td>
            <td>ITB</td>
            <td>Product</td>
            <td>Target group</td>
            <td>Total tender volume</td>
            <td>Submission date</td>
            <td>First delivery date</td>
          </tr>
          {data.map((grp) => (
            <tr>
              <td className="table-try5">&#11088;</td>
              <td className="table-try5">{grp.country}</td>
              <td className="table-try5">{grp.itb}</td>
              <td className="table-try5">{grp.product}</td>
              <td className="table-try5">{grp.target}</td>
              <td className="table-try5">{grp.tender}</td>
              <td className="table-try5">{grp.sub}</td>
              <td className="table-try5">{grp.del}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Favorite;
