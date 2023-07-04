interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto h-full min-h-full w-full p-4 xl:container">
      {children}
    </div>
  );
};

export { MainContainer };
