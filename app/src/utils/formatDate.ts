export const formatDateTime = (timestamp: number, locale: string): string => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(date);
};
