import { Route, Routes } from "react-router-dom";
import Watchlist from "../layout/Watchlist/Watchlist";
import Markets from "../layout/Markets/Markets";
import Info from "../layout/Info/Info";
import Feedback from "../layout/Feedback/Feedback";
import Docs from "../layout/Docs/Docs";
import Pricing from "../layout/Pricing/Pricing";
import ForMe from "../layout/ForMe/ForMe";

const AppRouter = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Markets />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/info" element={<Info />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/for-me" element={<ForMe />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
