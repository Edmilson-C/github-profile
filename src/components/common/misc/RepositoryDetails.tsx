import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";

import Shield from "../../../assets/icons/Shield";
import Nesting from "../../../assets/icons/Nesting";
import Star from "../../../assets/icons/Star";

interface RepositoryDetailsProps {
  name: string;
  description: string;
  license: string;
  forks: number;
  watchers: number;
  updatedAt: Date;
}

const RepositoryDetails = ({
  name,
  description,
  license,
  forks,
  watchers,
  updatedAt,
}: RepositoryDetailsProps) => {
  dayjs.extend(relativeTime);

  return (
    <div className="flex flex-col items-start py-8 px-10 rounded-lg space-y-4 bg-gradient-to-r from-blue-dark to-80% to-blue-regular text-light-default/70 text-base font-light">
      <h2 className="font-normal text-xl text-light-default">{name}</h2>
      <p>{description}</p>
      <div className="flex items-center justify-evenly space-x-4">
        {license && (
          <p className="flex items-center">
            <span className="mr-2">
              <Shield />
            </span>
            {license}
          </p>
        )}

        {forks && (
          <p className="flex items-center">
            <span className="mr-2">
              <Nesting />
            </span>
            {forks}
          </p>
        )}

        {watchers && (
          <p className="flex items-center">
            <span className="mr-2">
              <Star />
            </span>
            {watchers}
          </p>
        )}

        <p className="text-xs">updated {dayjs(updatedAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default RepositoryDetails;
