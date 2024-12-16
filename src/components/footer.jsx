const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 bg-black text-white">
      <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
