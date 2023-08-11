'use client';

import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/outline';
import { Callout } from '@tremor/react';

type Props = {
  message: string;
  waring?: boolean;
};

function CalloutCard({ message, waring }: Props) {
  return (
    <div>
      <Callout
        className="mt-4"
        title={message}
        icon={waring ? ExclamationIcon : CheckCircleIcon}
        color={waring ? 'rose' : 'teal'}
      />
    </div>
  );
}
export default CalloutCard;
