import { applicationService } from '../services';

export const SHOW_LOADER = 'SHOW_LOADER';
export const CREATE_APPLICATION = 'CREATE_APPLICATION';
export const RETRIEVE_APPLICATION_BY_ID = 'RETRIEVE_APPLICATION_BY_ID';
export const PERSIST_APPLICATION_DATA = 'PERSIST_APPLICATION_DATA';

export const createApplication = () => ({
  type: CREATE_APPLICATION,
  payload: applicationService.createApplication()
});

export const retrieveApplicationById = id => ({
  type: RETRIEVE_APPLICATION_BY_ID,
  payload: applicationService.retrieveApplicationById(id)
});

export const saveApplicationData = (id, payload) => ({
  type: PERSIST_APPLICATION_DATA,
  payload: applicationService.persistApplicationData(id, payload)
});
