import { Facebook, Instagram, X } from 'lucide-react';
export const navItems = ['Shop', 'Contact us', 'About', 'jaurnal', 'Custom']

type bottleItemsType = {
     id: number;
     icon: string;
     name: string;
}

export const bottleItems: bottleItemsType[] = [
     {
          id: 1,
          icon: '/1.png',
          name: 'Vacuum Bottles'
     },
     {
          id: 2,
          icon: '/2.png',
          name: 'Fridge Bottles & Jugs'
     },
     {
          id: 3,
          icon: '/3.png',
          name: 'Borosilicate Bottles'
     },
     {
          id: 4,
          icon: '/4.png',
          name: 'Kettles'
     },
]

type productType = {
     id: number;
     productImg: string;
     productName: string;
}

export const products: productType[] = [
     {
          id: 1,
          productImg: '/p1.png',
          productName: 'Rainbow 600'
     },
     {
          id: 2,
          productImg: '/p4.png',
          productName: 'Rio 650'
     },
     {
          id: 3,
          productImg: '/p2.png',
          productName: 'Big Bull 1300'
     },
     {
          id: 4,
          productImg: '/p3.png',
          productName: 'Rome 600'
     },
     {
          id: 5,
          productImg: '/p1.png',
          productName: 'Rainbow 600'
     },
     {
          id: 6,
          productImg: '/p4.png',
          productName: 'Rio 650'
     },
]

export const footerItems = ["FAQ's", 'Returns', 'Ordering', 'Shipping', 'Personalization','Policies']