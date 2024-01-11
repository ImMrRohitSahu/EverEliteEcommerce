import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageRoute from "./routes/PageRoute";
import AppHeader from "./components/AppHeader/AppHeader";
import FeaturedContextProvider from "./contexts/FeaturedContextApi";
import AppFooter from "./components/AppFooter/AppFooter";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <FeaturedContextProvider>
        <AppHeader />
        <PageRoute />
        <AppFooter />
      </FeaturedContextProvider>
    </AuthContextProvider>
  );
}

export default App;
