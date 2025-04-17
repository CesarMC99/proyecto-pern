import { DressStyle } from '@/sections/dress-style/dress-style'
import { Footer } from '@/shared/components/footer/footer'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <div>
            Layout
            <Outlet />
            <DressStyle />
            <div className='h-screen'>s</div>
            <Footer />
        </div>
    )
}
