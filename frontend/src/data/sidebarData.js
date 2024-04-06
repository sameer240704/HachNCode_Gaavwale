import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { FaChartArea, FaPhotoVideo } from "react-icons/fa";
import { IoPeopleSharp, IoMusicalNotes } from "react-icons/io5";

export const sidebarData = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    links: "/dashboard",
  },
  {
    name: "Leaderboard",
    icon: MdLeaderboard,
    links: "/leaderboard",
  },
  {
    name: "Games",
    icon: IoPeopleSharp,
    links: "/games",
  },
  {
    name: "Courses",
    icon: FaPhotoVideo,
    links: "/courses",
  },
  {
    name: "Music",
    icon: IoMusicalNotes,
    links: "/music",
  },
  {
    name: "Visualization",
    icon: FaChartArea,
    links: "/visualization",
  },
];
