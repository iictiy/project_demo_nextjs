import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type InvoiceStatusProps = {
  status: 'pending' | 'paid' | string;
}

export default function InvoiceStatus({ status }: InvoiceStatusProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-[15px] text-xs mb-2 mt-2',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
