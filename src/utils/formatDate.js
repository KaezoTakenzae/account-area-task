export default function formatDate(dateStr) {
  let date = new Date(dateStr.split('T')[0]);
  let month = '';
  let day = '';
  switch (date.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
    default:
      month = 'dnf';
  }

  switch (date.getDate()) {
    case 1:
    case 21:
    case 31:
      day = `${date.getDate()}st`;
      break;
    case 2:
    case 22:
      day = `${date.getDate()}nd`;
      break;
    case 3:
    case 23:
      day = `${date.getDate()}rd`;
      break;
    default:
      day = `${date.getDate()}th`;
  }

  return month === 'dnf' ? 'Not yet dispatched' : `${month} ${day} ${date.getFullYear()}`;
}
