import TestingAggregate from '../../../types/TestingAggregate';
import toDate, { INPUT_FORMAT_TESTING_AGGREGATES } from '../../../utils/toDate';
import toFacilityName from '../../../utils/toFacilityName';
import toNullableInt from '../../../utils/toNullableInt';
import toNullableString from '../../../utils/toNullableString';

export default (d: string[]): TestingAggregate => {
  const totalUniqueIndTested = toNullableInt(d[5]);
  const totalPositiveInd = toNullableInt(d[6]);
  const totalNegativeInd = toNullableInt(d[8]);
  const totalEquivocalInd = toNullableInt(d[10]);
  const totalInvalidInd = toNullableInt(d[12]);
  const totalTestsConducted = toNullableInt(d[14]);
  const totalRemainingTests = toNullableInt(d[16]);

  return {
    date: toDate(d[18], INPUT_FORMAT_TESTING_AGGREGATES),
    facility: {
      name: toFacilityName(d[0]),
      abbreviation: toNullableString(d[1]),
    },
    dailyOutput: {
      positiveInd: toNullableInt(d[2]),
      uniqueIndTested: toNullableInt(d[3]),
      testsConducted: toNullableInt(d[4]),
    },
    totals: {
      uniqueIndTested: totalUniqueIndTested,
      positiveInd: totalPositiveInd,
      negativeInd: totalNegativeInd,
      equivocalInd: totalEquivocalInd,
      invalidInd: totalInvalidInd,
      testsConducted: totalTestsConducted,
      remainingTests: totalRemainingTests,
    },
    ratioUniqueInd: {
      positiveInd: totalPositiveInd / totalUniqueIndTested,
      negativeInd: totalNegativeInd / totalUniqueIndTested,
      equivocalInd: totalEquivocalInd / totalUniqueIndTested,
      invalidInd: totalInvalidInd / totalUniqueIndTested,
    },
  };
};
