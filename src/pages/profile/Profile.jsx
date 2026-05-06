import "./profile.css"
import Topbar from "../../components/topBar/TopBar"
import Sidebar from "../../components/sideBar/SideBar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightBar/RightBar"
import post3 from "../../assets/post/3.jpeg"
import img7 from "../../assets/person/7.jpeg"
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={post3}
                alt=""
              />
              <img
                className="profileUserImg"
                src={img7}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

