import "./App.css";
import { useState } from "react";
function App() {
  const style = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const changeStep = (Previous = false) => {
    console.log("Previous:", Previous);

    if (Previous) {
      if (step === 1) {
        setStep((s) => 1);
        return;
      }
      setStep((s) => s - 1);
      return;
    } else {
      if (step === 3) {
        setStep((s) => 1);
        return;
      }
      setStep((s) => s + 1);
      console.log("Step changed to:", step);
      return;
    }
  };

  const changeStepV2 = (Previous = false) => {
    if (Previous) {
      if (step === 1) {
        setStep((s) => 1);
        return;
      }
      setStep((s) => s - 1);
      return;
    } else {
      setStep((s) => s + 1);
      return;
    }
  };

  const changeCount = (Previous = false) => {
    if (Previous) {
      setCount((c) => c - 1);
      return;
    } else {
      setCount((c) => c + 1);
      return;
    }
  };

  const getDateContent = () => {
    const mergeDate = step * count;
    console.log("Merge Date:", mergeDate);
    let today;
    if (mergeDate === 0) {
      today = new Date();
    } else {
      today = new Date();
      today.setDate(today.getDate() + mergeDate);
    }

    // Lấy ngày hiện tại dưới dạng dd/mm/yyyy
    const day = today.getDate();
    const month = today.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Lấy thứ trong tuần
    const daysOfWeek = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const dayOfWeek = daysOfWeek[today.getDay()];

    return `Hôm nay là ${dayOfWeek}, ngày ${formattedDate}`;
  };

  const stepProps = {
    style,
    messages,
    step,
    count,
  };
  const Steps = ({ stepProps }) => {
    return (
      <div>
        <div className="steps">
          <div className="buttons">
            {stepProps.isStep && (
              <button
                style={stepProps.style}
                onClick={() => changeStepV2(true)}
              >
                -
              </button>
            )}
            {!stepProps.isStep && (
              <button style={stepProps.style} onClick={() => changeCount(true)}>
                -
              </button>
            )}

            {stepProps.isStep && <p>Step: {stepProps.step}</p>}
            {!stepProps.isStep && <p>Count: {stepProps.count}</p>}
            {stepProps.isStep && (
              <button style={stepProps.style} onClick={() => changeStepV2()}>
                +
              </button>
            )}
            {!stepProps.isStep && (
              <button style={stepProps.style} onClick={() => changeCount()}>
                +
              </button>
            )}
          </div>
        </div>
        {!stepProps.isStep && (
          <p style={{ textAlign: "center" }}>{getDateContent()}</p>
        )}
      </div>
    );
  };
  return (
    // <div>
    //   <button className="close" onClick={() => setIsOpen(!isOpen)}>
    //     &times;
    //   </button>
    //   {isOpen && (
    //     <div className="steps">
    //       <div className="numbers">
    //         <div className={step === 1 ? "active" : ""}>1</div>
    //         <div className={step === 2 ? "active" : ""}>2</div>
    //         <div className={step === 3 ? "active" : ""}>3</div>
    //       </div>
    //       <p className="message">
    //         Step {step}: {messages[step - 1]}
    //       </p>
    //       <div className="buttons">
    //         <button style={style} onClick={() => changeStep(true)}>
    //           Previous
    //         </button>
    //         <button style={style} onClick={() => changeStep()}>
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
      <Steps stepProps={{ ...stepProps, isStep: true }} />
      <Steps stepProps={{ ...stepProps, isStep: false }} />
    </div>
  );
}

export default App;
