import "./App.css";
import { PublicRouter } from "./Router/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/Default-Layout";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {PublicRouter.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
