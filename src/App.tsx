import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";

export function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="mt-32 flex-grow flex">
                <div className="max-w-5xl mx-auto flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
