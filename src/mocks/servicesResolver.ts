import { HttpResponse } from "msw";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import db from "./db.json";

const services = db.services;
class ServicesResolver {
    get() {
        return HttpResponse.json(services);
    }
}

export const servicesResolver = new ServicesResolver();