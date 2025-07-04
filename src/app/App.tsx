import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import { RoutesComponent } from "./providers/routes/Routes";
import "./styles/App.css";
import { Provider } from "react-redux";
import { store } from "./providers/store/store";

function App() {
  return (
    <div className="w-full bg-[#0D0F14]">
      <BrowserRouter>
        <ErrorBoundary>
          <Provider store={store}>
            <RoutesComponent />
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
