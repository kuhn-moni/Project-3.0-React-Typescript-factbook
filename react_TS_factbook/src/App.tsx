import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
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
import { Container, Nav, Navbar } from "react-bootstrap";

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
        {/* <Route path="map" element={<DataMaps />} /> */}
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
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>{" "}
              <Nav.Link href="main">Main</Nav.Link>{" "}
              <Nav.Link href="about">About</Nav.Link>{" "}
              {user ? (
                <>
                  <Nav.Link href={"/chat"}>Chat</Nav.Link>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <Nav.Link href={"login"}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: "60px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
