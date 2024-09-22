import { Phone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Phone parser and formatter',
  path: '/phone-parser-and-formatter',
  description:
    'Parse, validate and format phone numbers. Get information about the phone number, like the country code, type, etc. Forge link to send message in WhatsApp and SMS',
  keywords: [
    'phone',
    'parser',
    'formatter',
    'validate',
    'format',
    'number',
    'telephone',
    'mobile',
    'cell',
    'international',
    'national',
    'whatsapp',
    'sms',
    'message',
  ],
  component: () => import('./phone-parser-and-formatter.vue'),
  icon: Phone,
  createdAt: new Date('2023-05-01'),
});
