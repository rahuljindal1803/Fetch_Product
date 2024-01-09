import React from "react";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="mt-14 w-full  h-screen flex justify-center items-center ">
        <div className="w-11/12 h-5/6   bg-[#eaeded] flex justify-between ">
          <div className="w-10/12 flex mt-8 justify-start flex-col items-center ">
            <div className="w-8/12 h-64 mt-6 sm:w-10/12 md:w-9/12 lg:w-9/12 p-5 rounded-2xl bg-[#ffffff] flex flex-col ">
              <div className="w-full h-5/6 flex">
                <div className="w-3/6">
                  <img
                    className="w-full h-full"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhASEBASFRASFRYSEBIQDxUSDxYSFRUWFhUSFxcYHSggGB0lHRcVITMhJSkrLy4uFx8zODMtNygtLisBCgoKDQ0NDg0NDi0ZFRkrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAL8BCAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBAUGB//EADsQAAIBAgQEAwQIBQQDAAAAAAABAgMRBBIhMQVBUWEiMnETgZHRBkJSYqGxwfAHFCPh8TNyksKCorL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGFWrGNsztfZczKUrK6te9lf33ffl8Tl1MPJTbbc1J6Pn2TA6kGpK61XYi/+ShSUdF5vyNiNnFP3NdygmSU0p3v2bRcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKcVilSyuSvd2f3dH4rc+Wm+vO1i2S0erV1ZNOzV+afIwklJOE0nf4Puuj/foFGIouVp05XvyveLXZ8iqhieT0a0aejNeUKmHd4vNSb1T29/R9yeKY+h7P2jvnWkUv9TM72i+2j7aMqLfYWleLupcm7tdXfmhUxWbwU3p9aX6I5mEq1qsbStFS3yp5rfZv0OvhMOopJEVdh6dkXoxSMgJAAAFlOnHLOdSahSgm5Sbtayu3flY0sG6tn7RPfwNpKTh9WTS0Ta6AbaQIRJUYgAigAAAAAAAAAAAAAAAAAAAxlNLdr4nD4n9J6NCWWallXmm2krdYr634Ad0OVvU50OKQmk4O6ezLIVgNzMYysypTOdxbi6peCCzVpbR5R+9L5FRscU4pGjCWe0pW8Mecru1mv3dJ9DzeBwc6rUqvVyUV5VfZe5aG/gOGuTc6rcpyd231/Q7NHDpbBWGFoZUbkURGJmiCUSgi7DQ1v0/MAqPX4GM6au3ZXe+i1NmZrtlRz+I4ClWhKnUi3TlZyipSim4u6vlavZ6lWEq/wAtFU6jc8LHSM3rUorvbzQ/L0OlOFzVl0fvA3JwtbVNNXjJO8Wns0+YObwGCorExrVIrC07VKcJPxRjLV26K9421v8AnIG8ACKAAAAAAAAAAAAAAAANpKUpNRhFZpSk7JJbtnzf6S/xIleUMDFRgtPb1I5py7xi9EvX4I6f8WOKyp0KOGg7e3vOrbnCNrR9G3H/AIvqfJKsio6mI+l3EG7vGVr/AHZ5V8I2RNP6a4h2ji4UsVT+zWhGNVL7lWCUovu7nnqszWmwPrvCOJ0p0lWw05OimozhO3tqM3tCaWjT5SWjPRYPGp8z4t9E+K/y+JpyetGo1RxEb2UqU2k2+8fMn1j3PomL9rR9pGMnHK5RU2ucXZtev6oD0fEOMOL9nR8VV7veMO779ieFcNt4pXc5ayk9W2aP0ewscqe8nq29Xc9PRiRVlOFi5IxiZoAkSCQMZSSTbaSW7bsicBjqc4twlfxNdOnUynRz06sFCMnKNoud8qlyemvey6bo8zg+HV8JXftJZ6NWKUZ2t44tvLJbJ2btbTcD1tSV0VFdGtcsKiTVq7svkyio0k22klq29Ekt2wPP8ZhnxNGD8uRynHk7S8F//YGXDIutWqYhp5XaFK619nG9n722/eCK9KAAAAAAAAAAAAAAAAWUaLk7L+xWU8cx1WlhmsJDNXno25JZFzlru+S5X1ewHz/+NOHkqmEqW8LhKm3yUo5dP/r/AIs+XVZn23BcOp8S4fUwc2416MnKm5K84yu2pO+r1ck10bR8X45w2vhasqOIpuFRXtfyyX24S+tHv7nZ3RUc+pIqJkyAJjRc2oR802oR/wB0nlS+LR9Y4t48XXje8YySa5ZlGKf4o859B+ASp5eIYmNqVPxYSnJeKrV+rUt9hPVPm7W0Wvq+HUJTlmlFKT1k1zb1bfcDt8Hp5UrHfpI5+Co2SOlTRFWoyRCMkALaVLN6c2RSp39DaiBnFJaLYitSjOLjJJxejTFyKlWMYuUmlGKu23ZJFR57GqWGazXlTbtCfPtGT2T77P10M8PxanJXzW5eJWYp8alWdX+gpUHFxpKbcZuXKT6J6d1+BzOHcJkpZqlm+i2A7U8ZDk2/RGjiKFSvpPw0ucFvL/d27HSp00uRYkRVVGioqyQLgBIAAAAAAAAAAAAAARJgROVvUokWNGLRUcvG4Oamq+HeWvHf7NSP2ZfP9q2nicNxJKhicLGcr+KM4q8Gt5Xe1uqsy/FYiNOLlN2S+LfRLmyqnxqlRoOrRp3xdZuFsuqy3yub6JNerfwDzGP/AIZ8IU3HNXpyW8I1s3f66k/xMsL9E+FYVqUKHtKi1jKvJ1bNbNQfhT72L8PgJzbnUbcpNuTb3b3Z1KOAS5BXJxFCdeeapey8qOlg8GlyN+nhkjYhTIMKVOxfFCMTNICUWU4ddiIx6leIx1KnKnGpUjGVWWSkpOznJK+WPV25AbiZkmcbifCpVK1CvSrSpVqTyy0c6VSg3edKcLpd1LdM6dWsopyk7Je99klzfYqLKtaMIuUmlFats4eIU8S05pxoJ3hTe8nynP8ARcjalTlUalU0itYU+S+9LrL8vxNhIiq6dFJWSLMpkAIsCQAAAAAAAAAAAAAAAkTFXLMoGDMGhSqxmnld0m4v1W6KMHhfZ5op/wBPT2cbeXqr9CotaNPiGNhSjeW78sV5m/3zHFOJRoq29R+WP6vojhUaM6ss9R3k/gl0XRAIwnXnnqf+MV5Uu3zO1h8KkticNh0jcjEiq40UZqmWJCwGCiTYysTYDGxlt6mLl0KsQ55Zezy57eHN5QM69bKk7N6pO1tF9p3/AH+ZRxXhtHFUnSrRzQlZppuM4yWsZxktYyT5ouoVc0U7NX3TVn3ViZ1FFLTXaMVu+yKiyVRQirtvZLnOT5LuyqMG3mnv9WPKPzfcU6bvmlrLbTaK6L58/wAFcRQAAAAAAAAAAAAAAAAAADKELiEL+hsJWAxUbbGrTxcXOVNpxmtUpW8UftRFTEyjVUZR/pz0pyim3mtdqXTt/m2xKlFtSaWaN8ra1V97PkVFCwsVN1FdSkrSs/C9b3a69zn8Y4sqXghaVV8uUe7+RXxvjWS9OlrU2lLdQ+bOTgsG27yu29W3u31AjC4aU5OU23J6tvc7eHoWJw9BI2oxIpGJYgkSAAEmlqwBXKfQrnUv6dDF66PZ7lRNWDlGSUnFyTSlG2aN1pJX0utyrhyqqCjVs5x8OdPzpbTtyv0NXgvDf5aMqcZuVFO9GMruVOL1cMzfiV9jZxWMULRis1SXlj/2fRAX1q+WyteT8sVu+/ZdzKjSt4pO83u+Vui6IqweHavKTvOXml+i6LsbaIqQAAAAAAAAAAAAAAAAAAM4Qv6EQjcuQGSNTEurGcJQ8VN2jOGiau/9RPn6dhjaNRuE6UrTh9WTeSUXa6fzNsqJPPcb4y7ulQfi2nNcu0e/cnjHFXK9Ki9NpzX5R+ZqYLAW5Aa2AwHNnboUbGdKlYujEikYmaQSJAAEgCnFLRdLv9LfqXD8nugNEyRNWll9OvzNLE1Zvw0lq95taL06sqMcfxHI/Z01mqvlyiusvkXcMwWW8pPNOWspPdv5EcP4coavWT1be7Z0oxIqUjJEEgAAAAAAAAAAAAAAAAAABajJMqizK4FlzjcRxsp3p0/LtKS59l2NjFVJT8MdI83zf9iKWHSKNTC4JLkb0KdixRJsQQkSkSAABIAAAAAAMciMgBikSSAAAAAAAAAAAAAAAAAAAAAAAQ0SAIyixIAEEgCCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                    alt=""
                  />
                </div>
                <div className="w-3/6 ml-4 flex flex-col">
                  <div className="w-full h-4/6"> title </div>
                  <div className="w-full h-2/6">price</div>
                </div>
              </div>
              <div className="w-full h-1/6 flex justify-end mt-2">
                <div className="w-2/6 text-center  ">
                  <button className="w-3/6 h-6/6 cursor-pointer bg-yellow-200">
                    Remove
                  </button>
                </div>
                <div className="w-2/6 text-center">add more</div>
              </div>
            </div>
          </div>
          <div className="w-3/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-64 mr-5 mt-5 p-2 flex bg-white rounded-md flex-col ">
            <div className="w-full p-2 h-1/6 flex justify-between">
              <div className="w-3/6 font-medium">Price Detail</div>

              <div className="w-2/6">item:</div>
            </div>
            <div className="h-4/6 p-4">
              <div className="h-2/6 flex flex-row justify-between">
                <div className="w-3/6">Total amt:</div>
                <div className="w-2/6">Number</div>
              </div>
              <div className="h-2/6 flex flex-row justify-between">
                <div className="w-2/6">Delivery:</div>
                <div className="w-2/6">Number</div>
              </div>
              <hr />
              <div className="h-2/6 mt-2 flex justify-between">
                <div className="w-3/6 flex justify-center ">Total amt:</div>
                <div className="w-2/6 flex ">number</div>
              </div>
              <hr />
            </div>
            <div className="h-1/6 flex justify-center rounded-md bg-yellow-200">
              <button className="cursor-pointer w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
