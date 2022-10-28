import React, { useState , useRef , useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { API } from "../../Redux/actions/API";
import Chart from 'react-apexcharts'
import Total_Earning from '../../Components/Total Earning/Total Earning'


function Dashboard() {
  const [withdrawal, setWithdrawal] = useState()
  const [netBalance, setNetBalance] = useState()
  const [id, setID] = useState()
  const [leftReff, setLeftReff] = useState()
  const [rightReff, setRightReff] = useState()
  const [investment, setInvestment] = useState()
  const [leftBuss, setLeftBuss] = useState()
  const [rightBuss, setRightBuss] = useState()
  const [referral, setReferral] = useState()
  // const [withdrawal, setWithdrawal] = useState()
  // const [netBalance, setNetBalance] = useState()

  const DashboardAPI = async () => {


    try {

      let res = await API.get(`/get_betawallet?id=778899`)
      res = res.data.data[0]
      console.log(" res", res);
      setID(res.uid);
      setLeftReff(res.left_direct)
      setRightReff(res.right_direct)
      setInvestment(res.TokenInUSD)
      localStorage.setItem("ID", res.TokenInUSD);
      setWithdrawal(res.withdrawal)
      setNetBalance(res.netbal)
      setLeftBuss(res.left_direct_business)
      setRightBuss(res.right_direct_business)
      setReferral(res.registration_directIncome)
    }
    catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  }


  useEffect(() => {
    // setloader(true)
    DashboardAPI()
    // setloader(false)
  }, [])

  // console.log("resdesh", dash);


  const IDHERE = localStorage.getItem('ID')
  let [earning, setearning] = new useState({
    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            colors: '#293450',
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '90%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: '#fff',
              fontSize: '1.5rem',
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: 'solid',
      },
      colors: ['#ffffff'],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  })

  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);

  // function copyToClipboard(e) {
  //   textAreaRef.current.select();
  //   document.execCommand('copy');
  //   e.target.focus();
    
  // };

  // const [copySuccess1, setCopySuccess1] = useState('');
  // const textAreaReflink= useRef(null);

  // function copyToClipboardlink(e) {
  //   textAreaReflink.current.select();
  //   document.execCommand('copy');
  //   e.target.focus();
    
  // };



  return (
    <div>
      <Navbar />
      {/* <!----======body section start=====----> */}
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10 overflow-hidden">
                    <div className="card-body">
                      <p>My ID</p>
                      <h3>{id}</h3>
                      {/* <!-- <p className="mb-0">Active Participate<span className="float-end">500k</span></p> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>My Referral</p>
                      <div className="Left_Right">
                        <h6>
                          {leftReff}
                          <br />
                          Left
                        </h6>
                        <h6>
                         {rightReff}
                          <br />
                          Right
                        </h6>
                      </div>
                      {/* <!-- <div className="Left_Right">
                                            <h6>
                                                0000<br>
                                                Left Business
                                            </h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <h6>
                                                0000<br>
                                                Right Business
                                            </h6>
                                        </div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>My Investment</p>
                      <div className="Left_Right">
                        <h6>
                         {investment}
                          <br />
                          Total
                        </h6>
                        {/* <!--<h6>
                                                0000<br>
                                                Received
                                            </h6>--> */}
                      </div>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    {/* <!--  <div id="twitter-followers"></div> --> */}
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    {/* <div className="card-body text-center px-0">
                      <h6>Total Earning</h6>
                      <div className="chart-container-10 d-flex align-items-center justify-content-center"> */}
                        <div id="">
                        <Total_Earning
          data={{ }}
          opt={earning}
        >
          <div id=""></div>
        </Total_Earning>
                        </div>
                      {/* </div>
                    </div> */}
                    <div className="card-footer border-0 bg-transparent pb_1">
                      <div className="row align-items-center text-center">
                        <div className="col">
                          <h5 className="mb-0">{withdrawal} $</h5>
                          <small className="extra-small-font">Total Withdrawal</small>
                        </div>
                        <div className="col border-end">
                          <h5 className="mb-0">{netBalance} $</h5>
                          <small className="extra-small-font">Net Balance</small>
                        </div>
                      </div>
                    </div>

                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--end row--> */}
            </div>

            <div className="col-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>My Referral</p>
                      <div className="Left_Right">
                        <h6>
                        {leftReff}
                          <br />
                          Left
                        </h6>
                        <h6>
                        {rightReff}
                          <br />
                          Right
                        </h6>
                      </div>
                      {/* <!-- <div className="Left_Right">
                                            <h6>
                                                0000<br>
                                                Left Business
                                            </h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <h6>
                                                0000<br>
                                                Right Business
                                            </h6>
                                        </div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Team Business</p>
                      <div className="Left_Right">
                        <h6>
                        {leftBuss}
                          <br />
                          Left
                        </h6>
                        <h6>
                          {rightBuss}
                          <br />
                          Right
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <div className="card radius-10" style={{height: "123px"}}>
                    <div className="card-body">
                      <p>Club Downline</p>
                      <div className="Left_Right">
                        <h6 style={{marginTop: "20px"}}>
                          <p id="demo1" style={{ marginBottom: '0px', visibility: 'hidden' }}></p>
                          Time
                        </h6>
                        <h6 style={{marginTop: "20px"}}>
                          <p id="demo" style={{ marginBottom: '0px', visibility: 'hidden' }}></p>
                          Time
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Affiliate Link Left</p>
                      <div className="copy_btn_set">
                      <div className="wdg-box bxset primary">
                          <input type="text" className="wdg-input-box" id="myInput" readOnly="" ref={textAreaReflink} value="http://localhost:3000/Register_main?referrallink=778899&position=Left" />
                          <div className="fast-msg-box"></div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="wdg-actions copy_btn_set2">
                          <button type="button" className="copy_btn_set3" onClick={copyToClipboardlink}>
                            <span style={{ fontSize: '15px' }} >
                            copy
                            {copySuccess1}
                            </span>
                          </button>
                          
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Affiliate Link Right</p>
                      <div className="copy_btn_set">
                        <div className="wdg-box bxset primary">
                          <input type="text" className="wdg-input-box" id="myInput" readOnly="" ref={textAreaRef} value="http://localhost:3000/Register_main?referrallink=${uId}&position=Right" />
                          <div className="fast-msg-box"></div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="wdg-actions copy_btn_set2">
                          <button type="button" className="copy_btn_set3" onClick={copyToClipboard}>
                            <span style={{ fontSize: '15px' }} >
                            copy
                            {copySuccess}
                            </span>
                          </button>
                          {/* <script>
                                                        function myFunction() {
                                                            var copyText = document.getElementById("myInput");
                                                            copyText.select();
                                                            copyText.setSelectionRange(0, 99999)
                                                            document.execCommand("copy");

                                                        }
                                                    </script> */}
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end row--> */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="col-md-12">
                  <div className="prgs">
                    <img src="assets/images/ule.png" id="dynamicwidth" style={{ marginLeft: '7.77%' }} />

                    <div id="myProgress">
                      <div id="myBar" style={{ width: '7.77%', backgroundColor: 'green' }}></div>
                    </div>
                  </div>
                  <div style={{ fontSize: 'medium', color: '#fff' }}>
                    You have Earned Total 9.77% (58$) out of 400% (600$) of Total Investment (200$).
                  </div>

                  <br />
                </div>
              </div>
            </div>

            <div className="row">
              {/* <!--  <div className="col-12 col-lg-6 col-xl-6">
		                <div className="card radius-10">
		                    <div className="card-body">
		                        <div className="d-flex align-items-center">
		                            <div>
		                                <h6 className="mb-0">All Income</h6>
		                            </div>
		                           
		                        </div>
		                        <div className="mt-1 mb_1">
                                    <div className="income_name">
                                        <h4>Referral Income</h4>
                                        <h4>123$</h4>
                                    </div>
		                            <div className="progress">
                                        <div className="progress-bar bg-white" style="width:44%"></div>
                                    </div>
		                        </div>
                                <div className="mt-1 mb_1">
                                    <div className="income_name">
                                        <h4>Matching  Income</h4>
                                        <h4>123$</h4>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-white" style="width:80%"></div>
                                    </div>
                                </div>
		                        <div className="mt-1 mb_1">
		                            <div className="income_name">
                                        <h4>Matching Level Income</h4>
                                        <h4>123$</h4>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-white" style="width:60%"></div>
                                    </div>
		                        </div>
		                        <div className="mt-1 mb_1">
		                            <div className="income_name">
                                        <h4>ROI Income</h4>
                                        <h4>125$</h4>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-white" style="width:70%"></div>
                                    </div>
		                        </div>
		                        <div className="mt-1 mb_1">
		                            <div className="income_name">
                                        <h4>Reward Income</h4>
                                        <h4>123$</h4>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-white" style="width:80%"></div>
                                    </div>
		                        </div>
		                    </div>
		                </div>
		            </div> --> */}
              <div className="col-12 col-lg-3 col-xl-3">
                <div className="card radius-10">
                  <div className="card-body">
                    <p>Withdrawal Share Bonus</p>

                    <div className="Prg_container">
                      <div className="barcontainer">
                        <div className="bar" style={{ height: '25%' }}>
                          <p style={{ textAlign: 'center' }}>500</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- <div className="my_10 d-flex align-items-center justify-content-center">
                                        <div className="circle_box">
                                            <div className="circle_box half_raound1">
                                                <svg>
                                                    <circle cx="105" cy="105" r="100"></circle>
                                                    <circle cx="105" cy="105" r="100" style="--percent: 40"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h3>40<span>%</span></h3>
                                                </div>
                                            </div>
                                            <div className="title">
                                                <h2>title</h2>
                                            </div> 
                                        </div>
                                    </div> --> */}
                    {/* <!-- <div id="bounce-rate"></div> --> */}
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 col-xl-5">
                <div className="card radius-10">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="mb-0">All Income</h6>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4>Referral Income</h4>
                        <h4>{referral} $</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '44%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4>Team Bonus</h4>
                        <h4>123$</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4>Matching Level Income</h4>
                        <h4>123$</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4>Sports Bonus</h4>
                        <h4>125$</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="mt-1 mb_1">
                      <div className="income_name">
                        <h4>Reward Income</h4>
                        <h4>123$</h4>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-white" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 col-xl-4">
                <div className="card radius-10" style={{ height: "79px"}}>
                  <div className="card-body">
                    <div className="Global_Position">
                      <h6> Global Position</h6>
                      <div className="Left_Right">
                        <h6>12345</h6>
                      </div>
                    </div>
                    {/* <br /> */}
                   
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress" style={{ height: '7px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-12 col-xl-12">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Rank</p>
                      <div className="Left_Right">
                        <h6>
                          Gold
                          <br />
                          Current Rank
                        </h6>
                        <h6>
                          Name
                          <br />
                          Next Rank
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-12 col-xl-12">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Next Rank</p>
                      <div className="Left_Right">
                        <h6>Gold</h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <div className="col-12 col-lg-6 col-xl-6">
		                <div className="card-group flex-column flex-md-row">
		                    <div className="card border-end mb-0 radius-10 shadow-none">
		                        <div className="card-body text-center">
		                           
		                            <div className="my_10 d-flex align-items-center justify-content-center">
		                                <div className="circle_box">
                                            <div className="circle_box half_raound1">
                                                <svg>
                                                    <circle cx="105" cy="105" r="100"></circle>
                                                    <circle cx="105" cy="105" r="100" style="--percent: 0; stroke: #edebe7;"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h3>300<span>%</span></h3>
                                                </div>
                                            </div>
                                            
                                        </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="card mb-0 radius-10 shadow-none">
		                        <div className="card-body text-center">
		                           
		                            <div className="my_10 d-flex align-items-center justify-content-center">
		                                <div className="circle_box">
                                            <div className="circle_box half_raound1">
                                                <svg>
                                                    <circle cx="105" cy="105" r="100"></circle>
                                                    <circle cx="105" cy="105" r="100" style="--percent: 40"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h3>40<span>%</span></h3>
                                                </div>
                                            </div>
                                            
                                        </div>
		                            </div>
                                    <p>Your total earning is 14200.25 USD out of 150000 USD (Your earned 9.4668% out of 300% of your investment )</p>
		                        </div>
		                    </div>
		                </div>
		            </div> --> */}
            </div>
            {/* <!--end row--> */}
          </div>
        </div>
        {/* <!-- <div style="height:4rem"></div> --> */}
        {/* <!----======body section end=====----> */}
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
