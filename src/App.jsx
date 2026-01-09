import "./App.css";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
    <Header />
      <AppRouter />
      <Footer />
    </>
  );
};
