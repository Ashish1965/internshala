import { Button } from "@mui/material";

const Testimonials1 = () => {
  return (
    <section className="self-stretch bg-grey-white flex flex-row items-start justify-center pt-4 px-0 pb-[30px] box-border max-w-full z-[2] mt-[-33px] text-left text-lg text-grey-darkest font-text-sm-bold mq750:pb-5 mq750:box-border">
      <div className="h-[330px] w-[1240px] relative hidden max-w-full">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-full h-full border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[174px] left-[40px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[1160px]">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="absolute top-[40px] left-[529px] text-17xl font-semibold mq1050:text-10xl mq450:text-3xl">
          Add your own
        </div>
        <img
          className="absolute top-[40px] left-[459px] w-[54px] h-[54px] overflow-hidden"
          alt=""
          src="/Add.png"
        />
        <div className="absolute top-[250px] left-[40px] rounded-lg bg-grey-white box-border w-[122px] h-10 whitespace-nowrap text-sm text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[12px] left-[29px] leading-[16px] font-semibold">
            Add new
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blue-2 flex flex-row items-center justify-center py-[100px] px-5 box-border max-w-full z-[3] text-5xl mq750:pt-4 mq750:pb-[65px] mq750:box-border">
        <div className="w-[1240px] flex flex-row items-center justify-center p-10 box-border relative max-w-full">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-grey-light" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full z-[1] mq750:gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[24px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                alt=""
                src="/Add.png"
              />
              <h2 className="m-0 h-9 relative text-inherit font-semibold font-inherit inline-block mq450:text-lgi">
                Add your own
              </h2>
            </div>
            <div className="self-stretch h-[60px] relative text-lg tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <Button
              className="w-[121px] h-10 border"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#8064a2",
                fontSize: "14",
                background: "#fff",
                borderRadius: "8px",
                "&:hover": { background: "#fff" },
                width: 121,
                height: 40,
              }}
            >
              Add new
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
