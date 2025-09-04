
const Footer:React.FC = () => {
    const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-5 bg-neutral text-primary-content footer-center">
         <div>
            <p className="text-neutral-content">Copyright &copy; {footerYear} All Right Reserved</p>
        </div>
    </footer>
   
  )
}

export default Footer
