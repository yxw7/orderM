import {
  buildSubscriberLibrarianMap,
  subscriberRows,
  subscriberSearchFields,
  SUBSCRIBER_STATUS_MAP
} from '@/modules/subscriber/data/subscriber-manage';

export {
  subscriberRows,
  subscriberSearchFields,
  SUBSCRIBER_STATUS_MAP
};

export const subscriberLibrarians = buildSubscriberLibrarianMap();
