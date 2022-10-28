import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
// import './BNB.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenAddress, tokenAbi } from '../Utils/token'
import { contractAddress, contractAbi, contractAbiBNB, contractAddressbnb } from '../Utils/contract'
import  Spinner from '../Components/Spinner/Spinner'
import './Login_main.css'
import { toast } from 'react-toastify'
import { loadWeb4 } from '../api2.js'

export default function Registration_with_BNB({ notify }) {
  const [loader, setloader] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  let [matic, setmatic] = useState(' ')
  let [ule, setule] = useState(' ')
  let [uid, setuid] = useState('')
  const [address, setaddress] = useState('')
  const [connected, setconnected] = useState('MetaMask is not connected..!..Wait...')

  const callapi = async (position, sellCall) => {
    setloader(true)

    console.log('position', position)
    
      let res = await axios.post('https://ulematic-api.herokuapp.com/registration', {
        sid: uid,
        accountnumber: address,
        position: position,
        amount: 10,
        paymentType:"BNB",
        traxn: sellCall,
        // traxn: "0x20938baa39acbdc75b1e6b192a1f4a9782d353c69ea25c80db09a89205d37125"
      })

      if (res.data.data == "waiting") {
        console.log(res.data)
        // localStorage.setItem('user_Id', uid)
        setloader(true)
        setTimeout(() => {
            callLoginApi()
        }, 60000);
        toast.success('Registered Successfully')

    } else {
        toast.error('Account Already Resgistered with this ID')
        navigate('/Login_main')

    }
    
  }
  const callLoginApi = async () => {
  
    let res = await axios.get(`https://ulematic-api.herokuapp.com/login?id='${address}'`)
    console.log('login_data', res)
    if (res.data.data !== 0) {
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('user', JSON.stringify(res.data.data))
      toast.success('Login Successfully')
      navigate('/Dashboard/Home')
    } else {
      toast.error('Something went wrong ! ')
    }
    setloader(false)
    
  }
  const ConnectToMetaMask = async () => {
    let acc = await loadWeb4()
    if (acc == 'No Wallet') {
      notify('No Wallet')
    } else if (acc == 'Wrong Network') {
      notify('Wrong Network')
    } else {
      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Register')
    }
  }
  const cotractCall = async (position) => {
    setloader(true)

    let acc = await loadWeb4()
    if (acc == 'No Wallet') {
      toast.error('No Wallet')
    } else if (acc == 'Wrong Network') {
      toast.error('Wrong Network')
    } else {
      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Register')

      ule = ule.toString()
      ule = window.web3.utils.toWei(ule)
      matic = matic.toString()
      matic = window.web3.utils.toWei(matic)
      // console.log("ULE",ule);
      // console.log("matic",matic);
      try {
        let contract = await new window.web3.eth.Contract(contractAbiBNB, contractAddressbnb)
        let token = await new window.web3.eth.Contract(tokenAbi, tokenAddress)
        let approveCall = await token.methods.approve(contractAddressbnb, ule).send({ from: acc })
        toast.success('Approved')
        let sellCall = await contract.methods.UlebuyRouter(ule).send({ from: acc, value: matic })
        toast.success('Transection Succesfull')
        sellCall = sellCall.transactionHash
        callapi(position, sellCall)
        setloader(false)

        
      } catch (err) {
        console.log('error while calling fuction sell', err)
        setloader(false)
        
      }
    }
  }
  const callMaticUrliApi = async () => {
    let res = await axios.get(`https://ulematic-api.herokuapp.com/live_rate_bnb`)
    setmatic(Number(res.data.data[0].usdperunit) * 10)
    console.log('BNB', Number(res.data.data[0].usdperunit) * 10)
  }
  const callUleApi = async () => {
    let res = await axios.get(`https://ulematic-api.herokuapp.com/live_rate_Ule_bnb`)
    setule(( Number(res.data.data[0].usdperunit)) * 10)
    console.log('ULE',  res.data.data[0].usdperunit)
  }

  useEffect(() => {
    setloader(true)
    ConnectToMetaMask()
    callUleApi()
    callMaticUrliApi()

    setloader(false)
    setIsLoading(false)
  }, [])
  return (
    <div>
      <div className="row m-0 justify-content-center align-items-center" style={{ height: '100vh' }}>
        {loader == true ? <Spinner /> : <></>}
        <div className=" col-md-6 col-lg-3  mainForm">
          <div className="main_form">
            <h4 className="hh ">Registration With BNB</h4>
            <p className="peera">Automatic login if you have MetaMask wallet:</p>

            <img src="bnblogo.png" width="150px" alt="" />
            {connected == 'MetaMask is not connected..!..Wait...' ? (
              <p className="peera2" style={{ color: 'red' }}>
                {connected}
              </p>
            ) : (
              <p className="peera2" style={{ color: 'green' }}>
                {connected}
              </p>
            )}

            <div className="batan">
              <button
                className="btn left-btn-styl loginbtn text-de lg-btn"
                onClick={() => {
                  let modelRegister = document.querySelector('.modelRegister')
                  modelRegister.classList.remove('d-none')
                  modelRegister.classList.add('d-flex')
                }}
              >
                Register
              </button>

              <div className=" w-100 h-100 d-none justify-content-center align-items-center  position-absolute  modelRegister">
                <div className="  bord bord1 border-dark py-3 px-5 flex-column justify-content-center align-items-center d-flex main_form mainForm">
                  <h4 className=" text-dark fs-5 my-3 color">Enter Upline ID</h4>
                  <input
                    type={'number'}
                    className="btn left-btn-styl text-de lg-btn"
                    onChange={(e) => {
                      setuid(e.target.value)
                    }}
                  />
                  <div className=" mt-4">
                    <button
                      className="btn left-btn-styl loginbtn text-de lg-btn px-3 mx-2"
                      onClick={() => {
                        if (uid.length > 0) {
                          let modelRegister = document.querySelector('.bordd')
                          let modelRegisterR = document.querySelector('.bord')

                          modelRegister.classList.remove('d-none')
                          modelRegister.classList.add('d-flex')
                          modelRegisterR.classList.remove('d-flex')
                          modelRegisterR.classList.add('d-none')
                        }
                      }}
                    >
                      OK
                    </button>
                    <button
                      className="btn left-btn-styl loginbtn text-de lg-btn px-3 mx-2 "
                      onClick={() => {
                        let modelRegister = document.querySelector('.modelRegister')
                        modelRegister.classList.remove('d-flex')
                        modelRegister.classList.add('d-none')
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div
                  className="  bordd bord1 border-dark py-2 px-5 flex-column justify-content-center align-items-center d-none"
                  style={{ marginLeft: '-4%' }}
                >
                  <h4 className=" text-dark fs-5 my-3 color">Referral Confirmation</h4>
                  <p>Your Current Referral ID is {uid}</p>
                  <div className=" d-flex flex-row align-items-center justify-content-center my-2">
                    <p className=" p-0  m-0">BNB</p>{' '}
                    <input className="input1 mx-2"  value={matic} disabled type={'number'} />
                    <p className=" p-0  m-0">ULE</p>{' '}
                    <input className="input1 mx-2" value={ule} disabled type={'number'} />
                  </div>
                  <select className="boxset" name="position">
                    <option value={1}>Left</option>
                    <option value={2}>Right</option>
                  </select>
                  <div className=" mt-4">
                    <button
                      className="btn bt loginbtn px-1 mx-1 mt-2 proc"
                      style={{ marginBottom: '10px' }}
                      onClick={async () => {
                   
                        let position = document.getElementsByName('position')[0].value
                        await cotractCall(position)

                        let modelRegister = document.querySelector('.modelRegister')
                        let modelRegisterR = document.querySelector('.bord')
                        modelRegisterR.classList.remove('d-none')
                        modelRegisterR.classList.add('d-flex')

                        let modelRegisterRR = document.querySelector('.bordd')
                        modelRegisterRR.classList.remove('d-flex')
                        modelRegisterRR.classList.add('d-none')

                        modelRegister.classList.remove('d-flex')
                        modelRegister.classList.add('d-none')
                      }}
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <div class="spinner-border text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                      Proceed
                    </button>
                    {/* <br /> */}
                    <button
                      className="btn bt loginbtn "
                      onClick={() => {
                        let modelRegister = document.querySelector('.bordd')
                        let modelRegisterR = document.querySelector('.bord')

                        modelRegister.classList.remove('d-flex')
                        modelRegister.classList.add('d-none')
                        modelRegisterR.classList.remove('d-none')
                        modelRegisterR.classList.add('d-flex')
                      }}
                    >
                      No I want to change ID
                    </button>
                  </div>
                </div>
              </div>
              <input
                className="btn left-btn-styl text-de lg-btn"
                placeholder="Please enter ID or Metamask address"
                onChange={(e) => {
                  setuid(e.target.value)
                }}
              />
              <div
                className="btn left-btn-styl loginbtn text-de lg-btn"
                onClick={() => {
                  callLoginApi()
                }}
              >
                Connect to Wallet
              </div>
              <button
                className="btn left-btn-styl loginbtn text-de lg-btn"
                onClick={() => {
                  navigate('/Login_main')
                }}
              >
                Login
              </button>
              <button
                className="btn left-btn-styl loginbtn text-de lg-btn"
                onClick={() => {
                  navigate('/')
                }}
              >
                Go To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
