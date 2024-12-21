function Footer() {
  return (
    <footer className='bg-base-300 text-center p-4 mt-auto align-bottom w-full  justify-between flex flex-row'>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by DevTinder Pvt. Ltd</p>
      </aside>
      <aside>
        <p>
          ~ Made with ❤️ by{' '}
          <a className='underline' href='https://akshaygelani.me' target='_blank'>
            Akshay Gelani
          </a>
        </p>
      </aside>
    </footer>
  );
}
export default Footer;
