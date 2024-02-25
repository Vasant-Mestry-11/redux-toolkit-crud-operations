import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { loading, users, query } = useSelector((state) => state.user);
  const [id, setId] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleRadioChange = (e) => {
    setRadioData(e.target.value);
  };

  return (
    <div>
      {showPopup && <CustomModal id={id} setShowPopup={setShowPopup} />}
      <h2>All Data</h2>
      <input
        className="form-check-input"
        name="gender"
        value=""
        type="radio"
        onChange={handleRadioChange}
        checked={radioData === ""}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        type="radio"
        checked={radioData === "male"}
        onChange={handleRadioChange}
        value="male"
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="female"
        type="radio"
        checked={radioData === "female"}
        onChange={handleRadioChange}
      />
      <label className="form-check-label">Female</label>
      <div>
        {users &&
          users
            .filter((user) =>
              user.name
                .trim()
                .toLowerCase()
                .includes(query.trim().toLowerCase())
            )
            .filter((user) =>
              radioData === "" ? user : user.gender === radioData
            )
            .map((user) => (
              <div className="card w-50 mx-auto my-2" key={user.id}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {user.email}
                  </h6>
                  <p className="card-text">{user.gender}</p>
                  <button
                    href="#"
                    className="card-link"
                    onClick={() => [setId(user.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${user.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => {
                      dispatch(deleteUser(user.id));
                    }}
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
