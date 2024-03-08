import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdHelpCenter,
    MdOutlineTask,
    MdEventAvailable,
  } from "react-icons/md";
  
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          subtitle: "Report Print",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          subtitle: "Calendar - Student",
          path: "/dashboard/calendar",
          icon: <MdOutlineTask />,
        },
        {
          subtitle: "Calendar - Admin",
          path: "/dashboard/adminCalendar",
          icon: <MdOutlineTask />,
        },
        {
          subtitle: "Blog",
          path: "/dashboard/blog",
          icon: <MdEventAvailable />,
        },
      ],
    },
    {
      title: "User",
      list: [
        // {
        //   subtitle: "Settings",
        //   path: "/dashboard/settings",
        //   icon: <MdOutlineSettings />,
        // },
        {
          subtitle: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        
      ],
    },
  ];
  
  export default menuItems
  