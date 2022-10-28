import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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
                <NavLink to="/Profile">
                  <img src={profile} width="40px" />
                </NavLink>
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
                <NavLink to="/">
                  <img src="assets/images/logo.png" />
                </NavLink>
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
                    <NavLink to="/Home">
                      <i className="bx bx-home-circle"></i>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={history} />
                      Activation
                    </NavLink>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/Activation_matic">
                          <i className="bx bx-right-arrow-alt"></i> Activation MATIC
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Activation_bnb">
                          <i className="bx bx-right-arrow-alt"></i> Activation BNB
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ActivateHistory">
                          <i className="bx bx-right-arrow-alt"></i> Activate History
                        </NavLink>
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
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-line-chart"></i> All Reward
                    </NavLink>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/Registration_Direct_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Registration Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Registration_Quarterly_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Registration Quarterly Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Daily_Yield_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Daily Yield Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Direct_Referral_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Direct Referral Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Augmented_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Augmented Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Forum_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Forum Reward
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Auto_Club_Reward">
                          <i className="bx bx-right-arrow-alt"></i>Auto Club Reward
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-atom"></i> History
                    </NavLink>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/Withdrawal_Matic">
                          <i className="bx bx-right-arrow-alt"></i>Withdraw Matic
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Withdrawal_BNB">
                          <i className="bx bx-right-arrow-alt"></i>Withdraw BNB
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Withdrawal_history">
                          <i className="bx bx-right-arrow-alt"></i>Withdrawal History
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-group"></i> Team Details
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <NavLink to="/My_Team">
                          <i className="bx bx-right-arrow-alt"></i>My Team
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/My_Referral">
                          <i className="bx bx-right-arrow-alt"></i>My Referral
                        </NavLink>
                      </li>
                     
                      <li>
                        <NavLink to="/My_Forum">
                          <i className="bx bx-right-arrow-alt"></i>My Forum
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Forum_View">
                          <i className="bx bx-right-arrow-alt"></i>Forum View
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Club_View">
                          <i className="bx bx-right-arrow-alt"></i>Club View
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Club_Downline">
                          <i className="bx bx-right-arrow-alt"></i>Club Downline
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Forum_Direct">
                          <i className="bx bx-right-arrow-alt"></i>Forum Direct
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-message-square-edit"></i>Address
                    </NavLink>
                    <ul className="dropdown-menu ul-ip" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/Self_Address">
                          <i className="bx bx-right-arrow-alt"></i>Self Address
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Contract_Address">
                          <i className="bx bx-right-arrow-alt"></i>Contract Address
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li onClick={() => {
                                        navigate('/Login_main')
                                    }}>
                    <NavLink to="#" >
                      <i className="bx bx-lock"></i> Logout
                    </NavLink>
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
