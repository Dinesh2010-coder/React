function Footer() {
  const getDate = new Date().getFullYear();
  return (
    <footer>
      <h2>Copyright ⓒ {getDate}</h2>
    </footer>
  );
}

export default Footer;
