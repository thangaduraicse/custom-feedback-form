import ServiceUtils from './service-utils';

const service = new ServiceUtils('http://localhost:8080');

export const createApplication = () => service.post('/applications');
export const retrieveApplicationById = id => service.get(`/application/${id}`);
export const persistApplicationData = (id, payload) => service.patch(`/application/${id}`, payload);
