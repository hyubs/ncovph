import ConfirmedCasePatientLocal from 'ncovph-parser/dist/types/ConfirmedCasePatientLocal';
import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';

export const path = '/confirmed-cases';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedCasePatientLocal[]>(CacheKeys.CONFIRMED_CASES);
  res.json(cases);
};
