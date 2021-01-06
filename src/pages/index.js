import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, Header, Sidebar } from 'Components';
import ReactRouter5 from './Router';
import { createApplication, retrieveApplicationById } from '../redux/actions';

const LOCALSTORAGE_APPLICATION_ID = 'custom_feedback_application_id';

const Pages = () => {
  const { loading, applicationData } = useSelector(state => state.applicationReducer),
        dispatch = useDispatch();

  useEffect(() => {
    const applicationId = window.localStorage.getItem(LOCALSTORAGE_APPLICATION_ID);

    applicationId
      && dispatch(retrieveApplicationById(applicationId))
      || dispatch(createApplication());
  }, []);

  useEffect(() => {
    applicationData.id && (
      window.localStorage.setItem(LOCALSTORAGE_APPLICATION_ID, applicationData.id)
    );
  }, [applicationData.id]);

  if (loading) {
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
