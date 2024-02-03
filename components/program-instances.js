const ProgramInstances = () => {
    return (
      <section className="w-[312px] rounded-lg bg-grey-white box-border flex flex-col items-center justify-start py-4 px-3.5 gap-[24px] text-left text-lg text-grey-darkest font-text-sm-bold border-[2px] border-solid border-blue-1">
        <div className="w-[312px] h-[142px] relative rounded-lg bg-grey-white box-border hidden border-[2px] border-solid border-blue-1" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[8px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/program.svg"
            />
            <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit z-[1]">
              Program
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative text-xs">
          <div className="flex-1 relative whitespace-pre-wrap z-[1]">
            An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
            Performance or Competition.
          </div>
          <div className="h-8 w-8 absolute my-0 mx-[!important] right-[-19px] bottom-[-16px] z-[2] flex items-center justify-center">
            <img
              className="h-full w-full z-[2] object-contain absolute left-[0px] top-[8px] [transform:scale(1.75)]"
              loading="eager"
              alt=""
              src="/group-1210.svg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ProgramInstances;
  