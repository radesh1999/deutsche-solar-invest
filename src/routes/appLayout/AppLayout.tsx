import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar";

const AppLayout: React.FC = () => (
    <div className="flex h-screen bg-brand-light-gray overflow-hidden">
        <div className="w-fit h-full overflow-y-auto bg-white shadow-md">
            <Sidebar />
        </div>
        <main className="flex-1 h-full overflow-hidden bg-[#EBECF0]">
            <Outlet />
        </main>
    </div>
);

export default AppLayout;