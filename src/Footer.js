import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="Footer">
      <div className="Footer-content">
        Mourad © {year}
      </div>
    </footer>
  )
}

export default Footer