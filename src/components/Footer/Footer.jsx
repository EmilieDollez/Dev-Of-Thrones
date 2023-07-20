function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="copyright bg-darkest text-alt p-6 text-center ">
      DevOfThrones, le blog du développeur React - {year} ©
    </footer>
  );
}

export default Footer;