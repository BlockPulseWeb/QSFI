export const useContact = () => {
  const contactList = reactive([
    {
      text: 'OKX',
      logo: require('@img/common/icon-contact3.png'),
      link: '',
      width: 38,
    },
    {
      text: 'Unisat',
      logo: require('@img/common/icon-contact6.png'),
      link: '',
      width: 34,
    },
    {
      text: 'Binance',
      logo: require('@img/common/icon-contact1.png'),
      link: '',
      width: 42,
    },
    {
      text: 'Discord',
      logo: require('@img/common/icon-contact2.png'),
      link: '',
      width: 44,
    },
    {
      text: 'X',
      logo: require('@img/common/icon-contact7.png'),
      link: '',
      width: 30,
    },
    {
      text: 'Telegram',
      logo: require('@img/common/icon-contact4.png'),
      link: '',
      width: 38,
    },
    {
      text: 'Github',
      logo: require('@img/common/icon-contact5.png'),
      link: '',
      width: 36,
    },
  ]);

  return { contactList };
};