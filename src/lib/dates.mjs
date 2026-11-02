const toDate = (d) => (d instanceof Date ? d : new Date(d));
export const isoDate = (d) => toDate(d).toISOString().slice(0, 10);
export const humanDate = (d) =>
  toDate(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
