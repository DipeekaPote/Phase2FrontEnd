import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import {  IoPeopleOutline} from "react-icons/io5";
// import { TbTemplate } from "react-icons/tb";
import { LuWorkflow } from "react-icons/lu";
import { MdFormatListBulletedAdd } from "react-icons/md";
export const menuItems = [
  
  {
    title: "Insights",
    path: "/",
    icon: <AiOutlineAppstoreAdd />,
  },

  {
    title: "Inbox +",
    path: "/inbox",
    icon: <MdOutlineMail />,
  },
  {
    title: "Clients", 
    icon: <IoPeopleOutline />,
    submenus: [
      {
        title: "Accounts",
        path: "/accounts",
        icon: <GoDotFill />
        ,
        
      },
      {
        title: "Contacts",
        path: "/contacts",
        icon: <GoDotFill />,
      },
    ],
  },
  {
    title: "Workflow", 
    icon: <LuWorkflow />,
    submenus: [
      {
        title: "Tasks",
        path: "/marketplace",
        icon: <GoDotFill />,
      },
      {
        title: "Jobs",
        path: "/firmtemplates",
        icon: <GoDotFill />,
      },
      {
        title: "Jobrecurrences",
        path: "/tags",
        icon: <GoDotFill />,
      },
      {
        title: "Pipelines",
        path: "/pipeline",
        icon: <GoDotFill />,
      },
     
    ],
  },
  
{
    title: "Templates", 
    icon: <MdFormatListBulletedAdd />,
    submenus: [
      
      {
        title: "Firm templates",
        path: "/firmtemplates/tasks",
        icon: <GoDotFill />,
      },
     
      // {
      //   title: "Tags",
      //   path: "/tags",
      //   icon: <GoDotFill />,
      // },
      {
        title: "Teams & Plans",
        path: "/teams/plansoverview",
        icon: <GoDotFill />,
      },
      
    ],
  },
  
];
