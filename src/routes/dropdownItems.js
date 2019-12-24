const desktopDropItems = [
  { title: 'My Account', to: '/my-account', id: 4 },
  { title: 'Company settings', to: '/company-settings', id: 5 },
];

const mobileDropItems = [
  { title: 'Estimates', to: '/', id: 1 },
  { title: 'Roles', to: '/roles', id: 2 },
  { title: 'Clients', to: '/clients', id: 3 },
  ...desktopDropItems,
];

export {
  desktopDropItems,
  mobileDropItems,
};
