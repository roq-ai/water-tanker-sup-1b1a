interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager', 'Supply Chain Manager'],
  tenantName: 'Supplier',
  applicationName: 'Water Tanker Supplier ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View suppliers',
    'View business owners',
    'View operations manager',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage supplier data',
    'Manage customer information',
    'Manage business owner details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cae40845-f269-4f4f-9910-acb9cbe9f300',
};
