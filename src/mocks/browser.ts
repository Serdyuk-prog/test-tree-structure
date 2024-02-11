import { setupWorker} from 'msw/browser';
import { http } from 'msw';
import { servicesResolver } from './servicesResolver';

export const handlers = [http.get(`api/services`, servicesResolver.get),];

export const worker = setupWorker(...handlers);