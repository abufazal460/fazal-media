import "./closeFrend.css"

export default function CloseFriend({user}) {
  console.log(user.profilePicture);
  
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="img not found" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
