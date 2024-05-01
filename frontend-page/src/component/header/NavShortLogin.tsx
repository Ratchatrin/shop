import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/slicer";
interface state {
  user: {
    userData: { cart: string };
    error: boolean;
    loading: boolean;
  };
}
function NavShort() {
  const userData = useSelector((state: state) => state.user.userData);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header">
        <div className="navigator">
          <div className="navbar bg-base-100">
            <Link to="/home">
              <img
                src="https://www.thebrandshopbw.com/wp-content/uploads/2021/11/Logo_Long_Black.png"
                alt=""
              />
            </Link>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <Link to="/Cart">
                      <span className="badge badge-sm indicator-item">
                        {userData ? <>{userData.cart.length}</> : <></>}
                      </span>
                    </Link>
                  </div>
                </div>
                {/* <div
                  tabIndex={0}
                  className="mt-2 z-[1] card card-compact dropdown-content w-fit bg-base-100 shadow"
                >
                  <div className="card-body">
                    {userData ? (
                      <>
                        {userData.cart.map((product) => {
                          return (
                            <div className="grid grid-cols-2">
                              <img
                                src={product.image}
                                alt=""
                                className="w-10 h-10"
                              />
                              <p>Name : {product.productname}</p>
                              <p>Color : {product.color}</p>
                              <p>Price : ${product.price}</p>
                              <p>Amount : {product.amount}</p>
                              <button className="btn btn-error text-xs p-2">
                                delete
                              </button>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 h-fit menu">
                    <p className="align-middle">&equiv;</p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
                >
                  <div>
                    <li>
                      <div className="avatar ">
                        <div className="w-16 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                    </li>
                    <li
                      onClick={() => {
                        dispatch(userLogout(null));
                      }}
                    >
                      <Link to="/home">Logout</Link>
                    </li>
                  </div>
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  <li>
                    <Link to="/product/men">men</Link>
                  </li>
                  <li>
                    <Link to="/product/women">women</Link>
                  </li>
                  <li>
                    <Link to="/product/kids">kids</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavShort;
