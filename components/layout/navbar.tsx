'use client'

import Breadcrumb from './breadcrumb'

export default function Navbar() {
    return (
        <div className="pb-6 flex gap-2 justify-between items-center">
            <Breadcrumb />
        </div>
    )
}
