import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "@/components/AppLayout";
import ExpensesPage from "@/pages/ExpensesPage";
import SummaryPage from "@/pages/SummaryPage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="expenses" element={<ExpensesPage />} />
                    <Route path="summary" element={<SummaryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
