import { MdLeaderboard, MdAssignment } from "react-icons/md";
import { FaChartArea, FaHome, FaPhotoVideo } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

export const sidebarData = [
  {
    name: "Dashboard",
    icon: FaHome,
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
    name: "Visualization",
    icon: FaChartArea,
    links: "/visualization",
  },
];
