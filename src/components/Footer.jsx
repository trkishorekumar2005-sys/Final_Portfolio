function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Kishore Kumar T.R. Built with React &amp; Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
