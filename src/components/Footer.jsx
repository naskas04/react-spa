function Footer() {
    return <footer className="page-footer orange lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} naskas
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export {Footer};