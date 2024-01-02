import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./layouts";

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, ind) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={ind}
                            path={route.path}
                            element={
                                <MainLayout>
                                    <Page />
                                </MainLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
