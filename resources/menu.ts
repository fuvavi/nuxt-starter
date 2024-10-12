interface IMenu {
    id: string | number
    title: string
    url: string
}
export const HEADER_MENU: IMenu[] = [
    {
        id: 1,
        title: 'header.menu.home',
        url: '/'
    },
    {
        id: 2,
        title: 'header.menu.about',
        url: '/about'
    },
    {
        id: 3,
        title: 'header.menu.services',
        url: '/services'
    },
    {
        id: 4,
        title: 'header.menu.contact',
        url: '/contact'
    }
]

