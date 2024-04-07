import { sidebarData } from "../data/sidebarData";
import { FiMoreVertical } from "react-icons/fi";
import { LuChevronLast, LuChevronFirst } from "react-icons/lu";
import { useSidebarState } from "../hooks/useSidebarState";
import { useAuthContext } from "../context/AuthContext";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../hooks/useLogout";

// const SidebarContext = createContext();

export default function Sidebar() {
  const { loading, logout } = useLogout()
  const { authUser } = useAuthContext();
  console.log(authUser);
  const { expanded, setExpanded } = useSidebarState();

  return (
    <aside className="h-screen fixed z-10">
      <nav
        className="h-full flex flex-col bg-black shadow-lg text-white"
        style={{ width: expanded ? "20vw" : "4vw" }}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <a className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
            }`} href="#">
            Artify
          </a>
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}
          <button
            onClick={() => setExpanded((current) => !current)}
            className="p-1.5 rounded-lg bg-transparent hover:bg-yellow-200"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {sidebarData.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src={authUser.profilePic || "https://res.cloudinary.com/gaavwale/image/upload/v1712414241/public/szwigkyzs9xvoagviu8t.png"}
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">{authUser.username}</h4>
            </div>
            <div className='mt-auto'>
              {!loading ? (
                <TbLogout2 className="w-7 h-7 cursor-pointer text-white" onClick={logout} />
              ) : (
                <span className="loading loading-spinner"></span>
              )
              }
            </div>
          </div>
        </div>
      </nav>
    </aside>

  );
}

export function SidebarItem({ item }) {
  const { expanded } = useSidebarState();

  const Icon = item.icon;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        hover:bg-gray-800 text-white
    `}
    >
      <a href={item.links} className="flex items-center">
        <Icon />
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
            }`}
        >
          {item.name}
        </span>
      </a>
    </li>
  );
}
