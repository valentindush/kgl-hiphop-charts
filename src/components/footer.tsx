export default function Footer() {

    return (
        <footer className="p-4 bg-gradient-to-br from-teal-600 to-cyan-500">
            <p className="text-sm font-medium text-white text-center">
                &copy; {new Date().getFullYear()} KGLcharts.com
            </p>
        </footer>
    )
}