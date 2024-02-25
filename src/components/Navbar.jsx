import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchData } from "../features/userDetailSlice";

const Navbar = () => {
  const { users, query } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchData(e.target.value.trimStart()));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h4 className="navbar-brand">RTK</h4>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Post ({users.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
