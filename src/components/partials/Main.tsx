import Card from "../common/misc/Card";
import ImageContainer from "../common/misc/ImageContainer";
import RepositoryDetails from "../common/misc/RepositoryDetails";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => (
  <main className="w-screen container mx-auto flex flex-col relative -top-12">
    <div className="flex items-end space-x-6">
      <ImageContainer
        image="https://avatars.githubusercontent.com/u/9919?v=4"
        name="Github"
      />
      <Card className="mb-4" label="Followers" description={27839} />
      <Card className="mb-4" label="Following" description={0} />
      <Card className="mb-4" label="Location" description="San Fransciso, CA" />
    </div>
    <article className="my-8">
      <h1 className="text-large text-light-default">Github</h1>
      <p className="text-base text-light-default/70">How people build software</p>
    </article>
    <section className="grid grid-cols-2 gap-10">
      <RepositoryDetails
        name="Name"
        description="This is the description"
        license="MIT"
        forks={50}
        watchers={10}
        updatedAt={new Date("2024-08-23T18:00:31Z")}
      />
      <RepositoryDetails
        name="Name"
        description="This is the description"
        license="MIT"
        forks={50}
        watchers={10}
        updatedAt={new Date("2024-08-23T18:00:31Z")}
      />
      <RepositoryDetails
        name="Name"
        description="This is the description"
        license="MIT"
        forks={50}
        watchers={10}
        updatedAt={new Date("2024-08-23T18:00:31Z")}
      />
      <RepositoryDetails
        name="Name"
        description="This is the description"
        license="MIT"
        forks={50}
        watchers={10}
        updatedAt={new Date("2024-08-23T18:00:31Z")}
      />
    </section>
    <button type="button" className="text-light-default/70 mt-8">View all repositories</button>
  </main>
);

export default Main;
