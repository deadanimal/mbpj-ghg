export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-desktop text-info",
  },
  {
    path: "/applications",
    title: "Applications",
    type: "link",
    icontype: "fas fa-file-alt text-info",
  },
  {
    path: "/rebates",
    title: "Rebates",
    type: "link",
    icontype: "fas fa-file-contract text-info",
  },
  {
    path: "/houses",
    title: "Houses",
    type: "link",
    icontype: "fas fa-home text-info",
  },
  {
    path: "/assessment-taxes",
    title: "Assessment Tax",
    type: "link",
    icontype: "fas fa-percent text-info",
  },
  {
    path: "/carbon-emission-factors",
    title: "Carbon Emission Factor",
    type: "link",
    icontype: "fas fa-times text-info",
  },
  {
    path: "/helpdesk",
    title: "Helpdesk",
    type: "link",
    icontype: "fas fa-life-ring text-info",
  },
  {
    path: "/report",
    title: "Reporting",
    type: "link",
    icontype: "fas fa-chart-bar text-info",
  },
  {
    path: "/management",
    title: "Management",
    type: "sub",
    icontype: "fas fa-tasks text-info",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "users", title: "Users", type: "link" },
      { path: "faqs", title: "FAQ", type: "link" },
      { path: "audit", title: "Audit Trail", type: "link" },
      { path: "advertisement", title: "Advertisement", type: "link" },
    ],
  },
];
