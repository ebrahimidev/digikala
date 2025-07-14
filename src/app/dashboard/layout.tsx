"use client"
import useAdminDigikalaContext from "@/components/hook/useAdminDigikalaContext";
import Aside from "@/components/layout/admin/Aside";

interface Props {
  children: React.ReactNode;
  handleLogout: ()=>void
}

function layout({ children }: Props , ) {

  const { handleLogout } = useAdminDigikalaContext();
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Aside handleLogout={handleLogout} />

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">خوش آمدی محمد 👋</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
          >
            خروج
          </button>
        </div>

        {children}
      </main>
    </div>
  );
}

export default layout;
