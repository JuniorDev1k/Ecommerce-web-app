import imag1 from "../../Assets/Images/unsplash_V5gSw3EXwqI.png";
import imag2 from "../../Assets/Images/joseph-greve-D_1-g2eLho8-unsplash.jpg";
import imag3 from "../../Assets/Images/The Manly Club is under construction.jpg";

const items = [
  {
    id: 1,
    name: "Accessory",
    imgUrl: imag1,
    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 2,
    name: "Pieces",
    imgUrl: imag3,
    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 3,
    name: "FullConfig",
    imgUrl: imag2,
    discp: "Hight Qulaity Accessory for our setup",
  },
];
const CategorySlider = () => {
  return (
    <>
      <div className=" flex justify-center items-center gap-2 mt-10 ">
        {items.map((I) => {
          const { id, name, imgUrl, discp } = I;
          return (
            <div
              key={id}
              className=" flex flex-nowrap justify-start  h-[60vh] "
            >
              <input
                className="radio-input  hidden"
                type="radio"
                name="slide"
                id={id}
              />
              <label
                id={name}
                htmlFor={id}
                className="card-category w-[5rem]  bg-slate-900 cursor-pointer overflow-hidden flex items-end    "
                style={{ backgroundImage: `${imgUrl}` }}
              >
                <div className="row md:py-6 ">
                  <div className="icon p-2 ">{id}</div>
                  <div className="description">
                    <h4>{name}</h4>
                    <p className="  text-text">{discp}</p>
                  </div>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategorySlider;
