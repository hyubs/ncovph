import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getLocalCases from '../etl/getLocalCases';
import CacheKeys from '../consts/CacheKeys';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 15 minutes')
  .onRun(async () => {
    try {
      const counts = await getLocalCases();
      await storage.upload(counts, `${CacheKeys.CONFIRMED_CASES}.json`);
    } catch (error) {
      log.error(error);
    }

    return null;
  });
