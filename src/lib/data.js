export const menu = [
  {
    id: 1,
    title: "MAIN",
    items: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: "/icons/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "",
        icon: "/icons/profile.svg",
      },
    ],
  },
  {
    id: 2,
    title: "LISTS",
    items: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "/icons/users.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "/icons/products.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "",
        icon: "/icons/orders.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "",
        icon: "/icons/posts.svg",
      },
    ],
  },
  {
    id: 3,
    title: "GENERAL",
    items: [
      {
        id: 1,
        title: "Elements",
        url: "",
        icon: "/icons/apps.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "",
        icon: "/icons/notes.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "",
        icon: "/icons/forms.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "",
        icon: "/icons/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "MAINTENANCE",
    items: [
      {
        id: 1,
        title: "Settings",
        url: "",
        icon: "/icons/settings.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "",
        icon: "/icons/backup.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const areaChartRevenue = [
  {
    name: "Sun",
    books: 4000,
    shoes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    shoes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    shoes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    shoes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    shoes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    shoes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    shoes: 4300,
    electronic: 2100,
  },
];

export const pieChartdata = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];
