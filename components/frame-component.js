import { useMemo } from "react";
import { Button } from "@mui/material";

const FrameComponent = ({
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  locationOnBlackDP,
  locationOnBlack24dp1,
  place,
  findAClassSchoolPlaygroun,
  connectGetIt,
  propHeight,
  propGap,
}) => {
  const findATeacherStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-5xl text-base-black font-text-sm-bold mq1050:flex-wrap">
      <div className="hover:bg-violet-500 flex-1 rounded-lg bg-grey-white box-border flex flex-col items-center justify-start p-10 gap-[32px] max-w-full border-[1px] border-solid border-grey-light mq750:gap-[32px]">
        <div className="w-[608px] h-[297px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-grey-light" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px] gap-[24px]">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src={groupsBlack24dp11}
            />
            <h2 className="m-0 h-9 relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lgi">
              {people}
            </h2>
          </div>
          <div
            className="self-stretch h-[81px] relative text-lg font-light whitespace-pre-wrap inline-block z-[1]"
            style={findATeacherStyle}
          >
            {findATeacherCoachOrExpert}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
          <Button
            className="h-10 w-[122px] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#8064a2",
              fontSize: "14",
              background: "#fff",
              borderRadius: "8px",
              "&:hover": { background: "#fff" },
              width: 122,
              height: 40,
            }}
          >
            {locationOnBlackDP}
          </Button>
        </div>
      </div>
      <div
        className="flex-1 rounded-lg bg-grey-white box-border flex flex-col items-center justify-start p-10 gap-[32px] max-w-full border-[1px] border-solid border-grey-light mq750:gap-[32px]"
        style={groupDivStyle}
      >
        <div className="w-[608px] h-[297px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-grey-light" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px] gap-[24px]">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src={locationOnBlack24dp1}
            />
            <h2 className="m-0 h-9 relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lgi">
              {place}
            </h2>
          </div>
          <div className="self-stretch relative text-lg font-light whitespace-pre-wrap z-[1]">
            {findAClassSchoolPlaygroun}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
          <Button
            className="h-10 w-[122px] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#8064a2",
              fontSize: "14",
              background: "#fff",
              borderRadius: "8px",
              "&:hover": { background: "#fff" },
              width: 122,
              height: 40,
            }}
          >
            {connectGetIt}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
