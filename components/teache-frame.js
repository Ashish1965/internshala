import { useMemo } from "react";

const TeacheFrame = ({
  groupsBlack24dp11,
  people,
  anIndividualOrOrganizatio,
  propBorder,
  propBorder1,
}) => {
  const teacheFrameStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div
      className="self-stretch rounded-lg bg-grey-white flex flex-col items-center justify-start py-4 px-3.5 gap-[24px] text-left text-lg text-grey-darkest font-text-sm-bold border-[2px] border-solid border-primary-full"
      style={teacheFrameStyle}
    >
      <div
        className="w-[312px] h-[142px] relative rounded-lg bg-grey-white box-border hidden border-[2px] border-solid border-primary-full"
        style={rectangleDivStyle}
      />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src={groupsBlack24dp11}
          />
          <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit z-[1]">
            {people}
          </h3>
        </div>
      </div>
      <div className="self-stretch relative text-xs whitespace-pre-wrap z-[1]">
        {anIndividualOrOrganizatio}
      </div>
    </div>
  );
};

export default TeacheFrame;
