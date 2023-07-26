function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="fixed z-20 copyright w-full max-w-[1440px] bottom-0 bg-darkest text-alt p-6 text-center ">
      DevOfThrones, le blog du développeur React - {year} ©
    </footer>
  );
}

export default Footer;