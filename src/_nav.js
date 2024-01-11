import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilColorPalette,
  cilUser, 
  cilBank,
  cilUserFollow,
  cilSettings,
  cilExcerpt,
  cilGroup,
  cilSpeedometer,
  cilVoiceOverRecord
  // cilNoteAdd
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customer',
    to: '/Customer-Register',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/order',
    icon: <CIcon icon={cilExcerpt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Enquiries',
    to: '/Enquiries',
    icon: <CIcon icon={cilVoiceOverRecord} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Teams',
    to: '/Teams',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payments',
    to: '/Payments',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer Type',
<<<<<<< HEAD
        to: '/settings/Type of Customer',
        icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
      },{
        component: CNavItem,
        name: 'Items',
        to: '/settings/Type of Items',
=======
        to: '/settings/Customer Type',
        icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
      },{
        component: CNavItem,
        name: 'Item Type',
        to: '/settings/Item Type',
>>>>>>> e4765e95afa90c216796db57cc1f77ee374228af
        icon: <CIcon icon={cilColorPalette} customClassName="nav-icon" />,
      }
    ]
  }

  // {
  //   component: CNavGroup,
  //   name: 'Button',
  //   to: '/button',
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   items:[
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     }
  //   ]
  // }
]

export default _nav
