import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Main from "./views/Main";
import NoMatch from "./views/NoMatch";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import Details from "./views/Details";
import ProtectedLayout from "./views/ProtectedLayout";
import Login from "./views/Login";
import Chat from "./views/Chat";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NoMatch />}>
        <Route
          element={
            <ProtectedLayout>
              <Outlet />
            </ProtectedLayout>
          }
        >
          <Route path="main" element={<Main />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="main/:name" element={<Details />} />
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

const Root = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/main">Main</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        {user ? (
          <>
            <Link to={"/chat"}>Chat</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to={"login"}>Login</Link>
        )}
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
