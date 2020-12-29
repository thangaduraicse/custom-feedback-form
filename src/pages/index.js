import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, Header, Sidebar } from 'Components';
import ReactRouter5 from './Router';
import { showLoader } from '../redux/actions';

const Pages = () => {
  const { loader } = useSelector(state => state.loaderReducer),
        dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader(true));

    setTimeout(() => {
      dispatch(showLoader(false));
    }, 5000);
  }, []);

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
