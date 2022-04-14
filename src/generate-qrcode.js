import qrcode from 'qrcode-terminal';

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
export const generateQrCode = (url) =>
  new Promise((resolve) => {
    qrcode.generate(url, { small: true }, resolve);
  });
