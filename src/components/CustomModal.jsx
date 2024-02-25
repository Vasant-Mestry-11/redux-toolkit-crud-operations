/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const { users } = useSelector((state) => state.user);
  const singleUser = users.find((ele) => ele.id === id);

  return (
    <div className="modalBackground" onClick={() => setShowPopup(false)}>
      <div className="modalContainer">
        <h1>Name: {singleUser.name}</h1>
        <h2>Gender: {singleUser.gender}</h2>
        <p>Email: {singleUser.email}</p>
        <p>Age: {singleUser.age}</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
