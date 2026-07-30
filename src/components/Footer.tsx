function Footer() {
    
    return (
        <>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute bottom-0 left-0 w-full">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - Fait par <a href="https://github.com/AbdouMandara">Abdou Mandara</a></p>
        </aside>
        </footer>
        </>
    )
}

export default Footer