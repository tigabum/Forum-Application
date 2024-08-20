import { format, differenceInMinutes } from "date-fns";

const standardDateFormat = "m/dd/yyyy";
const getTimePastIfLessThanDay = (dateCom: Date | null) => {
  // const nos = new Date()
  // dateCom = new Date(nos.getTime()+15*60*1000)
  if (!dateCom) {
    return "";
  }
  const now = new Date();
  const diffInMin = differenceInMinutes(now, dateCom);
  if (diffInMin > 60) {
    if (diffInMin > 60 * 24) {
      return format(dateCom, standardDateFormat);
    }
    return Math.round(diffInMin / 60) + "h ago";
  }

  return Math.round(diffInMin) + "m ago";
};

export { getTimePastIfLessThanDay };
