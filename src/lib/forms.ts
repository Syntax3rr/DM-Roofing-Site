import { siteConfig } from '../config/site';

/**
 * Lead forms post to Web3Forms (https://web3forms.com), which emails
 * each submission to the address tied to `siteConfig.web3formsAccessKey`.
 * Works on any static host, including GitHub Pages.
 */
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export function formAttributes(formName: string): Record<string, string> {
  return {
    method: 'POST',
    action: WEB3FORMS_ENDPOINT,
    name: formName,
  };
}

export const web3formsAccessKey = siteConfig.web3formsAccessKey;
