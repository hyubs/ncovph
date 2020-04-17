import toLocation from 'ncovph-parser/dist/parsers/toLocation';
import CaseInformation from '../../../types/CaseInformation';
import toAge from '../../../utils/toAge';
import toBoolean from '../../../utils/toBoolean';
import toDate from '../../../utils/toDate';
import toNullableString from '../../../utils/toNullableString';
import toRegion from '../../../utils/toRegion';
import toRemovalType from '../../../utils/toRemovalType';
import toSex from '../../../utils/toSex';

export default (d: string[]): CaseInformation => {
  const provinceStr = toNullableString(d[10]);
  const cityStr = toNullableString(d[11].replace(/\s\([A-Za-z0-9\s]+\)$/, ''));
  const {
    region,
    province,
    city,
  } = toLocation((cityStr) ? `${cityStr}, ${provinceStr}` : `${provinceStr || ''}`) || { region: null, province: null, city: null };

  return {
    caseNumber: toNullableString(d[0]),
    age: toAge(d[1]),
    sex: toSex(d[3]),
    dateReportConfirmed: toDate(d[4]),
    dateRecovery: toDate(d[5]),
    dateDeath: toDate(d[6]),
    removalType: toRemovalType(d[7]),
    dateReportRemoved: toDate(d[8]),
    admitted: toBoolean(d[9]),
    residence: {
      region: toRegion(toNullableString(region)),
      province: toNullableString(province),
      city: toNullableString(city),
    },
  };
};
