import cache, { CacheKeys } from "../cache";
import Counts from "../types/Counts";

export const path = "/counts";

export const handler = async (req, res) => {
  const counts = cache.get<Counts>(CacheKeys.COUNTS);
  res.json(counts);
};
