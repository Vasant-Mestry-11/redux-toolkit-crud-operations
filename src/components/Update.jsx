import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const [editUserData, setEditUserData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });
  const { users, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      navigate("/read");
    }

    if (id) {
      const currentUser = users.filter((u) => u.id === id);
      setEditUserData((prev) => (currentUser[0] ? currentUser[0] : prev));
    }
  }, [id, navigate, users]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdate = (e) => {
    setEditUserData({
      ...editUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(editUserData)).then(() => navigate("/read"));
  };

  return (
    <div>
      <h2 className="my-2 d-flex justify-content-center">Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={editUserData && editUserData.name}
            onChange={handleUpdate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={editUserData && editUserData.email}
            onChange={handleUpdate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={editUserData && editUserData.age}
            onChange={handleUpdate}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="male"
            type="radio"
            checked={editUserData && editUserData.gender == "male"}
            onChange={handleUpdate}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="female"
            type="radio"
            checked={editUserData && editUserData.gender == "female"}
            onChange={handleUpdate}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
