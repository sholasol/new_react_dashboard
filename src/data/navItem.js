const navList = [
  {
    _id: 1,
    name: 'Dashboard',
    icon: 'bi bi-grid',
    subMenu: []
  },
  {
    _id: 2,
    name: 'Document',
    icon: 'bi bi-menu-button-wide',
    subMenu: [
      {
        _id: 21,
        name: 'Customers',
        icon: 'bi bi-circle'
      },
      {
        _id: 22,
        name: 'Suppliers',
        icon: 'bi bi-circle'
      },
      {
        _id: 23,
        name: 'Logistics',
        icon: 'bi bi-circle'
      }
    ]
  },
  {
    _id: 3,
    name: 'Forms',
    icon: 'bi bi-journal-text',
    subMenu: [
      {
        _id: 31,
        name: 'Forms',
        icon: 'bi bi-circle'
      },
      {
        _id: 32,
        name: 'Application Forms',
        icon: 'bi bi-circle'
      },
      {
        _id: 33,
        name: 'Release Forms',
        icon: 'bi bi-circle'
      },
      {
        _id: 34,
        name: 'Cancellation Forms',
        icon: 'bi bi-circle'
      }
    ]
  },
  {
    _id: 4,
    name: 'Tables',
    icon: 'bi bi-layout-text-window-reverse',
    subMenu: [
      {
        _id: 41,
        name: 'General Tables',
        icon: 'bi bi-circle'
      },
      {
        _id: 42,
        name: 'Data Tables',
        icon: 'bi bi-circle'
      }
    ]
  },
  {
    _id: 5,
    name: 'Charts',
    icon: 'bi bi-bar-chart',
    subMenu: [
      {
        _id: 51,
        name: 'ChartJS',
        icon: 'bi bi-circle'
      },
      {
        _id: 52,
        name: 'Apex Chart',
        icon: 'bi bi-circle'
      },
      {
        _id: 53,
        name: 'ECharts',
        icon: 'bi bi-circle'
      }
    ]
  },
  {
    _id: 6,
    name: 'Icons',
    icon: 'bi bi-journal-text',
    subMenu: [
      {
        _id: 61,
        name: 'Bootstrap Icons',
        icon: 'bi bi-circle'
      },
      {
        _id: 62,
        name: 'Remix Icons',
        icon: 'bi bi-circle'
      },
      {
        _id: 63,
        name: 'BoxIcons',
        icon: 'bi bi-circle'
      }
    ]
  },
  {
    _id: 7,
    name: 'Profile',
    icon: 'bi bi-person',
    subMenu: []
  },
  {
    _id: 8,
    name: 'Contact',
    icon: 'bi bi-envelope',
    subMenu: []
  },
  {
    _id: 9,
    name: 'Register',
    icon: 'bi bi-card-list',
    subMenu: []
  },
  {
    _id: 10,
    name: 'Setting',
    icon: 'bi bi-gear',
    subMenu: []
  },
  // {
  //   _id: 11,
  //   name: 'Logout',
  //   icon: 'bi bi-box-arrow-in-right',
  //   subMenu: []
  // }
];

export default navList;
