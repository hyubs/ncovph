import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../etl/getLocalCases";
import getOFWCases from "../etl/getOFWCases";
import getHospitals from "../etl/getHospitals";
import getForeignNationalCases from "../etl/getForeignNationalCases";
import ConfirmedCasePatientLocal from "../types/ConfirmedCasePatientLocal";
import ConfirmedCasePatientOFW from "../types/ConfirmedCasePatientOFW";
import ConfirmedCasePatientForeignNational from "../types/ConfirmedCasePatientForeignNational";
import Hospital from "../types/Hospital";

const cache = new NodeCache({
  deleteOnExpire: false,
});

(async () => {
  await buildCache<ConfirmedCasePatientLocal>({
    cache,
    func: getLocalCases,
    cacheKey: "confirmed_cases",
    ttl: 60 * 15
  });

  await buildCache<ConfirmedCasePatientOFW>({
    cache,
    func: getOFWCases,
    cacheKey: "ofw_cases",
    ttl: 60 * 15
  });

  await buildCache<ConfirmedCasePatientForeignNational>({
    cache,
    func: getForeignNationalCases,
    cacheKey: "foreign_national_cases",
    ttl: 60 * 15
  });

  await buildCache<Hospital>({
    cache,
    func: getHospitals,
    cacheKey: "hospitals",
    ttl: 60 * 15,
  });
})();

export default cache;
