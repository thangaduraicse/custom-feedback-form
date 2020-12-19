import { Footer, Header, Sidebar } from 'Components';
import ReactRouter5 from './Router';

const Pages = () => (
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

export default Pages;
