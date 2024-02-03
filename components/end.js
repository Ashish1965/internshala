const End = () => {
    return (
      <div className="self-stretch bg-blue-2 flex flex-col items-center justify-start pt-[100px] px-[30px] pb-[30px] box-border gap-[100px] max-w-full text-left text-17xl text-base-black font-text-sm-bold mq750:gap-[100px] mq750:pt-[65px] mq750:pb-5 mq750:box-border mq450:gap-[100px]">
        <div className="w-[1440px] h-[662px] relative bg-blue-2 hidden max-w-full" />
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[29px] max-w-full">
          <h1 className="m-0 h-[54px] relative text-inherit inline-block italic font-medium font-inherit max-w-full z-[1] mq1050:text-10xl mq450:text-3xl">
            <span>{`Your `}</span>
            <span className="text-primary-full">Hobby</span>
            <span>{`, Your `}</span>
            <span className="text-blue-1">Community...</span>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-2 pr-3 pl-4 bg-primary-full rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-plum">
              <div className="h-[30px] relative text-xl font-semibold font-text-sm-bold text-grey-white text-left inline-block">
                Get started
              </div>
            </button>
            <div className="h-10 w-10 relative z-[2] flex items-center justify-center">
              <img
                className="h-full w-full z-[2] object-contain absolute left-[0px] top-[8px] [transform:scale(1.6)]"
                loading="eager"
                alt=""
                src="/Group 77.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1240px] flex flex-row items-end justify-start gap-[71px] max-w-full mq750:gap-[71px] mq1050:flex-wrap mq450:gap-[71px]">
          <img
            className="w-[531px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[1] mq1050:flex-1"
            loading="eager"
            alt=""
            src="/5820098 1.png"
          />
          <img
            className="h-[302px] flex-1 relative max-w-full overflow-hidden min-w-[415px] z-[1] mq750:min-w-full"
            loading="eager"
            alt=""
            src="/5820000 1.png"
          />
        </div>
      </div>
    );
  };
  
  export default End;
  