import FrameComponent from "./frame-component";

const ProductPeople = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border max-w-full mt-[-33px] text-left text-5xl text-base-black font-text-sm-bold">
      <div className="flex-1 bg-grey-white flex flex-row items-center justify-center py-[100px] px-5 box-border max-w-full mq1050:pt-[53px] mq1050:pb-[65px] mq1050:box-border mq450:pb-[42px] mq450:box-border">
        <div className="h-[818px] w-[1440px] relative bg-grey-white hidden max-w-full" />
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
          <FrameComponent
            groupsBlack24dp11="/groups_black_24dp (1) 1.png"
            people="People"
            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            locationOnBlackDP="Connect"
            locationOnBlack24dp1="/location_on_black_24dp 1.png"
            place="Place"
            findAClassSchoolPlaygroun="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            connectGetIt="Meet up"
          />
          <FrameComponent
            groupsBlack24dp11="/shopping_basket_black_24dp (2) 1.png"
            people="Product"
            findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            locationOnBlackDP="Get it"
            locationOnBlack24dp1="/event_available_black_24dp 2.png"
            place="Program"
            findAClassSchoolPlaygroun="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            connectGetIt="Attend"
            propHeight="unset"
            propGap="59px"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPeople;
