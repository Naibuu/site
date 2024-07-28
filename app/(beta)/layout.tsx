import { Fragment, type PropsWithChildren } from 'react'

// TODO: add some ui components for the beta layout
export default function BetaLayout({ children }: PropsWithChildren) {
    return (
        <Fragment>
            <div className="mb-2 px-2 py-1 flex items-center justify-center text-sm text-black font-bold bg-red-500 rounded">
                I AM STILL WORKING ON THIS, RAWHHHHH!!
            </div>
            {children}
        </Fragment>
    )
}
