import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div className='min-h-[50vh] container text-center flex justify-center items-center flex-col gap-2 mx-auto'>
            <h2 className='text-5xl text-rose-700'>404 : Not Found</h2>
            <p className='text-lg'><Link to="/">Go back to homepage</Link></p>
        </div>
    )
}
