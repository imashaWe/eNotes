import {useRoutes} from "react-router-dom";
import routes from "./config/routes";

function App() {
    const router = useRoutes(routes);
    return router;
}

export default App;
