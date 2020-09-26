import { format, getUnixTime } from 'date-fns';

export function unixToDatetimeLocal(unix) {
  if (!unix) {
    return;
  }
  let date = format(new Date(unix * 1000), 'yyyy-MM-dd hh:mm');
  date = date.replace(' ', 'T');
  return date;
}

export function datetimeLocalToUnix(date) {
  if (!date) {
    return;
  }
  date = new Date(date);
  date = getUnixTime(date);
  return date;
}
