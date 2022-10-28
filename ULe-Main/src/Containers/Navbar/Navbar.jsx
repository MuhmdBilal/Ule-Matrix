import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import logo from "../../Assets/logo.png"
import id_green from "../../Assets/id_green.png"
import id_red from "../../Assets/id_red.png";
import profile from "../../Assets/profile.png"
import history from "../../Assets/history.png"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="wrapper">
        <header className="d_none">
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand">
              <div className="topbar-logo-header">
                <div className="">
                  <img src={logo} className="logo" alt="logo icon" />
                </div>
              </div>
              <div className="Id_Profile">
                <h6 className="six">
                  ID:-
                  <img src={id_green} className="id_active" />
                  <img src={id_red} className="id_Inactive" /> 12345
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Profile">
                  <img src={profile} width="40px" />
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {/* <!--end header -->
        <!--navigation--> */}
        <div className="nav_top">
          <div className="nav2 container-fluid px_0">
            <div className="nav-header">
              <div className="nav-title">
                <Link to="/">
                  <img src="assets/images/logo.png" />
                </Link>
              </div>
              <div className="nav-btn">
                <label for="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              <input type="checkbox" name="" id="nav-check" />
              <div className="nav-links">
                <ul>
                  <li>
                    <Link to="/Home">
                      <i className="bx bx-home-circle"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={history} />
                      Activation
                    </Link>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <Link to="/Activation_matic">
                          <i className="bx bx-right-arrow-alt"></i> Activation MATIC
                        </Link>
                      </li>
                      <li>
                        <Link to="/Activation_bnb">
                          <i className="bx bx-right-arrow-alt"></i> Activation BNB
                        </Link>
                      </li>
                      <li>
                        <Link to="/ActivateHistory">
                          <i className="bx bx-right-arrow-alt"></i> Activate History
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <!---<li className="dropdown open3">
                                <a to="#" className="dropbtn"><img src="assets/images/history.png"> Mint NFT</a>
                                <ul className="dropdown-content closenav3">
                                    <li>
                                        <a to="buy_nft.html"><i className="bx bx-right-arrow-alt"></i>Mint NFT</a>
                                    </li>
                                    <li>
                                        <a to="ActivateHistory.html"><i className="bx bx-right-arrow-alt"></i>Minting History</a>
                                    </li>
                                    
                                                              
                                </ul>
                            </li>---> */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-line-chart"></i> All Reward
                    </Link>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <Link to="/Registration_Direct_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Registration Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Registration_Quarterly_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Registration Quarterly Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Daily_Yield_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Daily Yield Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Direct_Referral_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Direct Referral Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Augmented_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Augmented Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Forum_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Forum Reward
                        </Link>
                      </li>
                      <li>
                        <Link to="/Auto_Club_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Auto Club Reward
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-atom"></i> History
                    </Link>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <Link to="/Withdrawal_Matic">
                          <i className="bx bx-right-arrow-alt"></i>Withdraw Matic
                        </Link>
                      </li>
                      <li>
                        <Link to="/Withdrawal_BNB">
                          <i className="bx bx-right-arrow-alt"></i>Withdraw BNB
                        </Link>
                      </li>
                      <li>
                        <Link to="/Withdrawal_history">
                          <i className="bx bx-right-arrow-alt"></i>Withdrawal History
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-group"></i> Team Details
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link to="/My_Team">
                          <i className="bx bx-right-arrow-alt"></i>My Team
                        </Link>
                      </li>
                      <li>
                        <Link to="/My_Referral">
                          <i className="bx bx-right-arrow-alt"></i>My Referral
                        </Link>
                      </li>
                     
                      <li>
                        <Link to="/My_Forum">
                          <i className="bx bx-right-arrow-alt"></i>My Forum
                        </Link>
                      </li>
                      <li>
                        <Link to="/Forum_View">
                          <i className="bx bx-right-arrow-alt"></i>Forum View
                        </Link>
                      </li>
                      <li>
                        <Link to="/Club_View">
                          <i className="bx bx-right-arrow-alt"></i>Club View
                        </Link>
                      </li>
                      <li>
                        <Link to="/Club_Downline">
                          <i className="bx bx-right-arrow-alt"></i>Club Downline
                        </Link>
                      </li>
                      <li>
                        <Link to="/Forum_Direct">
                          <i className="bx bx-right-arrow-alt"></i>Forum Direct
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-message-square-edit"></i>Address
                    </Link>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <Link to="/Self_Address">
                          <i className="bx bx-right-arrow-alt"></i>Self Address
                        </Link>
                      </li>
                      <li>
                        <Link to="/Contract_Address">
                          <i className="bx bx-right-arrow-alt"></i>Contract Address
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li onClick={() => {
                                        navigate('/Login_main')
                                    }}>
                    <Link to="#" >
                      <i className="bx bx-lock"></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end navigation--> */}
      </div>
    </div>
  )
}

export default Navbar
