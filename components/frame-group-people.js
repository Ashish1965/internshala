import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
    TextField,
  } from "@mui/material";
  
  const FrameGroupPeople = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 flex flex-row items-center justify-center py-2.5 px-5 box-border relative gap-[90px] max-w-full text-left text-xs text-darkgray font-text-sm-bold mq750:gap-[90px] mq450:gap-[90px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-grey-white shadow-[0px_2px_12px_rgba(0,_0,_0,_0.08)]" />
          <div className="w-[628px] flex flex-row items-center justify-start gap-[35px] max-w-full mq750:gap-[35px]">
            <img
              className="h-[60px] w-[293.3px] relative object-cover z-[1]"
              loading="eager"
              alt=""
              src="/HobbyCue Logo.png"
            />
            <div className="flex-1 flex flex-row items-center justify-between py-0 pr-0 pl-3 relative gap-[20px] z-[1]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0.3px] bottom-[0px] left-[-0.3px] rounded-lg bg-grey-hover box-border mix-blend-normal border-[1px] border-solid border-whitesmoke" />
              <div className="relative leading-[16px] font-light whitespace-nowrap z-[1]">
                Search here...
              </div>
              <div className="h-10 w-10 relative z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full w-full h-full" />
                <img
                  className="absolute top-[12px] left-[12px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-4 h-4 overflow-hidden z-[1]"
                  alt=""
                  src="/Vector.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[525px] flex flex-row items-center justify-between gap-[20px] max-w-full z-[1] text-sm text-base-black">
            <TextField
              className="h-6 w-[107px] font-text-sm-bold font-medium text-sm text-base-black"
              variant="standard"
              select
              value={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ marginRight: "4px" }}>
                    <img width="24px" height="24px" src="/Explore.png" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <img
                    width="24px"
                    height="24px"
                    src="/icons8_expand_arrow 1.png"
                  />
                ),
              }}
              SelectProps={{ IconComponent: () => null }}
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "20.38095238095238%",
                height: "24px",
                "& .MuiInput-underline:before": { borderBottom: "none" },
                "& .MuiInput-underline:after": { borderBottom: "none" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root": { height: "100%" },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 14,
                  fontWeight: "Medium",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value={1}>Explore</MenuItem>
            </TextField>
            <div className="flex-1 flex flex-row items-end justify-start relative gap-[4px]">
              <div className="h-6 w-6 flex flex-row items-center justify-center relative gap-[10px] z-[1]">
                
              </div>
              <img
                className="h-full w-6 absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[0px] max-h-full overflow-hidden shrink-0"
                alt=""
                src="\Hobbies.png"
              />
              <div className="relative leading-[22px] font-medium">Hobbies</div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icons8_expand_arrow 1.png"
              />
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="\bookmark_black_24dp 1.png"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/notifications_black_24dp 1.png"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/product 3.png"
            />
            <div className="flex-1 flex flex-row items-center justify-center text-primary-full">
              <div className="flex flex-row items-center justify-center pt-2.5 pb-3.5 pr-[29px] pl-8 relative whitespace-nowrap">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-primary-full" />
                <div className="relative leading-[16px] font-semibold z-[1]">
                  Sign In
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  };
  
  export default FrameGroupPeople;
  