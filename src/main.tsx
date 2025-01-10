import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./app-layout/index.tsx";
import { ActionSelector } from "./action-selector/index.tsx";
import { Home } from "./home/index.tsx";
import { WatchSelector } from "./watch-selector/index.tsx";
import { Watch } from "./watch/index.tsx";
import { StatsLogin } from "./stats-login/index.tsx";
import { StatsSelector } from "./stats-selector/index.tsx";
import { Stats } from "./stats/index.tsx";
import { AppState } from "@/app-state";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppState>
      <BrowserRouter basename="tfm">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="action" element={<ActionSelector />} />
            <Route path="watch-selector" element={<WatchSelector />} />
            <Route path="watch" element={<Watch />} />
            <Route path="stats-login" element={<StatsLogin />} />
            <Route path="stats-selector" element={<StatsSelector />} />
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState>
  </StrictMode>,
)
