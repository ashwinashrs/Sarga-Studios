import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// CustomerRegister
<<<<<<< HEAD
const CustomerRegister = React.lazy(() => import('./pages/custforms/Index'))
=======
const CustomerRegister = React.lazy(() => import('./pages/customer/Index'))
>>>>>>> e4765e95afa90c216796db57cc1f77ee374228af

// Order items
const Order = React.lazy(() => import('./pages/order/index'))

// serch Enquiries
const Enquiries = React.lazy(() => import('./pages/enquiries/index'))

// Staff register view delete
const Teams = React.lazy(() => import('./pages/staff/index'))

// PaymentMethod
const Payments = React.lazy(() => import('./pages/payment/index'))

// Settings
const Settings = React.lazy(() => import('./pages/settings/Settings'))
const TypeofCustomer = React.lazy(() => import('./pages/settings/typeofcustomer/TypeCust'))
const TypeofItems = React.lazy(() => import('./pages/settings/typeofItems/TypeOfItems'))

// Widgets
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // CustomerRegister
  { path: '/Customer-Register', name: 'Customer-Register', element: CustomerRegister },

  // Order
  { path: '/order', name: 'Order', element: Order },

  // Enquiries
  { path: '/Enquiries', name: 'Enquiries', element: Enquiries },

  // Staff register view delete
  { path: '/Teams', name: 'Teams', element: Teams },

  // PaymentMethod
  { path: '/Payments', name: 'Payments', element: Payments },

  // Settings
  { path: '/settings', name: 'Settings', element: Settings },
<<<<<<< HEAD
  { path: '/settings/Type of Customer', name: 'Type Of Customer', element: TypeofCustomer },
  { path: '/settings/Type of Items', name: 'Type of Items', element: TypeofItems },
=======
  { path: '/settings/Customer Type', name: 'Customer Type', element: TypeofCustomer },
  { path: '/settings/Item Type', name: 'Item Type', element: TypeofItems },
>>>>>>> e4765e95afa90c216796db57cc1f77ee374228af

  // Widgets
  { path: '/widgets', name: 'Widgets', element: Widgets },
  
]

export default routes
