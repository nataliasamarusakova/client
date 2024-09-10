import Link from 'next/link'

export default function NotFound() {

    return <body>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="row text-center">
                <div className="col">
                    <h1 className="display-1 font-weight-bold">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p className="lead mb-3">Упс! Страницы, которую вы ищете, не существует...</p>
                    <Link role='button' href="/" className="btn btn-primary mt-3">
                        Перейти на главную
                    </Link>
                </div>
            </div>
        </div>
    </body>
}