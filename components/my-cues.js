import TeacheFrame from "../components/teache-frame";
import ProgramInstances from "../components/program-instances";

const MyCues = () => {
  return (
    <div className="w-full relative bg-grey-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-6 box-border gap-[16px]">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2">
        <div className="h-12 flex-1 relative flex items-center justify-center">
          <img
            className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[0px] top-[7px] w-full [transform:scale(1.292)]"
            alt=""
            src="/nave-bar-responsive.svg"
          />
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[24px] text-left text-xl text-grey-darkest font-text-sm-bold">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="eager"
            alt=""
            src="/add.svg"
          />
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            Add Your Listing
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <TeacheFrame
            groupsBlack24dp11="/groups-black-24dp-1-11.svg"
            people="People"
            anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
          />
          <TeacheFrame
            groupsBlack24dp11="/place.svg"
            people="Place"
            anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
            propBorder="2px solid #77933c"
            propBorder1="2px solid #77933c"
          />
          <TeacheFrame
            groupsBlack24dp11="/product-2.svg"
            people="Product"
            anIndividualOrOrganizatio="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
            propBorder="2px solid #c0504d"
            propBorder1="2px solid #c0504d"
          />
        </div>
      </section>
      <ProgramInstances />
    </div>
  );
};

export default MyCues;
