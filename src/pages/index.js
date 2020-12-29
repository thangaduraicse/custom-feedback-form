import { useEffect } from 'react';
import { Footer, Header, Sidebar } from 'Components';
import ReactRouter5 from './Router';

const Pages = () => {
  const loader = true;

  if (loader) {
    return (
      <div className="container loading">
        <section className="container-right">
          <Header />
          <div className="content-area">
            <img src="/assets/images/spinner.gif" alt="page spinner" />
          </div>
          <Footer />
        </section>
      </div>
    )
  }

  return (
    <div className="container">
      <section className="container-left">
        <Sidebar />
      </section>
      <section className="container-right">
        <Header />
        <div className="content-area">
          <ReactRouter5 />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Pages;
