// import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'
import { useEffect, useState } from "react";
import Table from '../../Components/Table/Table'
import Table_Buttons from '../../Components/Table_Buttons/Table_Button'
import { API } from "../../Redux/actions/API";

function Forum_Direct() {
    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.get(`https://ulematic-api.herokuapp.com/directLegBusiness?id=778899`)
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
                console.log("item", item);



                arr?.push({
                    sr: index + 1,
                    package: item?.package,
                    investment: item?.selfbv,
                    user_id: item?.uid,
                    date: item?.edate,
                    team_business: item?.teambv ,
                    group_business: item?.gbv 


                });



            }
            )
            console.log("responce", arr);

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }
    useEffect(() => {
        referral_API()

    }, [])
    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [direct_leg_business, set_direct_leg_business] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Investment', accessor: 'investment' },
            { Header: 'Team Business', accessor: 'team_business' },
            { Header: 'Group Business', accessor: 'group_business' }

        ]
    });
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Forum Direct</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Details / Forum Direct</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!--end breadcrumb-->
                <!--end breadcrumb--> */}
                <div className="table-responsive">
                <Table
                    data={currentPost}
                    columns={direct_leg_business.cols}
                />
                

                    <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
                </div>
                {/* <!--end row--> */}
            </div>
        </div>
        {/* <!----======body section end=====----> */}
        <Footer />
    </div>
  )
}

export default Forum_Direct