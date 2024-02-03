import {
    Button,
    TextField,
    InputAdornment,
    Icon,
    IconButton,
  } from "@mui/material";
  
  const LocationTextInput = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[27px] box-border max-w-full">
        <form className="m-0 flex-1 bg-purple-3 flex flex-col items-center justify-start pt-[100px] px-0 pb-0 box-border gap-[24px] max-w-full z-[2] mq750:pt-[65px] mq750:box-border">
          <div className="self-stretch h-[678px] relative bg-purple-3 hidden" />
          <div className="w-[1280px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full lg:flex-wrap">
            <div className="w-[707px] flex flex-col items-start justify-start gap-[32px] min-w-[707px] max-w-full lg:flex-1 mq750:gap-[32px] mq1050:min-w-full">
              <h1 className="m-0 h-[54px] relative text-17xl tracking-[0.02em] inline-block italic font-semibold font-text-sm-bold text-left max-w-full z-[1] mq1050:text-10xl mq450:text-3xl">
                <span className="text-base-black">Explore your</span>
                <span className="text-blue-1"> hobby</span>
                <span className="text-base-black">{` or `}</span>
                <span className="text-primary-full">passion</span>
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch h-[120px] relative text-sm tracking-[0.02em] leading-[30px] font-light font-text-sm-bold text-base-black text-left inline-block z-[1]">
                  Sign-in to interact with a community of fellow hobbyists and an
                  eco-system of experts, teachers, suppliers, classes, workshops,
                  and places to practice, participate or perform. Your hobby may
                  be about visual or performing arts, sports, games, gardening,
                  model making, cooking, indoor or outdoor activities…
                </div>
                <div className="self-stretch h-[60px] relative text-sm tracking-[0.02em] leading-[30px] font-light font-text-sm-bold text-base-black whitespace-pre-wrap text-left inline-block z-[1]">
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </div>
              </div>
            </div>
            <div className="w-[410px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[410px] max-w-full lg:flex-1 mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[32px]">
                <div className="w-[173px] flex flex-row items-start justify-between gap-[20px] z-[1]">
                  <div className="w-[70px] flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative text-xl font-semibold font-text-sm-bold text-primary-full text-left mq450:text-base">
                      Sign In
                    </div>
                    <div className="self-stretch h-0.5 relative bg-primary-full" />
                  </div>
                  <input
                    className="w-[71px] [border:none] [outline:none] bg-[transparent] h-[30px] flex flex-row items-center justify-center font-text-sm-bold font-semibold text-xl text-darkgray"
                    placeholder="Join In"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <Button
                      className="self-stretch h-10 z-[1]"
                      startIcon={
                        <img width="16px" height="16px" src="/Google.png" />
                      }
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#08090a",
                        fontSize: "14",
                        background: "#f7f5f9",
                        borderRadius: "8px",
                        "&:hover": { background: "#f7f5f9" },
                        height: 40,
                      }}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      className="self-stretch h-10 z-[1]"
                      startIcon={
                        <img width="16px" height="16px" src="/Facebook.png" />
                      }
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#08090a",
                        fontSize: "14",
                        background: "#f7f5f9",
                        borderRadius: "8px",
                        "&:hover": { background: "#f7f5f9" },
                        height: 40,
                      }}
                    >
                      Continue with Facebook
                    </Button>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] z-[1] mq450:flex-wrap">
                    <div className="h-0.5 flex-1 relative bg-grey-light min-w-[97px]" />
                    <div className="relative text-xs leading-[16px] font-semibold font-text-sm-bold text-base-black text-left">
                      Or connect with
                    </div>
                    <div className="h-0.5 flex-1 relative bg-grey-light min-w-[97px]" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-10 font-text-sm-bold text-xs text-darkgray z-[1]"
                      placeholder="Email"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#ebedf0" },
                        "& .MuiInputBase-root": {
                          height: "40px",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          fontSize: "12px",
                        },
                        "& .MuiInputBase-input": { color: "#939ca3" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-10 font-text-sm-bold text-xs text-darkgray z-[1]"
                      placeholder="Password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img width="16px" height="16px" src="/Password.png" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#ebedf0" },
                        "& .MuiInputBase-root": {
                          height: "40px",
                          backgroundColor: "#fff",
                          paddingRight: "12px",
                          borderRadius: "8px",
                          fontSize: "12px",
                        },
                        "& .MuiInputBase-input": { color: "#939ca3" },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1281px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full lg:flex-wrap">
            <div className="w-[698px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[698px] max-w-full lg:flex-1 mq1050:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[219px] min-h-[216px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/5793404 1.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[225px] min-h-[216px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/5793401 1.png"
                />
              </div>
            </div>
            <div className="w-[410px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <input className="m-0 h-4 w-4 relative z-[1]" type="checkbox" />
                  <div className="relative text-xs leading-[16px] font-text-sm-bold text-base-black text-left z-[1]">
                    Remember me
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-4 w-[15.8px] relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                    alt=""
                    src="/lock_black_24dp 1.png"
                  />
                  <div className="relative text-xs leading-[16px] font-text-sm-bold text-base-black text-left z-[1]">
                    Forgot password?
                  </div>
                </div>
              </div>
              <Button
                className="self-stretch h-10 z-[1]"
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "14",
                  borderColor: "#000",
                  borderRadius: "8px",
                  "&:hover": { borderColor: "#000" },
                  height: 40,
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </form>
      </section>
    );
  };
  
  export default LocationTextInput;
  