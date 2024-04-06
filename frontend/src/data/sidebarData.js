import { MdLeaderboard, MdAssignment, MdDashboard } from "react-icons/md";
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
    name: "Classmates",
    icon: IoPeopleSharp,
    links: "/classmates",
  },
  {
    name: "Assignments",
    icon: MdAssignment,
    links: "/assignments",
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
