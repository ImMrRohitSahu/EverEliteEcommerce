import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [index, setIndex] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [everEliteUserData, setEverEliteUserData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    everEliteUserData.filter((iUser, i) => {
      if (i === index && index !== null) {
        setFirstName(iUser.fullName);
        setEmail(iUser.email);
        setMobile(iUser.mobileNumber);
      }
    });
  }, [everEliteUserData, index]);

  useEffect(() => {
    const retrieveData = localStorage.getItem("EverEliteUserDataKey");
    if (retrieveData) {
      const userData = JSON.parse(retrieveData);
      setEverEliteUserData(userData);
    }

    const storedIsAuth = sessionStorage.getItem("isAuth");
    if (storedIsAuth) {
      setIsAuth(JSON.parse(storedIsAuth));
    }

    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const { firstName, email, mobile } = JSON.parse(storedUser);
      setFirstName(firstName);
      setEmail(email);
      setMobile(mobile);
    }

    const storedIndex = sessionStorage.getItem("index");
    if (storedIndex) {
      setIndex(parseInt(storedIndex));
    }
  }, []);

  const contextLoginHandler = (value) => {
    setIndex(value);
    setIsAuth(true);

    // Save user data and index in session storage
    sessionStorage.setItem("isAuth", JSON.stringify(true));
    sessionStorage.setItem("user", JSON.stringify({ firstName, email, mobile }));
    sessionStorage.setItem("index", JSON.stringify(value));
  };

  const contextLogoutHandler = () => {
    // Clear session storage when logging out
    sessionStorage.removeItem("isAuth");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("index");

    // Reset state variables and set index to null
    setFirstName("");
    setEmail("");
    setMobile("");
    setIndex(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        contextLoginHandler,
        contextLogoutHandler,
        everEliteUserData,
        firstName,
        email,
        mobile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
    children: PropTypes.string
}

export default AuthContextProvider;
