import './firebase'; // Pre-initialize firebase-admin
import {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
  archiveFNMasterlist,
  archiveHospLevel12018,
  archiveHospLevel22018,
  archiveHospLevel32018,
  archiveOFMasterlist,
  archivePHMasterlist,
  archiveSlideFig,
} from './services';

module.exports = {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
  archiveFNMasterlist,
  archiveHospLevel12018,
  archiveHospLevel22018,
  archiveHospLevel32018,
  archiveOFMasterlist,
  archivePHMasterlist,
  archiveSlideFig,
};
