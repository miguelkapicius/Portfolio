import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";

export function App() {
    return (
        <div className="flex max-w-full overflow-x-hidden p-2 flex-col min-h-screen">
            <Header />
            <div className="mt-32 flex-grow flex">
                <div className="max-w-full md:max-w-5xl mx-auto flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
